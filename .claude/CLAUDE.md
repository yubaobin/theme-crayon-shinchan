# 开发规范

本文档旨在规范 `theme-crayon-shinchan` 主题的开发流程，确保代码质量和团队协作效率。

## 项目概述

### 项目简介

`theme-crayon-shinchan` 是一个为 Halo 2.0 博客系统设计的现代化主题，以经典动漫角色蜡笔小新为主题风格。该主题旨在提供简洁、美观、功能完整的博客展示界面，同时集成了现代前端开发最佳实践。

### 设计理念

- **简洁美观**: 采用现代化设计风格，界面清晰简洁
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **性能优化**: 代码分割、图片懒加载、资源压缩
- **用户体验**: 流畅的交互效果、清晰的信息层级
- **可定制性**: 丰富的配置选项，支持自定义主题

### 技术架构

| 技术 | 版本 | 用途 |
|------|------|------|
| **Halo** | 2.0.0+ | 博客系统核心 |
| **Thymeleaf** | 3.x | 模板引擎 |
| **TypeScript** | 5.x | 开发语言 |
| **Vite** | 7.x | 构建工具 |
| **Tailwind CSS** | 4.x | 样式框架 |
| **Alpine.js** | 3.x | 轻量级交互框架 |
| **Iconify** | 2.x | 图标系统 |
| **ESLint** | 9.x | 代码检查 |
| **Prettier** | 3.x | 代码格式化 |
| **Husky** | 9.x | Git 钩子 |
| **lint-staged** | 16.x | 代码检查 |

### 特性说明

#### 功能特性
- ✅ **响应式设计**: 适配各种屏幕尺寸
- ✅ **文章管理**: 列表、详情、分类、标签
- ✅ **内容展示**: 支持 Markdown、代码高亮、TOC
- ✅ **搜索功能**: 全局搜索、分类搜索
- ✅ **评论系统**: 支持 Halo 内置评论
- ✅ **社交分享**: 多种分享方式
- ✅ **页面自定义**: 自定义页面、菜单配置
- ✅ **主题配置**: 丰富的主题设置选项

#### 技术特性
- ✅ **现代构建工具**: Vite 提供极速开发体验
- ✅ **原子化 CSS**: Tailwind CSS 提高开发效率
- ✅ **代码规范**: ESLint + Prettier 保证代码质量
- ✅ **类型安全**: TypeScript 提供类型支持
- ✅ **自动格式化**: 提交前自动格式化
- ✅ **热重载**: 开发过程中实时更新
- ✅ **按需加载**: 动态导入优化首屏加载

### 主题配置

**主题设置文件**：`settings.yaml`

