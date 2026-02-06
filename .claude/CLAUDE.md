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
  name: theme-modern-starter-setting
spec:
  forms:
    - group: post
      label: 文章
      formSchema:
        - $formkit: select
          name: content_size
          label: 字体大小
          value: prose-base
          options:
            - value: prose-base
              label: prose-base
            - value: prose-sm
              label: prose-sm
            - value: prose-lg
              label: prose-lg
            - value: prose-xl
              label: prose-xl
            - value: prose-2xl
              label: prose-2xl
        - $formkit: select
          name: content_theme
          label: 颜色主题
          value: prose-gray
          options:
            - value: prose-gray
              label: prose-gray
            - value: prose-slate
              label: prose-slate
            - value: prose-zinc
              label: prose-zinc
            - value: prose-neutral
              label: prose-neutral
            - value: prose-stone
              label: prose-stone
```

#### 配置项说明

**文章设置（Post）：**

| 配置项 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `content_size` | 下拉选择 | 文章内容字体大小 | `prose-base` |
| `content_theme` | 下拉选择 | 文章内容颜色主题 | `prose-gray` |

**字体大小选项：**
- `prose-sm` - 小字体
- `prose-base` - 基础字体
- `prose-lg` - 大字体
- `prose-xl` - 超大字体
- `prose-2xl` - 极大字体

**颜色主题选项：**
- `prose-gray` - 灰色主题
- `prose-slate` - 石板色主题
- `prose-zinc` - 锌色主题
- `prose-neutral` - 中性色主题
- `prose-stone` - 石头色主题

#### 配置使用示例

在模板中访问配置：

```html
<!-- 获取配置值 -->
<article class="prose"
         th:classappend="${theme.config.post.content_size} + ' ' + ${theme.config.post.content_theme}">
  <h1 th:text="${post.spec.title}"></h1>
  <div th:utext="${post.content.content}"></div>
</article>

<!-- 条件判断 -->
<div th:if="${theme.config.post.content_size == 'prose-lg'}">
  正在使用大字体
</div>

<!-- 配置驱动的样式 -->
<style th:inline="css">
  .custom-style {
    font-size: /*[[${theme.config.post.content_size == 'prose-lg' ? '1.125rem' : '1rem'}]]*/ 1rem;
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
