window.VIDEO_META = {
    title: '7月发售黄油前瞻',
    upName: '轩张',
    bilibiliLabel: 'bilibili',
    introDuration: 5000,
    endingDuration: 8000,
    bgm: 'Main Theme - Luis Clemente',
    inspiration: '1.图灵坐标-浪浪妈雷达图\n2.退入电子荒原-雷达图制作教学'
};

window.GAME_CONFIG = {
    RADAR_SCALE: 1.15,
    RADAR_GRID_LEVELS: 5,
    RADAR_GRID_LINE_WIDTH: 2.4,
    RADAR_GRID_LINE_OPACITY: 0.38,
    PARTICLE_OPACITY_MULT: 0,
    PARTICLE_SIZE_MULT: 0,
    VERTEX_COUNT: 6,
    INTRO_WAIT_TIME: 1000,
    PAGE_TRANSITION_DURATION: 400,
    DIM_NAMES: ["剧情", "玩法", "色气", "体量", "创新性", "CG质量"],
    GRADE_POSITIONS: { 'S': 0.9, 'A': 0.7, 'B': 0.5, 'C': 0.3, 'D': 0.1 },
    BASE_MAX_SCORES: [1, 1, 1, 1, 1, 1],
    MIN_SCORES: [0, 0, 0, 0, 0, 0],
    ANIM_DURATION: 1500,
    DEFAULT_DURATION: 8000,
    SHOW_DESC: false,
    LABEL_MARGIN: 132,
    LABEL_FONT_SIZE: 80,
    SCORE_FONT_SIZE: 38,
    CG_DEFAULT_DURATION: 5000,
    IMAGE_EXTENSIONS: ['webp', 'jpg', 'png', 'jpeg']
};