```yaml
apiVersion: v1alpha1
kind: Setting
metadata:
  name: theme-crayon-shinchan-setting
spec:
  forms:
    - group: basic
      label: 基本设置
      formSchema:
        - $formkit: text
          name: title
          label: 站点标题
          value: "YBB's Blog"
        - $formkit: attachment
          name: favicon
          label: 浏览器图标 (Favicon)
        - $formkit: text
          name: author
          label: 作者名称
          value: 'ybb'
        - $formkit: textarea
          name: description
          label: 站点描述
          value: '前端开发者 / 独立开发者 / 博主'
        - $formkit: attachment
          name: logo
          label: 站点Logo
        - $formkit: select
          name: defaultTheme
          label: 默认主题模式
          value: dark
          options:
            - label: 暗色模式
              value: dark
            - label: 亮色模式
              value: light
            - label: 跟随系统
              value: auto
        - $formkit: textarea
          name: customHead
          label: 自定义 Head 代码
        - $formkit: textarea
          name: customScript
          label: 自定义 JavaScript

    - group: hero
      label: 首页头部
      formSchema:
        - $formkit: attachment
          name: avatar
          label: 头像
        - $formkit: text
          name: name
          label: 显示名称
          value: 'ybb'
        - $formkit: checkbox
          name: enableTypewriter
          label: 启用打字机效果
          value: true
        - $formkit: text
          name: tagline
          label: 个性标语
          value: '热爱可抵岁月漫长'
        - $formkit: textarea
          name: bio
          label: 个人简介
          value: "一个热爱技术、喜欢折腾的开发者。\n专注于前端开发，偶尔写写后端。\n记录生活，分享技术，探索未知。"

    - group: welcome
      label: 欢迎页设置
      formSchema:
        - $formkit: checkbox
          name: enabled
          label: 启用欢迎页
          value: true
        - $formkit: checkbox
          name: showMascot
          label: 显示吉祥物
          value: true
        - $formkit: attachment
          name: mascotDark
          label: 暗色模式吉祥物
        - $formkit: attachment
          name: mascotLight
          label: 亮色模式吉祥物
        - $formkit: text
          name: mascotCredit
          label: 吉祥物来源链接
          value: 'https://x.com/Seseren_kr'
        - $formkit: textarea
          name: sayings
          label: 吉祥物语录
          value: "点击任意处进入哦~\n欢迎来到我的小站~\n今天也要元气满满！\n很高兴见到你~"

    - group: social
      label: 社交链接
      formSchema:
        - $formkit: repeater
          name: links
          label: 社交链接列表
          value:
            - name: 'GitHub'
              url: ''
              icon: 'github'
            - name: 'QQ'
              url: ''
              icon: 'qq'
            - name: 'Email'
              url: ''
              icon: 'email'
          children:
            - $formkit: text
              name: name
              label: 名称
            - $formkit: text
              name: url
              label: 链接
            - $formkit: select
              name: icon
              label: 图标
              value: 'github'
              options:
                - label: GitHub
                  value: github
                - label: Twitter / X
                  value: twitter
                - label: Email
                  value: email
                - label: 微博
                  value: weibo
                - label: 哔哩哔哩
                  value: bilibili
                - label: 知乎
                  value: zhihu
                - label: Telegram
                  value: telegram
                - label: QQ
                  value: qq
                - label: 微信
                  value: wx
                - label: Discord
                  value: discord
        - $formkit: checkbox
          name: enableSponsor
          label: 启用赞助功能
          value: false
        - $formkit: attachment
          name: sponsorQrCode
          label: 赞助二维码
        - $formkit: text
          name: sponsorTitle
          label: 赞助标题
          value: '赞赏支持'
        - $formkit: text
          name: sponsorText
          label: 赞助说明
          value: '感谢你的支持 ❤️'

    - group: compass
      label: 风向标设置
      formSchema:
        - $formkit: checkbox
          name: enabled
          label: 启用风向标
          value: true
        - $formkit: text
          name: title
          label: 标题
          value: '风向标'
        - $formkit: text
          name: subtitle
          label: 副标题
          value: '快速导航到你想去的地方'
        - $formkit: checkbox
          name: showArchives
          label: 显示归档链接
          value: true
        - $formkit: checkbox
          name: showTags
          label: 显示标签链接
          value: true
        - $formkit: checkbox
          name: showCategories
          label: 显示分类链接
          value: true
        - $formkit: checkbox
          name: showAbout
          label: 显示关于我链接
          value: true
        - $formkit: checkbox
          name: showMoments
          label: 显示碎碎念链接
          value: true
        - $formkit: checkbox
          name: showLinks
          label: 显示朋友们链接
          value: true
        - $formkit: checkbox
          name: showGuestbook
          label: 显示留言板链接
          value: true
        - $formkit: checkbox
          name: showProjects
          label: 显示项目集链接
          value: true
        - $formkit: checkbox
          name: showPhotos
          label: 显示图库链接
          value: true
        - $formkit: checkbox
          name: showFriendsCircle
          label: 显示朋友圈链接
          value: true

    - group: home
      label: 首页内容
      formSchema:
        - $formkit: checkbox
          name: showHeroBackground
          label: 显示首页背景壁纸
          value: true
        - $formkit: attachment
          name: heroBackground
          label: 背景壁纸图片/视频
        - $formkit: checkbox
          name: showThemeDecor
          label: 显示主题装饰图片
          value: false
        - $formkit: attachment
          name: customDecorLight
          label: 自定义亮色装饰图片
        - $formkit: attachment
          name: customDecorDark
          label: 自定义暗色装饰图片
        - $formkit: checkbox
          name: showWeatherClock
          label: 显示天气时钟
          value: false
        - $formkit: text
          name: seniverseKey
          label: 心知天气 API Key
        - $formkit: checkbox
          name: showRecentPosts
          label: 显示近期笔记
          value: false
        - $formkit: checkbox
          name: showActivity
          label: 显示站点动态
          value: false
        - $formkit: checkbox
          name: showMemoCards
          label: 显示随想碎片
          value: false
        - $formkit: checkbox
          name: showLifeMoments
          label: 显示生活回想
          value: false

    - group: post
      label: 文章页面
      formSchema:
        - $formkit: repeater
          name: sidebarOrder
          label: 侧边栏组件顺序
          value:
            - component: 'toc'
              enabled: true
            - component: 'author'
              enabled: true
            - component: 'related'
              enabled: true
            - component: 'tags'
              enabled: true
          children:
            - $formkit: select
              name: component
              label: 组件类型
              value: 'toc'
              options:
                - label: 文章目录
                  value: toc
                - label: 作者信息
                  value: author
                - label: 相关文章
                  value: related
                - label: 热门标签
                  value: tags
            - $formkit: checkbox
              name: enabled
              label: 启用
              value: true
        - $formkit: number
          name: relatedCount
          label: 相关文章数量
          value: 3
          min: 2
          max: 6
        - $formkit: checkbox
          name: showCopyright
          label: 显示版权信息
          value: true
        - $formkit: textarea
          name: copyrightText
          label: 版权声明文字
          value: '本文采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" class="copyright-license">CC BY-NC-SA 4.0</a> 许可协议，转载请注明出处。'
        - $formkit: checkbox
          name: showShare
          label: 显示分享按钮
          value: true
        - $formkit: checkbox
          name: showReward
          label: 显示打赏组件
          value: false
        - $formkit: attachment
          name: rewardQrCode
          label: 打赏二维码
        - $formkit: text
          name: rewardTitle
          label: 打赏标题
          value: '赞赏支持'
        - $formkit: textarea
          name: rewardText
          label: 打赏说明
          value: '如果觉得文章对你有帮助，可以请作者喝杯咖啡 ☕'

    - group: footer
      label: 页脚设置
      formSchema:
        - $formkit: text
          name: icp
          label: ICP 备案号
        - $formkit: text
          name: policeRecord
          label: 公安备案号
        - $formkit: text
          name: startYear
          label: 建站年份
          value: '2024'
        - $formkit: checkbox
          name: showRss
          label: 显示 RSS 订阅
          value: true
        - $formkit: checkbox
          name: showPoweredBy
          label: 显示 Powered by
          value: true
        - $formkit: checkbox
          name: showProvider
          label: 显示服务商标识
          value: false
        - $formkit: attachment
          name: providerLogo
          label: 服务商 Logo
        - $formkit: text
          name: providerName
          label: 服务商名称
        - $formkit: text
          name: providerUrl
          label: 服务商链接
        - $formkit: checkbox
          name: showPrivacy
          label: 显示隐私政策
          value: true
        - $formkit: textarea
          name: privacyContent
          label: 隐私政策内容
        - $formkit: checkbox
          name: showTerms
          label: 显示服务条款
          value: true
        - $formkit: textarea
          name: termsContent
          label: 服务条款内容

    - group: sidebar
      label: 侧边栏设置
      formSchema:
        - $formkit: checkbox
          name: showFortune
          label: 显示一言
          value: true
        - $formkit: text
          name: hitokotoApi
          label: 一言 API 地址
          value: 'https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=i&c=k'
        - $formkit: checkbox
          name: showTagCloud
          label: 显示标签云
          value: true
        - $formkit: checkbox
          name: showHotPosts
          label: 显示热门文章
          value: true
        - $formkit: number
          name: hotPostsCount
          label: 热门文章数量
          value: 5
          min: 3
          max: 10
        - $formkit: checkbox
          name: showRecentComments
          label: 显示最新评论
          value: true
        - $formkit: number
          name: recentCommentsCount
          label: 最新评论数量
          value: 5
          min: 3
          max: 10

    - group: about
      label: 关于页面
      formSchema:
        - $formkit: repeater
          name: tagsLeft
          label: 左侧标签
          value:
            - text: '热爱开源'
            - text: '设计爱好者'
            - text: '终身学习'
          children:
            - $formkit: text
              name: text
              label: 标签文字
        - $formkit: repeater
          name: tagsRight
          label: 右侧标签
          value:
            - text: '前端开发'
            - text: '独立开发者'
            - text: '折腾爱好者'
          children:
            - $formkit: text
              name: text
              label: 标签文字
        - $formkit: repeater
          name: skills
          label: 技能列表
          value:
            - name: 'JavaScript'
              level: 90
              icon: 'js'
            - name: 'TypeScript'
              level: 85
              icon: 'ts'
            - name: 'React'
              level: 88
              icon: 'react'
            - name: 'Vue'
              level: 82
              icon: 'vue'
            - name: 'Node.js'
              level: 75
              icon: 'node'
            - name: 'CSS / Sass'
              level: 92
              icon: 'css'
          children:
            - $formkit: text
              name: name
              label: 技能名称
            - $formkit: number
              name: level
              label: 熟练度
              min: 0
              max: 100
            - $formkit: select
              name: icon
              label: 图标
              options:
                - label: JavaScript
                  value: js
                - label: TypeScript
                  value: ts
                - label: React
                  value: react
                - label: Vue
                  value: vue
                - label: Node.js
                  value: node
                - label: CSS
                  value: css
                - label: HTML
                  value: html
                - label: Python
                  value: python
        - $formkit: textarea
          name: aboutSite
          label: 关于本站
          value: "嗨，欢迎来到我的小站。这里是我记录技术探索、分享生活感悟的地方。\n\n作为一名前端开发者，我热衷于探索新技术，追求简洁优雅的代码。工作之余，我喜欢折腾各种有趣的项目，也会在这里分享一些心得。"
        - $formkit: textarea
          name: siteHistory
          label: 建站历程
          value: "始建于 2024 年，纯个人兴趣建站，记录技术与生活。\n\n最初使用 Hexo 搭建，后迁移至 Halo，体验更现代化的博客系统。\n\n记录生活中的点滴，分享技术探索的心得，收藏有趣的发现，顺便当做备忘录。\n\n经历了多次改版、换主题、折腾服务器，一直靠热爱支撑，毕竟它承载着成长和回忆。"
        - $formkit: text
          name: qq
          label: QQ
        - $formkit: text
          name: wx
          label: 微信
        - $formkit: checkbox
          name: showMascot
          label: 显示吉祥物
          value: true
        - $formkit: attachment
          name: mascotImage
          label: 吉祥物图片
        - $formkit: text
          name: mascotText
          label: 吉祥物文字
          value: '嘿，你好啊~'
        - $formkit: text
          name: foreverBlogStartDate
          label: 建站日期
          value: '2024-01-01'
        - $formkit: checkbox
          name: showAfdian
          label: 显示爱发电赞助
          value: false
        - $formkit: text
          name: afdianUrl
          label: 爱发电链接

    - group: seo
      label: SEO 优化
      formSchema:
        - $formkit: text
          name: keywords
          label: 网站关键词
          value: '博客,技术,前端,开发'
        - $formkit: checkbox
          name: enableJsonLd
          label: 启用 JSON-LD
          value: true
        - $formkit: text
          name: baiduSiteVerification
          label: 百度站点验证
        - $formkit: text
          name: googleSiteVerification
          label: Google 站点验证

    - group: watermark
      label: 水印设置
      formSchema:
        - $formkit: checkbox
          name: enabled
          label: 启用水印
          value: true
        - $formkit: text
          name: text
          label: 水印文字
          value: 'ybb'
        - $formkit: select
          name: source
          label: 水印来源
          value: 'custom'
          options:
            - label: 自定义文字
              value: custom
            - label: 使用站点标题
              value: siteTitle
        - $formkit: number
          name: opacity
          label: 水印透明度
          value: 0.05
          min: 0.01
          max: 0.2

    - group: projects
      label: 项目展示
      formSchema:
        - $formkit: repeater
          name: githubRepos
          label: GitHub 项目列表
          value: []
          children:
            - $formkit: text
              name: url
              label: GitHub 仓库链接
        - $formkit: repeater
          name: customProjects
          label: 自定义项目列表
          value: []
          children:
            - $formkit: text
              name: name
              label: 项目名称
            - $formkit: text
              name: url
              label: 项目链接
            - $formkit: textarea
              name: description
              label: 项目描述
            - $formkit: attachment
              name: avatar
              label: 项目头像
            - $formkit: text
              name: language
              label: 主要语言
            - $formkit: number
              name: stars
              label: Star 数量
              value: 0
            - $formkit: number
              name: forks
              label: Fork 数量
              value: 0
            - $formkit: text
              name: topics
              label: 项目标签

    - group: links
      label: 友链页面
      formSchema:
        - $formkit: text
          name: ownerName
          label: 站点名称
          value: "YBB's Blog"
        - $formkit: text
          name: ownerUrl
          label: 站点链接
          value: 'https://halo.aobp.cn/'
        - $formkit: attachment
          name: ownerAvatar
          label: 站点头像
          value: '/upload/%E5%A4%B4%E5%83%8F.png'
        - $formkit: textarea
          name: ownerDescription
          label: 站点描述
          value: '前端开发者 / 独立开发者 / 博主'
        - $formkit: checkbox
          name: showApplyButton
          label: 显示申请友链按钮
          value: true
        - $formkit: text
          name: offlineLabel
          label: 失联友链标签
          value: '失联咯~'
```

