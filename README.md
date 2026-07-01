# Rock Radar

一个面向视频制作的静态雷达图展示页项目，适合做“游戏前瞻 / 排行 / 评价”类内容。当前版本包含完整的开场页、雷达主展示页、CG 展示页和结尾信息页。

## 当前功能

- 开场页展示视频标题和 UP 主信息
- 主页面展示 6 维雷达评分、封面图和基础信息卡
- 每个游戏可进入单独的 CG 展示页
- 结尾页展示 BGM 和灵感来源
- 支持用 `game-data.js` 集中配置全部内容

## 项目结构

```text
.
├── index.html
├── game-data.js
├── intro-title.html
├── game-cg.html
├── ending.html
├── pic/
├── games/
└── README.md
```

说明：

- `index.html`：主页面与主要交互逻辑
- `game-data.js`：视频信息、全局配置、游戏列表
- `pic/`：网页实际读取的封面图和 CG 图
- `games/`：本地内容整理目录，用来存放待导入的原始资料，不建议直接提交

## 运行方式

这个项目没有构建步骤，直接启动静态服务器即可：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 内容配置

### 1. 修改开场和结尾信息

在 `game-data.js` 的 `window.VIDEO_META` 中修改：

```javascript
window.VIDEO_META = {
    title: '7月发售黄油前瞻',
    upName: '轩张',
    bilibiliLabel: 'bilibili',
    introDuration: 5000,
    endingDuration: 8000,
    bgm: 'Main Theme - Luis Clemente',
    inspiration: '1.图灵坐标-浪浪妈雷达图
2.退入电子荒原-雷达图制作教学'
};
```

### 2. 修改游戏列表

每个游戏对应 `window.GAME_LIST` 数组中的一个对象。

示例：

```javascript
{
    name: "HOME",
    grades: ['S', 'S', 'B', 'A', 'A', 'A'],
    overallGrade: 'A',
    desc: "-",
    colorIndex: 4,
    duration: 8000,
    cgImages: [
        { basePath: './pic/HOME-cg-1', alt: 'HOME CG 1' },
        { basePath: './pic/HOME-cg-2', alt: 'HOME CG 2' }
    ],
    usesLargeAI: '否',
    developer: 'SORAREVO',
    releaseYear: '7月下旬',
    platform: 'DLsite',
    genre: 'SLG',
    language: '日'
}
```

字段说明：

- `name`：游戏名称，同时用于页面标题
- `grades`：六维评分，顺序对应 `剧情 / 玩法 / 色气 / 体量 / 创新性 / CG质量`
- `overallGrade`：综合评级
- `desc`：描述文字
- `colorIndex`：颜色预设索引
- `duration`：主雷达页停留时间，单位毫秒
- `cgImages`：CG 图片列表，当前页面最多显示前 2 张
- `usesLargeAI` / `developer` / `releaseYear` / `platform` / `genre` / `language`：底部信息卡内容

### 3. 图片命名规则

网页默认从 `pic/` 目录读取资源。

```text
pic/游戏名.jpg
pic/游戏名-cg-1.jpg
pic/游戏名-cg-2.jpg
```

如果游戏名里包含不适合直接当路径的特殊字符，可以在数据里单独指定：

- `imageBasePath`
- `cgImagePaths`

## 从 `games/` 导入内容

当前仓库支持先把原始资料整理到 `games/` 目录，再手动或脚本导入到网页数据。

建议目录格式：

```text
games/
└── 游戏1/
    ├── 游戏1.md
    ├── 首页.jpg
    ├── CG1.jpg
    └── CG2.jpg
```

导入后：

- 文本信息进入 `game-data.js`
- 图片复制到 `pic/`

## 开发说明

- 这是纯静态前端项目，没有打包流程
- 本地验证时建议检查：
  - 开场页是否正常切入
  - 雷达页封面和信息卡是否正常显示
  - CG 页是否能正常加载两张图
  - 结尾页文案是否正确换行

## 提交建议

不建议提交以下内容：

- `node_modules/`
- `games/` 里的原始导入资料
- 本地验证截图、调试图片
- 本地音频文件

这些内容已经写入 `.gitignore`。
