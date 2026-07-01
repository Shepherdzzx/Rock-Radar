# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Rock Radar is a static browser-based presentation project for generating video-ready radar-chart showcases. The repository currently contains two closely related variants:

- `index.html`: the main game-review experience with four scenes (`radar`, `intro`, `cg`, `ending`) driven by `window.GAME_CONFIG`, `window.GAME_LIST`, and `window.VIDEO_META`.
- `index - cs.html`: an older/darker music-band variant with the same core radar-animation ideas but a different layout and data model.

There is no build system or framework. The app runs entirely as plain HTML/CSS/JavaScript in the browser, so most work happens by editing the inline configuration/data blocks and the large inline scripts.

## Run / development commands

This repository does not define package-manager scripts, a test runner, or a linter.

- Serve locally with a static file server:
  - `python3 -m http.server 8000`
  - then open `http://localhost:8000/index.html`
- Quick no-server open for simple checks:
  - open `index.html` directly in a browser
- Main entry points to verify manually:
  - `index.html`
  - `index - cs.html`
  - `intro-title.html` (redirects to `index.html?from=intro`)
  - `game-cg.html?returnTo=1` (redirect helper back into `index.html`)
  - `ending.html` (redirects to `index.html`)

Because there are no automated tests, validation is manual in the browser.

## Architecture

### Single-file app pattern

The main app is implemented as one large HTML file with three layers living together:

1. **Theme/layout CSS** in `<style>`.
2. **Data/config bootstrap** on `window` (`VIDEO_META`, `GAME_CONFIG`, `GAME_LIST`, `ROCK_RADAR_ASSETS`).
3. **Runtime engine** in inline JavaScript that transforms config + data into timed scene playback.

When making changes, treat `index.html` as the canonical source of truth for both presentation and application logic.

### Data flow in `index.html`

`index.html` uses a two-step data pipeline:

- Author-facing source data lives in `window.GAME_LIST` using semantic fields like `grades`, `overallGrade`, `cgImages`, metadata cards, and per-item `duration`.
- Runtime data is derived into `games`, where each entry gets:
  - resolved theme colors from `COLOR_PRESETS`
  - normalized radar values in `points` via `gradeToPosition()`
  - computed durations and featured/background flags

Timeline playback is then built from `games` into `timeSegments` and `totalDuration`, which drive scene switching and keyboard navigation.

### Scene/state engine

The game-review variant is effectively a small state machine. The major scenes are:

- `INTRO`: title card based on `VIDEO_META`
- `RADAR`: main review card with radar canvas, cover image, and metadata grid
- `CG`: optional CG gallery for a game near the end of its segment
- `ENDING`: closing information card built from `VIDEO_META` + all game names

Key orchestration functions:

- `switchScene()` and `setActiveScene()` control scene visibility and overlay transitions.
- `enterIntroScene()`, `enterRadarScene()`, `enterCgScene()`, and `enterEndingScene()` are the scene-entry APIs.
- `tick()` is the master animation loop; it advances time, chooses the current segment, triggers transitions, updates animations, and redraws the radar each frame.
- `updateUI()` / `performTransition()` update the visible game card when the timeline enters a new segment.

If a bug involves timing, autoplay, or skipped pages, start by tracing `tick()`, `timeSegments`, `hasTriggeredCgPage`, `hasTriggeredEndingPage`, and the scene entry functions.

### Radar rendering model

The radar chart is canvas-rendered, not DOM/SVG-based.

Core pieces:

- `CONFIG` controls geometry (`VERTEX_COUNT`, `RADAR_SCALE`, `LABEL_MARGIN`, grid settings).
- `GRADE_POSITIONS` maps letter grades to normalized radial distances.
- `drawRadar()` renders the background plate, polygon grid, axis lines, animated polygon fill/stroke, vertex markers, and labels.
- `currentScores`, `startScores`, `targetScores`, `animStartTime`, and `ANIM_DURATION` drive interpolation between items.

Changing dimension count or scoring semantics means updating the config/data arrays consistently; `VERTEX_COUNT`, `DIM_NAMES`, `BASE_MAX_SCORES`, `MIN_SCORES`, and grade/value arrays must stay aligned.

### Asset loading and fallback strategy

Images and audio are expected as static files, but the runtime supports an alternate inline-asset path:

- `window.ROCK_RADAR_ASSETS` can provide in-memory assets keyed by filename.
- `getInlineAsset()` and `tryLoadImageWithFallback()` first check inline assets, then try filesystem paths with extensions from `CONFIG.IMAGE_EXTENSIONS`.
- Main cover art is loaded from `./pic/<game name>.<ext>`.
- CG images are loaded from each `cgImages[].basePath` or inferred as `./pic/<game name>-cg-N`.

This means content work is often just data/config changes plus dropping correctly named files into `pic/`.

### Redirect helper pages

Several small HTML files are routing shims rather than standalone apps:

- `intro-title.html` redirects to `index.html?from=intro`
- `game-cg.html` stores `returnTo` in `sessionStorage` and redirects to `index.html`
- `ending.html` redirects to `index.html`

These matter when debugging deep links or playback restoration because `restorePlaybackState()` in `index.html` expects those query params / session keys.

### Alternate variant files

- `index - cs.html` is a separate variant for band/character-style radar presentations. It has similar canvas/particle/timeline concepts but its own inline `CONFIG` and dataset.
- `game-data.js` is a data-only source for the game-review mode (`VIDEO_META`, `GAME_CONFIG`, `GAME_LIST`). If the project later externalizes data from `index.html`, this file is the obvious integration point.

Before refactoring shared logic, verify which variant is intended to remain primary; the two pages share concepts but are not currently wired into a common module.

## Important repository guidance from README

The README documents the project as a highly configurable radar showcase intended for full-screen video recording, with customization centered on:

- editing the config object for radar/layout behavior
- editing the item list for showcased entries
- placing images under `pic/`
- optionally adding `music.mp3`

Preserve that low-friction workflow when changing the project: configuration and content editing are part of the product, not just implementation details.