#### 配置项说明

**基本设置（Basic）：**
- `title` - 站点标题（显示在浏览器标签和页脚）
- `favicon` - 浏览器图标（Favicon）
- `author` - 作者名称（用于关于页面和文章署名）
- `description` - 站点描述（显示在首页和关于页面）
- `logo` - 站点Logo（用于关于页面和友链申请）
- `defaultTheme` - 默认主题模式（dark/light/auto）
- `customHead` - 自定义 Head 代码（在 <head> 标签中插入自定义代码）
- `customScript` - 自定义 JavaScript（在页面底部插入自定义 JavaScript 代码）

**首页头部（Hero）：**
- `avatar` - 头像（显示在首页头部）
- `name` - 显示名称（显示在头像下方）
- `enableTypewriter` - 启用打字机效果（为首页大标题添加打字机动画）
- `tagline` - 个性标语（显示在名称下方）
- `bio` - 个人简介（显示在首页的详细介绍）

**欢迎页设置（Welcome）：**
- `enabled` - 启用欢迎页（首次访问时显示全屏欢迎页）
- `showMascot` - 显示吉祥物（在欢迎页右下角显示吉祥物动画）
- `mascotDark` - 暗色模式吉祥物（上传暗色模式下显示的吉祥物）
- `mascotLight` - 亮色模式吉祥物（上传亮色模式下显示的吉祥物）
- `mascotCredit` - 吉祥物来源链接（显示为 Twitter/X 图标）
- `sayings` - 吉祥物语录（气泡随机显示的话语）

