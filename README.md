# Fiama Comunity 页面模仿

> Root 根目录下 Page.tsx 为当前项目主要展示范例。其余 Page 为范例归档。

## Page3

Page3 范例的 figma 设计图地址：https://www.figma.com/community/file/1328404133964193870/uiux-designer-hero-section-desktop-and-mobile

Page3 设计图情况阐述：

- 设计图包含 iPhone8 与 Desktop 尺寸设计图。
- 设计图包含的两种设备的设计图有一定程度考虑栅格定位设计，是个不错的点。
- 设计图不包含其余 Tailwind CSS 响应式设计系统中的尺寸断点设计，该部分由个人处理。

Page3 当前实现情况（未实现点/难点/考察点/亮点/特色点）：

- 项目小于 lg 断点的页面宽度统一返回 iPhone8 设计图尺寸的比例放大页面实现，大于 lg 断点的统一返回 Desktop 设计图的响应式实现。【未实现点，在改进点中描述】
- 项目使用了 UnoCSS（轻量级 CSS in JS 引擎）进行设计实现辅助，UnoCSS 兼容 Tailwind CSS 设计系统语法。【特色点】
- 使用 Grid 布局系统进行页面元素定位辅助。【考察点】
- 通过 vw、calc() 进行设计图尺寸比例转换。【考察点】
- 对常规可交互元素添加基本动态效果，Nav Item hover 变色、Button 元素 hover scale 放大。【亮点】
- 对 lg 断点（对应 iPad Pro 设备）到 2xl 断点之间的页面表现进行设计与实现。【亮点】
  - 结合 Next.js Image 组件的问题（如问题记录部分描述），Hero Image 在 Grid 布局中根据设计系统断点动态调整图片起始位（行、列），以解决图片拉伸、压缩问题。【特色点】
  - 同上理，根据断点动态设置 Header Nav 部分在移动设备上的展示起始位，否则会被 Header 中 Button 元素遮挡。【特色点】
  - 通过样式层叠上下文规则，让 Hero Image 在与页面 Main Content 文字描述重合时，展示在底层，避免遮挡文字展示。【亮点】
  - 页面文字主题色与黑色 与 Hero Image 有重色，在与前者重合时，文字会融入图片背景色，无法被识别。通过设置 text-shadow 实现文字描边，解决该问题。【亮点】
- Header Button 元素，文字水平线与 Header Nav Item 各项齐平，但 Button 元素填充导致的元素整体超出水平线与上下基准线问题，通过 relative 父容器与 absolute 绝对定位实现的元素水平居中（transfrom/translate）解决问题。【特色点】
- Header Nav 元素定位通过 Grid 栅格定位实现。【特色点/考察点】
- 【移动端】通过调试 Figma iPhone8 设计图，找出了页面元素第一部分有较好的适配栅格系统，可以分为 11 行，另外第一部分整体基本符合页面 1/3 页面高度。移动端页面实现主要应用 Grid 行栅格定位。【特色点/亮点】

Page3 范例实现可改进的点：

- 根据 官网 Image 组件介绍，重新尝试该组件页面表现。
- Hero Image 从 Next.js Image 组件提供 改为 通过 CSS 提供为背景图形式，以解决图片在 Grid 布局中，页面尺寸缩小时带来的图片挤压、拉伸问题。
- 通过 PostCSS 插件自动化处理 px 转 vw 等设计图尺寸转化问题。
- 通过外部链路实现根据请求时获取客户端设备尺寸，返回响应式支持的 Desktop 设计图页面代码实现或比例伸缩的 iPhone8 设计图页面代码实现。
- 结合 GSAP 实现数字过渡动画。
- 实现 Nav Menu 的展开/关闭功能，并支持过渡动画。
- 实现页面元素内容变化的过渡动画封装。
- Button 元素的颜色变化效果增强。
- 设计断点页面元素突变的过渡动画实现。
- 页面元素明暗切换的样式变更功能实现。

Page3 范例实现过程（问题）记录：

- 间隔一个半月没有实践页面实现，页面设计实现思路一定程度手生。
- Next.js 提供的 Image 组件带来一定使用困扰，不便于大小自适应实现，寻找实践 workaround 花费一定时间。
- 第一次模拟使用了栅格系统支持不友好的设计图，给实现带来一定困扰，个人设计实现负担较大，弃用，设计图良好的栅格定位较为重要。
- 部分位置当时实现的样式 workaround 遗留导致的非预期样式错位问题关注。

bonus:

- https://unocss.dev/presets/attributify#typescript-support-jsx-tsx
- https://www.tailwindcss.cn/docs/pointer-events#controlling-pointer-event-behavior
- https://www.figma.com/design/NMLMGfy3KfGuDfqJqPJUaK/UIUX-Designer-hero-section---desktop-and-Mobile-(Community)?node-id=1-58&t=fP0wKsEl9FX0SRrO-0

# 被提及的改进项：

- 文件的组织目录
- 命名规范
- tailwind 书写规范
- 多人协同格式化工具 pre commit 的配置
- 注释

## 改进思路

- 文件组织目录方面
  - 参考补全完整 next.js 项目目录结构
  - 按完整目录结构对源代码中内容做拆分
- 命名规范方面
  - 针对 React 项目，在页面 moduleCSS 中采用类 BEM 规范命名元素样式
  - 文件命名规范化？
- TailwindCSS 书写规范？
  - .prettierrc 文件应用 prettier-plugin-tailwindcss 插件，配置 tailwindcss prettier formatter?
- pre commit 配置
  - pre commit 是 Git hooks 最开头也是使用最多的钩子，其运行时机是在键入提交信息之前运行。该钩子可以用于检查代码风格是否一致与代码提交前测试。
  - lint-stage?
  - commitlint 约束提交信息，规范提交格式
    - 使用 commit-msg Git 钩子
- 注释方面
  - 对各个单独部分组件是什么做注释
  - 去掉注释吗？