window.GAME_LIST = [
    { name: "救世譚～勇者エリカは堕ちても明日を向く～", grades: ['A', 'B', 'S', 'A', 'A', 'S'], overallGrade: 'A', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/救世譚～勇者エリカは堕ちても明日を向く～-cg-1', alt: '救世譚～勇者エリカは堕ちても明日を向く～ CG 1' },
        { basePath: './pic/救世譚～勇者エリカは堕ちても明日を向く～-cg-2', alt: '救世譚～勇者エリカは堕ちても明日を向く～ CG 2' }
    ], usesLargeAI: '否', developer: 'AVANTGRADE', releaseYear: '7月下旬', platform: 'DLsite', genre: 'RPG', language: '日' },
    { name: "HOME", grades: ['S', 'S', 'B', 'A', 'A', 'A'], overallGrade: 'A', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/HOME-cg-1', alt: 'HOME CG 1' },
        { basePath: './pic/HOME-cg-2', alt: 'HOME CG 2' }
    ], usesLargeAI: '否', developer: 'SORAREVO', releaseYear: '7月下旬', platform: 'DLsite', genre: 'SLG', language: '日' },
    { name: "ロレッタ・メイデン 〜適合率0%の劣等兵〜", grades: ['A', 'A', 'S', 'B', 'B', 'A'], overallGrade: 'A', desc: "-", colorIndex: 4, duration: 8000, imageBasePath: "./pic/game-3-main", cgImagePaths: ['./pic/game-3-cg-1', './pic/game-3-cg-2'], cgImages: [
        { basePath: './pic/ロレッタ・メイデン 〜適合率0%の劣等兵〜-cg-1', alt: 'ロレッタ・メイデン 〜適合率0%の劣等兵〜 CG 1' },
        { basePath: './pic/ロレッタ・メイデン 〜適合率0%の劣等兵〜-cg-2', alt: 'ロレッタ・メイデン 〜適合率0%の劣等兵〜 CG 2' }
    ], usesLargeAI: '否', developer: 'ノヴァソイル', releaseYear: '7月下旬', platform: 'DLsite', genre: 'RPG', language: '日' },
    { name: "奪略少女レイラ～セカイのために、この身を捧ぐ供儀契約～", grades: ['B', 'B', 'A', 'B', 'B', 'A'], overallGrade: 'B', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/奪略少女レイラ～セカイのために、この身を捧ぐ供儀契約～-cg-1', alt: '奪略少女レイラ～セカイのために、この身を捧ぐ供儀契約～ CG 1' },
        { basePath: './pic/奪略少女レイラ～セカイのために、この身を捧ぐ供儀契約～-cg-2', alt: '奪略少女レイラ～セカイのために、この身を捧ぐ供儀契約～ CG 2' }
    ], usesLargeAI: '否', developer: '一歩も下がるな!!!', releaseYear: '7月下旬', platform: 'DLsite', genre: 'RPG', language: '日' },
    { name: "Gate of Destiny ～アレキサンドリア戦役～", grades: ['A', 'A', 'B', 'A', 'B', 'A'], overallGrade: 'B', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/Gate of Destiny ～アレキサンドリア戦役～-cg-1', alt: 'Gate of Destiny ～アレキサンドリア戦役～ CG 1' },
        { basePath: './pic/Gate of Destiny ～アレキサンドリア戦役～-cg-2', alt: 'Gate of Destiny ～アレキサンドリア戦役～ CG 2' }
    ], usesLargeAI: '否', developer: 'くにおふぁんたじー', releaseYear: '7月3日', platform: 'DLsite', genre: 'RPG', language: '日' },
    { name: "TUNNEL ESCAPE - Fates Entwined", grades: ['B', 'A', 'B', 'A', 'A', 'B'], overallGrade: 'B', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/TUNNEL ESCAPE - Fates Entwined-cg-1', alt: 'TUNNEL ESCAPE - Fates Entwined CG 1' },
        { basePath: './pic/TUNNEL ESCAPE - Fates Entwined-cg-2', alt: 'TUNNEL ESCAPE - Fates Entwined CG 2' }
    ], usesLargeAI: '否', developer: 'Elzee', releaseYear: '7月下旬', platform: 'DLsite', genre: 'SLG', language: '日' },
    { name: "光のプリンセス ティアリープリズム", grades: ['B', 'B', 'S', 'S', 'A', 'A'], overallGrade: 'A', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/光のプリンセス ティアリープリズム-cg-1', alt: '光のプリンセス ティアリープリズム CG 1' },
        { basePath: './pic/光のプリンセス ティアリープリズム-cg-2', alt: '光のプリンセス ティアリープリズム CG 2' }
    ], usesLargeAI: '否', developer: 'M・I・P', releaseYear: '7月下旬', platform: 'DLsite', genre: 'ARPG', language: '日' },
    { name: "デメテル地下牢脱出記", grades: ['B', 'B', 'A', 'B', 'B', 'A'], overallGrade: 'A', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/デメテル地下牢脱出記-cg-1', alt: 'デメテル地下牢脱出記 CG 1' },
        { basePath: './pic/デメテル地下牢脱出記-cg-2', alt: 'デメテル地下牢脱出記 CG 2' }
    ], usesLargeAI: '否', developer: '棺桶パン', releaseYear: '7月中旬', platform: 'DLsite', genre: 'RPG', language: '日' },
    { name: "天使の早漏治療クリニック", grades: ['S', 'A', 'A', 'B', 'S', 'A'], overallGrade: 'A', desc: "-", colorIndex: 4, duration: 8000, cgImages: [
        { basePath: './pic/天使の早漏治療クリニック-cg-1', alt: '天使の早漏治療クリニック CG 1' },
        { basePath: './pic/天使の早漏治療クリニック-cg-2', alt: '天使の早漏治療クリニック CG 2' }
    ], usesLargeAI: '否', developer: 'べあふるーつ', releaseYear: '7月4日', platform: 'DLsite', genre: 'SLG', language: '日' }
];