**社交链接（Social）：**
- `links` - 社交链接列表（添加社交媒体链接，支持自定义图标）
- `enableSponsor` - 启用赞助功能（在首页社交图标最右边显示赞助图标）
- `sponsorQrCode` - 赞助二维码（上传赞助二维码图片）
- `sponsorTitle` - 赞助标题（赞助悬浮层的标题）
- `sponsorText` - 赞助说明（赞助悬浮层的说明文字）

**风向标设置（Compass）：**
- `enabled` - 启用风向标（是否在首页显示风向标导航区域）
- `title` - 标题（风向标标题）
- `subtitle` - 副标题（风向标副标题）
- `showArchives` - 显示归档链接
- `showTags` - 显示标签链接
- `showCategories` - 显示分类链接
- `showAbout` - 显示关于我链接
- `showMoments` - 显示碎碎念链接
- `showLinks` - 显示朋友们链接
- `showGuestbook` - 显示留言板链接
- `showProjects` - 显示项目集链接
- `showPhotos` - 显示图库链接
- `showFriendsCircle` - 显示朋友圈链接

**首页内容（Home）：**
- `showHeroBackground` - 显示首页背景壁纸（第一屏显示背景壁纸，滚动时模糊消失）
- `heroBackground` - 背景壁纸图片/视频（上传首页背景壁纸）
- `showThemeDecor` - 显示主题装饰图片（在首页头部显示主题切换的装饰图片）
- `customDecorLight` - 自定义亮色装饰图片（上传亮色模式装饰图片）
- `customDecorDark` - 自定义暗色装饰图片（上传暗色模式装饰图片）
- `showWeatherClock` - 显示天气时钟（显示时间、城市、天气、温度信息）
- `seniverseKey` - 心知天气 API Key（前往 https://www.seniverse.com 注册获取）
- `showRecentPosts` - 显示近期笔记（在首页显示最新文章列表）
- `showActivity` - 显示站点动态（显示最新文章、碎碎念等动态流）
- `showMemoCards` - 显示随想碎片（显示随想碎片卡片轮播）
- `showLifeMoments` - 显示生活回想（显示生活回想图片展示）

**文章页面（Post）：**
- `sidebarOrder` - 侧边栏组件顺序（拖动调整侧边栏组件的显示顺序）
- `relatedCount` - 相关文章数量（相关文章组件显示的文章数量）
- `showCopyright` - 显示版权信息（在文章底部显示版权声明）
- `copyrightText` - 版权声明文字（自定义版权声明内容）
- `showShare` - 显示分享按钮（在文章底部显示分享按钮）
- `showReward` - 显示打赏组件（在文章底部显示打赏组件）
- `rewardQrCode` - 打赏二维码（上传打赏二维码图片）
- `rewardTitle` - 打赏标题（打赏组件的标题）
- `rewardText` - 打赏说明（打赏组件的说明文字）

**页脚设置（Footer）：**
- `icp` - ICP 备案号（网站备案号）
- `policeRecord` - 公安备案号（公安备案号）
- `startYear` - 建站年份（用于显示版权年份范围）
- `showRss` - 显示 RSS 订阅（显示 RSS 订阅链接）
- `showPoweredBy` - 显示 Powered by（显示"由 Halo 驱动"）
- `showProvider` - 显示服务商标识（显示"本站由 [Logo] 提供支持"）
- `providerLogo` - 服务商 Logo（上传服务商的 Logo 图片）
- `providerName` - 服务商名称（服务商名称）
- `providerUrl` - 服务商链接（点击 Logo 跳转的链接）
- `showPrivacy` - 显示隐私政策（在页脚显示隐私政策链接）
- `privacyContent` - 隐私政策内容（隐私政策的详细内容，支持 Markdown）
- `showTerms` - 显示服务条款（在页脚显示服务条款链接）
- `termsContent` - 服务条款内容（服务条款的详细内容，支持 Markdown）

**侧边栏设置（Sidebar）：**
- `showFortune` - 显示一言（是否显示一言模块）
- `hitokotoApi` - 一言 API 地址（自定义一言 API 地址）
- `showTagCloud` - 显示标签云（是否显示标签云模块）
- `showHotPosts` - 显示热门文章（是否显示热门文章模块）
- `hotPostsCount` - 热门文章数量（热门文章显示数量）
- `showRecentComments` - 显示最新评论（是否显示最新评论模块）
- `recentCommentsCount` - 最新评论数量（最新评论显示数量）

**关于页面（About）：**
- `tagsLeft` - 左侧标签（显示在头像左侧的标签）
- `tagsRight` - 右侧标签（显示在头像右侧的标签）
- `skills` - 技能列表（在关于页面显示的技能）
- `aboutSite` - 关于本站（显示在关于页面的"关于本站"部分）
- `siteHistory` - 建站历程（显示在关于页面的"建站历程"部分）
- `qq` - QQ（显示 QQ 号码）
- `wx` - 微信（显示微信号）
- `showMascot` - 显示吉祥物（是否在关于页面显示吉祥物）
- `mascotImage` - 吉祥物图片（自定义吉祥物图片）
- `mascotText` - 吉祥物文字（吉祥物旁边显示的文字）
- `foreverBlogStartDate` - 建站日期（格式：YYYY-MM-DD）
- `showAfdian` - 显示爱发电赞助（是否显示爱发电赞助者组件）
- `afdianUrl` - 爱发电链接（爱发电主页链接）

**SEO 优化（SEO）：**
- `keywords` - 网站关键词（用逗号分隔，用于 SEO）
- `enableJsonLd` - 启用 JSON-LD（启用结构化数据标记，有利于 SEO）
- `baiduSiteVerification` - 百度站点验证（百度站长平台验证代码）
- `googleSiteVerification` - Google 站点验证（Google Search Console 验证代码）

**水印设置（Watermark）：**
- `enabled` - 启用水印（是否在页面各处显示装饰性水印）
- `text` - 水印文字（自定义水印显示的文字）
- `source` - 水印来源（选择水印文字的来源：custom 或 siteTitle）
- `opacity` - 水印透明度（范围 0.01-0.2）

**项目展示（Projects）：**
- `githubRepos` - GitHub 项目列表（添加 GitHub 项目仓库链接）
- `customProjects` - 自定义项目列表（手动添加项目信息）

**友链页面（Links）：**
- `ownerName` - 站点名称（友链申请区域显示的站点名称）
- `ownerUrl` - 站点链接（友链申请区域显示的站点链接）
- `ownerAvatar` - 站点头像（友链申请区域显示的站点头像）
- `ownerDescription` - 站点描述（友链申请区域显示的站点描述）
- `showApplyButton` - 显示申请友链按钮（是否显示"申请友链 ›"按钮）
- `offlineLabel` - 失联友链标签（失效友链卡片右上角显示的标签文字）

