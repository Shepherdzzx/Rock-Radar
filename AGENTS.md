# Repository Guidelines

## Project Structure & Module Organization
This repository is a static front-end project with top-level entry pages such as `index.html`, `intro-title.html`, `ending.html`, and `game-cg.html`. Shared data and runtime configuration live in `game-data.js`. Media assets are expected in `./pic/` and optional audio is typically referenced as `music.mp3` in the repo root. Utility scripts such as `fix_quotes.py` are kept at the top level alongside the HTML files.

## Build, Test, and Development Commands
There is no package-based build pipeline in this repository. Use a local static server for development instead of opening files directly when testing media or navigation flows.

```bash
python3 -m http.server 8000
```

Serves the project at `http://localhost:8000`.

```bash
python3 fix_quotes.py
```

Normalizes smart quotes in `index.html` after pasted content introduces invalid punctuation.

## Coding Style & Naming Conventions
Follow the existing style in the HTML, CSS, and JavaScript files: 4-space indentation, semicolons enabled, and descriptive uppercase names for global config objects such as `GAME_CONFIG` and `VIDEO_META`. Keep page-specific logic close to the relevant HTML entry file, and place reusable data in `game-data.js`. Use clear asset names tied to the displayed title, for example `pic/赛博朋克2077-cg-1.webp`.

## Testing Guidelines
No automated test suite is configured today. Validate changes by serving the site locally and checking the full playback flow across the affected pages, especially timed transitions, media loading, radar rendering, and missing-asset fallbacks. When changing data entries, verify that image base paths, labels, and durations stay aligned.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries, often in Chinese, such as `修改` or `修复了MIN_SCORES`. Prefer concise commit subjects that describe the user-visible change. For pull requests, include:

- A short summary of the pages or assets changed
- Notes about any config or data updates
- Screenshots for visual adjustments
- Manual verification steps, for example `python3 -m http.server 8000` plus the pages tested

## Asset & Configuration Notes
Large content changes usually happen in configuration objects and item lists rather than in framework code. Keep durations, score arrays, and asset filenames synchronized to avoid broken transitions or missing media at runtime.