#### 配置使用示例

在模板中访问配置：

```html
<!-- 获取配置值 -->
<title th:text="${theme.config.basic.title} ?: ${site.title}">站点标题</title>
<link rel="icon" th:href="${theme.config.basic.favicon} ?: @{/assets/images/ics6.webp}" />

<!-- 条件判断 -->
<div th:if="${theme.config.basic.defaultTheme == 'dark'}">
  <p>当前使用暗色模式</p>
</div>

<!-- 循环遍历 -->
<ul>
  <li th:each="link : ${theme.config.social.links}">
    <a th:href="${link.url}" th:text="${link.name}">
      <span th:class="'icon-[tabler--' + ${link.icon}]"></span>
    </a>
  </li>
</ul>

<!-- 配置驱动的样式 -->
<style th:inline="css">
  .watermark {
    opacity: /*[[${theme.config.watermark.opacity}]]*/ 0.05;
  }
</style>
```

## 目录结构

```
├── src/                     # 源代码目录
│   ├── main.ts             # 主入口文件
│   ├── vite-env.d.ts       # Vite 环境声明
│   └── styles/             # 样式文件
│       ├── tailwind.css    # Tailwind 基础样式
│       └── main.css        # 自定义样式
├── templates/              # 模板文件目录
│   ├── index.html          # 首页模板
│   ├── post.html           # 文章详情页模板
│   └── modules/            # 公共模块
│       └── layout.html     # 布局模板
├── .husky/                 # Husky 钩子配置
├── eslint.config.js        # ESLint 配置
├── prettier.config.js      # Prettier 配置
├── tailwind.config.js      # Tailwind 配置
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖
```

## 开发流程

### 1. 主题配置

主题配置在 `settings.yaml` 文件中定义，支持以下配置项：

**文章设置（Post）：**
- `content_size` - 文章内容字体大小（prose-sm, prose-base, prose-lg, prose-xl, prose-2xl）
- `content_theme` - 文章内容颜色主题（prose-gray, prose-slate, prose-zinc, prose-neutral, prose-stone）

在模板中访问配置：
```html
<article class="prose"
         th:classappend="${theme.config.post.content_size} + ' ' + ${theme.config.post.content_theme}">
  <h1 th:text="${post.spec.title}"></h1>
  <div th:utext="${post.content.content}"></div>
</article>
```

## 代码规范

#### TypeScript 规范

**配置文件：**
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM"],
    "moduleResolution": "bundler",
    "strict": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

**基本规则：**
- 使用严格模式 (`strict: true`)
- 禁止未使用的变量/参数，允许以下划线开头的变量名（如 `_arg`）
- 禁止隐式返回
- 使用 ES2022 语法
- 模块解析使用 bundler 模式
- 启用源映射和类型检查

**TypeScript 示例：**
```typescript
// 推荐 - 明确类型
export function count(x: number, y: number): number {
  return x + y
}

// 推荐 - 接口定义
interface Post {
  id: string
  title: string
  content: string
  publishTime: Date
  author: {
    displayName: string
    avatar?: string
  }
}

// 推荐 - 可选属性和默认值
function greet(name?: string): string {
  return `Hello, ${name || 'Guest'}!`
}

// 推荐 - 泛型函数
function first<T>(array: T[]): T | undefined {
  return array[0]
}

// 禁止
function badExample(_unused: number) {
  // 未使用的变量会报错
}
```

#### Alpine.js 组件开发

**基础组件：**
```typescript
// src/components/HelloWorld.ts
import type { AlpineComponent } from 'alpinejs'

export const HelloWorld: AlpineComponent = () => ({
  name: 'Guest',
  greet() {
    return `Hello, ${this.name}!`
  }
})

// 全局注册
// src/main.ts
import Alpine from 'alpinejs'

Alpine.data('helloWorld', HelloWorld)
```

使用组件：
```html
<div x-data="helloWorld()">
  <input x-model="name" placeholder="输入姓名">
  <p x-text="greet()"></p>
</div>
```

**状态管理组件：**
```typescript
// src/components/ThemeSwitch.ts
export const ThemeSwitch = () => ({
  theme: 'light',
  init() {
    this.theme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', this.theme === 'dark')
  },
  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', this.theme)
    document.documentElement.classList.toggle('dark', this.theme === 'dark')
  }
})
```

使用：
```html
<div x-data="themeSwitch()">
  <button @click="toggle()" :class="{ 'dark-mode': theme === 'dark' }">
    切换主题
  </button>
</div>
```

**异步数据组件：**
```typescript
// src/components/Search.ts
export const Search = () => ({
  query: '',
  results: [],
  loading: false,

  async search() {
    if (!this.query.trim()) {
      this.results = []
      return
    }

    this.loading = true

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(this.query)}`)
      const data = await response.json()
      this.results = data.posts
    } catch (error) {
      console.error('搜索失败:', error)
    } finally {
      this.loading = false
    }
  },

  get hasResults() {
    return this.results.length > 0
  }
})
```

使用：
```html
<div x-data="search()">
  <input x-model="query"
         @keyup.enter="search()"
         placeholder="搜索文章...">

  <button @click="search()" :disabled="loading">
    <span x-show="!loading">搜索</span>
    <span x-show="loading" class="icon-[tabler--loader] animate-spin"></span>
  </button>

  <div x-show="hasResults">
    <ul>
      <li x-repeat="result in results">
        <a x-bind:href="result.permalink" x-text="result.title"></a>
      </li>
    </ul>
  </div>
</div>
```

#### ESLint 规则

**代码风格：**
- 使用单引号（`'`）
- 禁止行尾分号（`;`）
- 禁止拖尾逗号
- 缩进使用 2 个空格
- 禁止多个空行（最多 1 个）
- 必须有文件尾换行符
- 禁止尾随空格
- 对象字面量大括号内必须有空格

**规则配置：**
- 插件：`@typescript-eslint`、`prettier`
- 扩展配置：Prettier 自动格式化

#### Prettier 配置

```javascript
{
  printWidth: 120,        // 每行最大 120 字符
  tabWidth: 2,            // 缩进 2 个空格
  useTabs: false,         // 不使用 Tab
  endOfLine: 'lf',        // 行尾换行符 LF
  singleQuote: true,      // 单引号
  semi: false,            // 无分号
  trailingComma: 'none',  // 无拖尾逗号
  bracketSpacing: true    // 对象字面量空格
}
```

## 样式规范

#### 样式架构

**样式文件结构：**
```
src/styles/
├── tailwind.css          # Tailwind CSS 基础导入
└── main.css             # 自定义样式
```

**Tailwind 配置：**
```javascript
// tailwind.config.js
import { addDynamicIconSelectors } from '@iconify/tailwind'
import typography from '@tailwindcss/typography'

export const content = ['./templates/**/*.html', './src/main.ts']
export const theme = {
  extend: {}
}
export const plugins = [
  typography,
  addDynamicIconSelectors()
]
export const safelist = [
  'prose-sm', 'prose-base', 'prose-lg', 'prose-xl', 'prose-2xl',
  'prose-gray', 'prose-slate', 'prose-zinc', 'prose-neutral', 'prose-stone'
]
```

#### Tailwind CSS 使用原则

**1. 工具类优先**
```html
<!-- 推荐 -->
<div class="mx-auto flex h-screen w-96 flex-col items-center justify-center">
  <p class="text-gray-600 hover:text-gray-900">Hello World</p>
</div>

<!-- 避免 -->
<div style="margin: 0 auto; display: flex; height: 100vh; width: 384px;">
  <p style="color: #718096;">Hello World</p>
</div>
```

**2. 响应式设计**
```html
<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  响应式宽度
</div>

<div class="text-sm md:text-base lg:text-lg">
  响应式字体大小
</div>
```

**3. 状态类**
```html
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  按钮状态
</button>
```

**4. 复杂样式**
对于复杂样式，使用 `@layer` 指令：

```css
/* src/styles/main.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors;
  }

  .card {
    @apply bg-white rounded-lg shadow-md p-4;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

#### 文章内容样式

使用 `@tailwindcss/typography` 插件：

```html
<article class="prose prose-base prose-gray max-w-none">
  <!-- 文章内容 -->
  <h1>标题</h1>
  <p>段落...</p>
  <blockquote>引用...</blockquote>
  <code>代码...</code>
</article>
```

**主题配色方案：**
- `prose-gray` - 灰色主题（默认）
- `prose-slate` - 石板色主题
- `prose-zinc` - 锌色主题
- `prose-neutral` - 中性色主题
- `prose-stone` - 石头色主题

**字体大小方案：**
- `prose-sm` - 小字体
- `prose-base` - 基础字体（默认）
- `prose-lg` - 大字体
- `prose-xl` - 超大字体
- `prose-2xl` - 极大字体

#### 图标系统

使用 Iconify + @iconify/tailwind 提供 100+ 图标集：

**1. 基础使用**
```html
<!-- Tabler 图标 -->
<span class="icon-[tabler--box]"></span>
<span class="icon-[tabler--arrow-left]"></span>
<span class="icon-[tabler--search]"></span>

<!-- 自定义大小 -->
<span class="icon-[tabler--box] text-xl"></span>
<span class="icon-[tabler--box] text-2xl"></span>
<span class="icon-[tabler--box] w-8 h-8"></span>

<!-- 自定义颜色 -->
<span class="icon-[tabler--box] text-blue-500"></span>
<span class="icon-[tabler--box] text-red-500 hover:text-red-600"></span>
```

**2. 图标动画**
```html
<!-- 简单动画 -->
<span class="icon-[tabler--arrow-left] transition-transform group-hover:-translate-x-1"></span>

<!-- 旋转动画 -->
<span class="icon-[tabler--refresh] animate-spin"></span>

<!-- 弹跳动画 -->
<span class="icon-[tabler--heart] animate-bounce"></span>

<!-- 脉冲动画 -->
<span class="icon-[tabler--loader] animate-pulse"></span>
```

**3. 图标组合**
```html
<button class="flex items-center gap-2">
  <span class="icon-[tabler--search]"></span>
  <span>搜索</span>
</button>

<a href="#" class="group flex items-center gap-2 hover:text-blue-500">
  <span>查看更多</span>
  <span class="icon-[tabler--arrow-right] transition-transform group-hover:translate-x-1"></span>
</a>
```

#### Alpine.js 交互

**1. 初始化**
```typescript
// src/main.ts
import './styles/tailwind.css'
import './styles/main.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
```

**2. 基本使用**
```html
<!-- 显示/隐藏 -->
<div x-data="{ open: false }">
  <button @click="open = !open">切换</button>
  <div x-show="open" x-transition>
    内容
  </div>
</div>

<!-- 计数器 -->
<div x-data="{ count: 0 }">
  <button @click="count++">+</button>
  <span x-text="count"></span>
  <button @click="count--">-</button>
</div>
```

**3. 数据绑定**
```html
<div x-data="{ name: '访客' }">
  <input x-model="name" placeholder="输入姓名">
  <p x-text="'你好, ' + name + '!'"></p>
</div>
```

**4. 事件监听**
```html
<div x-data="{ message: '' }">
  <input @input="message = $event.target.value" placeholder="输入消息">
  <p x-text="message"></p>
</div>

<!-- 键盘事件 -->
<input @keyup.enter="submit()">
<input @keydown.escape="cancel()">
```

**5. 生命周期**
```html
<div x-data="{ init() { console.log('初始化'); }, destroy() { console.log('销毁'); } }">
  组件
</div>
```

**6. 响应式类**
```html
<div x-data="{ active: false }"
     :class="{ 'bg-blue-500 text-white': active, 'bg-gray-200 text-gray-700': !active }"
     @click="active = !active"
     class="p-4 cursor-pointer">
  点击切换
</div>
```

#### 自定义指令

```typescript
// src/main.ts
import Alpine from 'alpinejs'

// 自定义指令：点击外部关闭
Alpine.directive('click-outside', (el, { value, modifiers }, { evaluate, cleanup }) => {
  const handler = (event: MouseEvent) => {
    if (!el.contains(event.target as Node)) {
      evaluate(value)
    }
  }

  document.addEventListener('click', handler)

  cleanup(() => {
    document.removeEventListener('click', handler)
  })
})

window.Alpine = Alpine
Alpine.start()
```

使用：
```html
<div x-data="{ open: false }">
  <button @click="open = true">打开菜单</button>
  <div x-show="open" @click.outside="open = false">
    菜单内容
  </div>
</div>
```

## 模板开发

#### Thymeleaf 模板引擎

Halo 2.0 使用 Thymeleaf 3.x 作为模板引擎，提供强大的模板渲染能力。

**命名空间声明：**
```html
<html xmlns:th="https://www.thymeleaf.org">
```

#### 1. 布局模板系统

**定义布局（modules/layout.html）：**
```html
<!doctype html>
<html lang="zh-CN" th:fragment="html(content, title)">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title th:text="${title} ?: ${site.title}"></title>
    <link rel="stylesheet" th:href="@{/assets/dist/main.css?v={version}(version=${theme.spec.version})}" />
    <script th:src="@{/assets/dist/main.iife.js?v={version}(version=${theme.spec.version})}"></script>
  </head>
  <body>
    <!-- 头部导航 -->
    <header th:replace="~{modules/header :: header}"></header>

    <!-- 内容区域 -->
    <main class="container mx-auto px-4 py-8">
      <th:block th:replace="${content}" />
    </main>

    <!-- 底部 -->
    <footer th:replace="~{modules/footer :: footer}"></footer>
  </body>
</html>
```

**使用布局：**
```html
<!doctype html>
<html xmlns:th="https://www.thymeleaf.org"
      th:replace="~{modules/layout :: html(
        content = ~{::content},
        title = ${post.spec.title} + ' - ' + ${site.title}
      )}">
  <th:block th:fragment="content">
    <article class="prose">
      <h1 th:text="${post.spec.title}"></h1>
      <div th:utext="${post.content.content}"></div>
    </article>
  </th:block>
</html>
```

#### 2. 常用语法详解

| 语法 | 用途 | 示例 |
|------|------|------|
| `th:text` | 设置文本内容（转义 HTML） | `<p th:text="${post.spec.title}">标题</p>` |
| `th:utext` | 设置文本内容（不转义 HTML） | `<div th:utext="${post.content.content}"></div>` |
| `th:href` | 设置链接地址 | `<a th:href="${post.status.permalink}">阅读</a>` |
| `th:src` | 设置图片/资源地址 | `<img th:src="${post.spec.cover}" />` |
| `th:class` | 设置 CSS 类 | `<div th:class="${theme.config.post.content_size}"></div>` |
| `th:classappend` | 添加 CSS 类 | `<div th:classappend="${isActive ? 'active' : ''}"></div>` |
| `th:each` | 循环遍历 | `<li th:each="post : ${posts.items}">...</li>` |
| `th:if` | 条件判断（存在即显示） | `<div th:if="${posts.hasNext()}">下一页</div>` |
| `th:unless` | 条件判断（不存在即显示） | `<div th:unless="${posts.hasNext()}">无更多</div>` |
| `th:switch` / `th:case` | 多条件判断 | `<div th:switch="${user.role}">...</div>` |
| `th:object` | 对象选择器 | `<div th:object="${post}">...</div>` |
| `th:with` | 变量声明 | `<div th:with="author = ${post.spec.author}">...</div>` |
| `th:fragment` | 定义片段 | `<th:block th:fragment="content">...</th:block>` |
| `th:replace` | 替换片段 | `<div th:replace="~{modules/footer :: footer}"></div>` |
| `th:insert` | 插入片段 | `<div th:insert="~{modules/sidebar :: sidebar}"></div>` |
| `th:remove` | 移除元素 | `<div th:remove="all">...</div>` |

#### 3. 变量表达式

**基本变量：**
```html
<!-- 直接访问变量 -->
<p th:text="${post.spec.title}">标题</p>

<!-- 访问嵌套属性 -->
<p th:text="${post.spec.author.displayName}">作者</p>

<!-- 访问数组/集合 -->
<span th:text="${posts.items[0].spec.title}">第一篇</span>
```

**内置对象：**
```html
<!-- 站点信息 -->
<p th:text="${site.title}">站点标题</p>
<p th:text="${site.subtitle}">站点副标题</p>

<!-- 主题信息 -->
<p th:text="${theme.spec.displayName}">主题名称</p>
<p th:text="${theme.spec.version}">主题版本</p>

<!-- 配置信息 -->
<div th:class="${theme.config.post.content_size}">
  <p th:text="${theme.config.post.content_theme}">内容主题</p>
</div>

<!-- 请求信息 -->
<p th:text="${#httpServletRequest.requestURL}">请求 URL</p>
<p th:text="${#httpServletRequest.remoteAddr}">客户端 IP</p>
```

#### 4. 工具类方法

**字符串操作：**
```html
<!-- 字符串长度 -->
<span th:text="${#strings.length(post.spec.title)}">长度</span>

<!-- 字符串截取 -->
<span th:text="${#strings.substring(post.spec.title, 0, 5)} + '...'">截取</span>

<!-- 字符串替换 -->
<span th:text="${#strings.replace(post.spec.title, ' ', '-')}">替换</span>

<!-- 空值处理 -->
<span th:text="${#strings.defaultString(post.spec.cover, '/assets/images/default.jpg')}">封面</span>

<!-- 大小写转换 -->
<span th:text="${#strings.toUpperCase(post.spec.title)}">大写</span>
```

**日期时间操作：**
```html
<!-- 格式化日期 -->
<span th:text="${#dates.format(post.spec.publishTime, 'yyyy-MM-dd HH:mm')}">发布时间</span>

<!-- 时间差 -->
<span th:text="${#temporals.duration(post.spec.publishTime, T(java.time.LocalDateTime).now()).toDays()} + '天前'">时间差</span>
```

**集合操作：**
```html
<!-- 集合大小 -->
<span th:text="${#lists.size(posts.items)}">文章数量</span>

<!-- 集合是否为空 -->
<span th:if="${#lists.isEmpty(posts.items)}">暂无文章</span>

<!-- 集合包含 -->
<span th:if="${#lists.contains(tags, '技术')}">包含技术标签</span>
```

#### 5. 条件判断

**简单条件：**
```html
<div th:if="${posts.hasNext()}">
  <a th:href="@{${posts.nextUrl}}">下一页</a>
</div>

<div th:unless="${posts.hasNext()}">
  <span>已是最后一页</span>
</div>
```

**多条件判断：**
```html
<div th:switch="${theme.config.layout}">
  <div th:case="'grid'">网格布局</div>
  <div th:case="'list'">列表布局</div>
  <div th:case="'masonry'">瀑布流布局</div>
  <div th:case="*">默认布局</div>
</div>
```

**逻辑运算：**
```html
<div th:if="${posts.hasNext() && posts.hasPrevious()}">
  显示上一页和下一页
</div>

<div th:if="${posts.hasNext() || posts.hasPrevious()}">
  至少显示一页
</div>

<div th:if="${!posts.hasNext()}">
  不显示下一页
</div>
```

#### 6. 循环遍历

**基本循环：**
```html
<ul>
  <li th:each="post : ${posts.items}">
    <a th:href="${post.status.permalink}"
       th:text="${post.spec.title}">文章标题</a>
    <span th:text="${#dates.format(post.spec.publishTime, 'yyyy-MM-dd')}">
      发布日期
    </span>
  </li>
</ul>
```

**循环状态变量：**
```html
<ul>
  <li th:each="post, status : ${posts.items}">
    <span th:text="${status.index + 1}">序号</span>
    <a th:href="${post.status.permalink}"
       th:text="${post.spec.title}">文章标题</a>
    <span th:if="${status.first}">最新</span>
    <span th:if="${status.last}">最后</span>
  </li>
</ul>
```

**状态变量属性：**
- `index` - 索引（从 0 开始）
- `count` - 计数（从 1 开始）
- `size` - 总数
- `current` - 当前对象
- `even` / `odd` - 是否偶数/奇数
- `first` / `last` - 是否第一个/最后一个

#### 7. URL 表达式

**绝对路径：**
```html
<!-- 静态资源 -->
<link rel="stylesheet" th:href="@{/assets/dist/main.css}">
<script th:src="@{/assets/dist/main.iife.js}"></script>

<!-- 动态参数 -->
<link rel="stylesheet" th:href="@{/assets/dist/main.css?v={version}(version=${theme.spec.version})}">

<!-- 外部链接 -->
<a th:href="@{https://example.com}">外部链接</a>
```

**相对路径：**
```html
<!-- 相对于当前页面 -->
<a th:href="@{../archive}">归档</a>

<!-- 相对于根路径 -->
<a th:href="@{/tags}">标签</a>
```

**查询参数：**
```html
<a th:href="@{/search(query=${keyword})}">搜索</a>
<!-- 生成：/search?query=java -->

<a th:href="@{/search(query=${keyword}, page=${page + 1})}">下一页</a>
<!-- 生成：/search?query=java&page=2 -->
```

#### 8. 表单处理

**基本表单：**
```html
<form th:action="@{/login}" method="post">
  <input type="text" th:field="*{username}" placeholder="用户名" />
  <input type="password" th:field="*{password}" placeholder="密码" />
  <button type="submit">登录</button>
</form>
```

**表单验证：**
```html
<div th:if="${#fields.hasErrors('username')}">
  <p th:each="err : ${#fields.errors('username')}" th:text="${err}">
    用户名错误
  </p>
</div>
```

#### 9. 模板片段复用

**定义可复用片段（modules/sidebar.html）：**
```html
<aside th:fragment="sidebar">
  <!-- 搜索框 -->
  <div class="mb-6">
    <h3>搜索</h3>
    <form th:action="@{/search}" method="get">
      <input type="text" name="q" placeholder="搜索..." />
    </form>
  </div>

  <!-- 最新文章 -->
  <div class="mb-6">
    <h3>最新文章</h3>
    <ul>
      <li th:each="post : ${latestPosts}">
        <a th:href="${post.status.permalink}" th:text="${post.spec.title}"></a>
      </li>
    </ul>
  </div>
</aside>
```

**使用片段：**
```html
<!-- 替换整个元素 -->
<div th:replace="~{modules/sidebar :: sidebar}"></div>

<!-- 插入到元素内部 -->
<div class="sidebar" th:insert="~{modules/sidebar :: sidebar}"></div>
```

#### 10. 常见问题

**Q: 如何在模板中添加自定义变量？**

A: 使用 `th:with` 声明变量：

```html
<div th:with="author = ${post.spec.author, wordCount = #strings.length(post.content.content)}">
  <p th:text="${author.displayName}">作者</p>
  <p th:text="${wordCount} + ' 字'">字数</p>
</div>
```

**Q: 如何处理 HTML 内容？**

A: 使用 `th:utext`（unescaped text）：

```html
<!-- 安全的 HTML 内容（已过滤） -->
<div class="content" th:utext="${post.content.content}"></div>
```

**Q: 如何使用条件类名？**

A: 使用 `th:classappend` 或内联表达式：

```html
<!-- 方式 1 -->
<div class="post" th:classappend="${post.featured ? 'featured' : ''}">
  ...
</div>

<!-- 方式 2 -->
<div th:class="${post.featured ? 'post featured' : 'post'}">
  ...
</div>
```

**Q: 如何调试 Thymeleaf 模板？**

A: 使用 `#logs` 工具类：

```html
<!-- 输出调试信息到控制台 -->
<div th:text="${#logs.debug('Post: ' + post.spec.title)}"></div>
```

#### 11. Halo 2.0 特定对象

**文章对象（Post）：**
```html
<!-- 基本信息 -->
<h1 th:text="${post.spec.title}">标题</h1>
<p th:text="${post.spec.description}">描述</p>
<p th:text="${#dates.format(post.spec.publishTime, 'yyyy-MM-dd')}">
  发布时间
</p>

<!-- 内容 -->
<div class="content" th:utext="${post.content.content}"></div>

<!-- 元数据 -->
<span th:text="${post.metadata.categories}">分类</span>
<span th:text="${post.metadata.tags}">标签</span>
<span th:text="${post.metadata.wordCount}">字数</span>
```

**页面对象（Page）：**
```html
<!-- 页面内容 -->
<h1 th:text="${page.spec.title}">页面标题</h1>
<div th:utext="${page.content.content}">页面内容</div>
```

**菜单对象（Menu）：**
```html
<!-- 主菜单 -->
<ul th:each="menuItem : ${menus.main}">
  <li>
    <a th:href="${menuItem.url}"
       th:text="${menuItem.name}">
      菜单项
    </a>
  </li>
</ul>
```

**配置对象（Config）：**
```html
<!-- 主题配置 -->
<div th:class="${theme.config.layout}">
  <p th:text="${theme.config.post.content_size}">内容大小</p>
  <p th:text="${theme.config.post.content_theme}">内容主题</p>
</div>
```

**分页对象（Pageable）：**
```html
<!-- 分页信息 -->
<div class="pagination">
  <span th:text="'第 ' + ${posts.page} + ' 页'"></span>
  <span th:text="'共 ' + ${posts.totalPages} + ' 页'"></span>
  <span th:text="'总计 ' + ${posts.total} + ' 条'"></span>

  <!-- 上一页 -->
  <a th:if="${posts.hasPrevious()}"
     th:href="@{${posts.prevUrl}}">上一页</a>

  <!-- 下一页 -->
  <a th:if="${posts.hasNext()}"
     th:href="@{${posts.nextUrl}}">下一页</a>
</div>
```
