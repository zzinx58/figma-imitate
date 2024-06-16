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

---

### 被提及的改进项：

- 文件的组织目录
- 命名规范
- tailwind 书写规范
- 多人协同格式化工具 pre commit 的配置
- 注释

### 改进思路

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

### 改进过程记录

> 2024/6/14, 此部分时间跨度两天+？

项目现状（亮点/特色点/考察项）：

- (- -) !!!怎么没想到通过更改设计系统断点实现？？怎么想些偏的呢？！！！2024/6/14 16:32
- 使用 App 路由规范组织项目文件结构，掌握并实践相关路由概念（Nextjs 路由组、平级路由,etc...）。【考察点】
- 视为 React 组件的节点通过 解构语法、spread 运算符 和 TS 类型映射实现上层 props 传递至子组件顶层【考察点】
- 提供项目 Page 页面路由导航。【亮点？】
- `Next/server` 提供 `useAgent` 函数，返回的对象中包含 `device` 对象（An object containing information about the device used in the request.），其中对象的 `type` 字段反映请求的设备类型：mobile, tablet, console, smarttv, wearable 等，可进行尝试，符合最初思路预想。【亮点？】https://nextjs.org/docs/app/api-reference/functions/userAgent
- 符合规范的项目文件组织结构。【考察点】
- Nextjs 项目路由实践。（已实践嵌套路由、平行路由）【考察点】
- `[key in "version1" | "version2" | "children"]: React.ReactNode;` 类型映射简化 props 同类型具名组件的类型声明。【。。亮点？】
- 取消原本移动端 grid 栅格定位方式，因为一定程度属于 hack 方式，直接采用瀑布流定位方式，节省时间。【考察点】
- 取消 Tailwind prettierrc 配置，因为不符合需要
  ```json
  {
    "plugins": ["prettier-plugin-tailwindcss"],
    "tailwindConfig": "./tailwind.config.js",
    "tailwindAttributes": ["class"]
  }
  ```
- 引入 `husky lint-staged(prettier, "prettier-plugin-tailwindcss" 插件) commitlint commitizen` 项目工程化链路，为项目提供：【考察点】

  - 项目 commit 规范链路（commit-format（Angular），auto-checkout）。
  - 提交前代码 format/lint 规范化。
  - git hooks 处理流水线支持。

- 自动引入相关。

  - 引入 `unplugin-auto-imports/webpack`, 为项目提供函数自动导入功能，提升开发体验。【亮点】
  - 实现自动导入页面的 `useMetadata` util hook, 简化页面 Metadata 功能的使用。
  - 配置自动引入项目路径下的 Type 类型，实现全局使用。

- 样式管理相关

  - 提供 TailwindCSS/UnoCSS `Attributify` 模式的 TSX 支持，能够将原本集中于 className Prop 中的样式字符串，在元素上通过可带区分前缀的 props 拆分，实现重新组织元素的样式字符串，分类展示，提高代码可读性。【亮点】
  - 提供 CSSModule 的 TS 支持。功能通过 `"typescript-plugin-css-modules"` TS 插件实现。【亮点】
  - 根据 UnoCSS Attributify 模式插件提供的类型，创建类型 `UnoAttriesObj - @/constants/unocss.ts`，约束 传递至 JSX Element 上的样式 Attribute 属性。【亮点】
  - 通过 \`className={`${moduleCSS.main}`}\` 模版字符串语法来实现 moduleCSS 和 TailwindCSS 的公用。`{...{prop1: 123}}` 结构语法实现元素 `props` 的添加，实现样式和业务逻辑相关 props 的分割。【特色点？】
  - 提供公共类样式支持。`@scope(){//common block}` & `@scope(){//BZ styles block}`.
    - 注意：样式泄漏问题，所以该组织方式需要项目整体按同一规范，这种方法只是简化了代码管理难度（起名）。
  - 由于 UnoCSS 的 `transformerVariantGroup` 和 `transformerAttributify` 在本 Next.js 项目中的问题，最终采用下列方式。Vannila CSS + @scope, CSS 样式拆分为特性页面下的 `common.css, mobile.css, desktop.css, module.module.css`。进行项目样式代码的管理。
    - 只是这样还是没有应用上 Tailwind 响应式断点。

- 代码/样式隔离/复用/组织。【特色点】

  - 样式常量对象结合模版字符串使用常规样式复用。
  - 使用 ModuleCSS 书写原子化 CSS 不方便书写的样式，并进行样式隔离。
  - 使用 ModuleCSS + & :global() 选择器，实现 ModuleCSS 下的 原生CSS 使用体验，但是样式本身书写略为麻烦，不是首选。
  - 使用 CSS 原生语法 `@scope` 作用域选择器，将命名成本提升到组件顶层，实现一定程度的样式隔离效果。结合项目文件组织结构对应 CSS 和 TSX 组件文件。
  - 配置 UnoCSS 响应式断点，因 Tailwind 默认断点 sm 不符合需求。
  - `{styles={}}: {styles?: {[key:string]: string}}` 实现组件样式 styles 可选提供，且不影响未提供时，模版字符串中使用报错可能为 `undefined` 的情况。【亮点】
  - `calc(min(100vw/1440,100vh/868))` 防御性响应式，取用对样式产生影响 ratio 最小的值做为因子。
  - 使用 css 自定义属性实现样式代码的复用。

---

过程中问题：

- Next.js 相关问题

  - `useState` 无法在 SSR 模式下使用
    - 半解决，需要调研 workaround。需要使用 'use client'，启用客户端组件来使用。
  - Nextjs 使用 `'use client'` 对 SEO 的影响？
  - App Router 文件结构组织形式对 Storybook 支持性需调研。
  - `next/image` 组件的自动导入有些问题，似乎没有被正确识别，被识别为普通 Image 组件？，`auto-import.d.ts` 中是可以正确识别的，但是 用在组件报错，`Link` 组件都是正常的自动导入。？
    - 半解决/Workaround。通过起另外别名解决问题。
  - Link 组件不能在 次级Layout 页面中使用，只用于 CSR 或 Page？Page 页面性质？
    - 已解决。Nextjs 的 Link、Script、Image 组件均位于 Next 包根路径下，没有通过统一的 index.js 暴露，自动引入需要以 `next/link` 形式的 default 自动导入。
  - 如何 Layout 页面的 平级路由 Props 获取，获取当前路径下所有平级路由页面？
  - 貌似遇上了多次渲染问题，多次打印 log，4次？
  - 需要 Nextjs App Router 项目案例, 如何组织项目文件结构？
    - 已解决，可以参考更多项目案例实践。
    - 策略一：将所有应用程序代码存储在项目根目录中的共享文件夹中，并保留应用程序目录纯粹用于路由目的。
    - 策略二：将所有应用程序代码存储在应用程序目录根的共享文件夹中。
    - 策略三：将全局共享的应用程序代码存储在根应用程序目录中，并将更具体的应用程序代码拆分为使用它们的路由段。
    - 项目选择：策略三更适合 案例展示网站的需求，因为各案例 components 风格不一。
    - 衍生问题：文件夹直接命名 components，但无 page.tsx 文件是否符合规范？还是 \_components?
      - 选择后者
    - 衍生问题：页面/样式(moduleCSS) 素材存放路径？
    - 参考链接：
      - https://nextjs.org/docs/app/building-your-application/routing/colocation
      - `src` Directory, about `app & pages` place in root. Notice `Good to know` Part: https://nextjs.org/docs/app/building-your-application/configuring/src-diPectory
      - Static Assets: https://nextjs.org/docs/app/building-your-application/optimizing/static-assets#robots-favicons-and-others
      - Private Folder：https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-features
  - Layout 页面的 平级路由 props，包含 Node `children` 和 `version1`，代码中同时展示时，只展示 children（default slot）页面？
    - 已解决。`children` Node 对应 Layout 下的 Page, 当 Page 不存在时优先报错，体现为 `children` Node 优先级高。
  - 平行路由页面硬刷新导致的页面丢失问题。
    - 已解决。要区分问题的具体错误原因/代码。
    - 情况一：`Link` 组件产生的页面跳转属于软导航，导航时，next 会进行部分渲染，更改插槽内容。当它们与当前 URL 不匹配时，维持之前的状态。硬导航时，Next 无法确定与当前 URL 不符的插槽的状态，便会渲染 404 错误。
    - 情况二：正常路由下：`root/page3/@versions` 每级的正常*父*路由均需要 `layout.tsx, page.tsx` 文件做页面载体。代码示例详情见 `@/archives/@versions`。
    - 解决方法：Workaround。设置 平行路由 default 页面，返回空元素标签，可以解决 Rootpage redirect 导航至 Page3 页面 404 问题。同理，作为仅承载页面所需的 Page 页面，也可以返回空元素标签，页面做 redirect 模拟？
  - 需求类似子导航，平级路由似乎不适合实现该需求，在 SSR 模式下，无法根据用户选择变更页面展示。平级路由状态管理？
    - 已解决/Workaround。App Router 在设置命名，组织/划分页面职能的架构期需要注意合理划分/组织，例如 Page3 案例的展示，最初使用平级路由进行页面划分，以 `Version` 为划分依据（`@version1 ｜ @version2`），此路不通，实现需求需要外力协助，体现对平行路由的应用场景理解有分岔。
    - 平行路由的使用场景：同时或条件性渲染一个或多个 Page 内容，类似 Vue 插槽。
    - 分组路由的使用场景：根据逻辑性质分组，例如：意图、站点、团队 为依据进行划分。
    - 解决思路：version1 和 version2 是同一类的不同展现，不应该分别划分平行路由，应处于同一平行路由 `versions` 下。再根据该平行路由下导航实现 version 展现版本的切换。
    - 解决方案分析：需求服务主体是 Hero 页面，其实不应该/没必要使用 平行路由，因为硬导航问题，需要 `default `页面适配，技术价值其实不大，适合在一个页面中展示多个 Block 分属的内容，Page3 案例暂时使用 平行路由 实现。
    - 注意：`default` 页面是平行路由的*回退页面* 。

- 样式处理相关问题

  - 【总结】Nuxt3 的样式管理比 Next 好太多了...React 项目样式管理好生麻烦的感觉。
  - 或许过于追求代码可复用性了，时间投入与产出不成正比，实际场景中，也不会需要复用同一组件的 DOM 结构，比如 Page Header 组件，并不算是一个通用组件，在其上做优化是没太多意义的。注意后续。
    - 一些没必要的复用不用去做，比如 css 自定义属性，在 模版中 var 使用。如果直接在 css 中可以考虑。
  - 字号 16px，它是怎么对应一个字的包围盒方框是多大的？
    - 解释：字体的字号通常表示的是一个字符的最高点到最低点之间的距离，包括上升部 ascender 和 下降部 descender。设计中，16px 的字号通常并不直接告诉我们一个字的具体包围盒大小。
    - 一些关键概念：
      - 字体高度：字号所代表的改读
      - x 高度：小写字母 x 的高度，大约 字号像素值的一半 50%
      - 上升部：字体中从基线到字符最高点的部分
      - 下降部：字体中从基线到字符最低点的部分
    - 举例：Arial 上升部约占整个字号 70%，x 高度约占整个字号 50%，下降部约占字号 30%。
  - 响应式变化中字号放大缩小比例采用设计稿 宽度比例计算还是高度比例计算？

    - 一些常见的考虑因素：
      - 高度优先设计：高度变化较大的环境中
      - 宽度优先设计：许多网页和应用设计中，宽度是优先考虑因素，通常用户屏幕宽度变化较大，高度变化相对较小。
    - Ant Design 受到 5 音阶以及自然律的启发定了两不同尺寸的字体以及与之对应的行高。
      - https://juejin.cn/post/7359854125912227894?searchId=20240616130950B8F14DC88E75D496A274#heading-1
      - 字阶和行高决定着一套字体系统的动态和秩序之美。字阶是指有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。
      - 在一个设计系统中（展示型页面除外），字阶的选择尽量控制在 3-5 种之间，保持克制原则。
    - uni-app 工程中，rpx（responsive pixel）是一个响应式像素单位，可以根据屏幕宽度自适应调整大小。
      - uni-app 默认以屏幕宽度 750px
    - https://juejin.cn/post/7128091262791450660?searchId=20240616130950B8F14DC88E75D496A274
      - 如今，极致用户体验，需要设计、前端共同努力。需要设计妥协，同时设置一些可变的距离、一些固定的距离，不再追求等比还原，保证设计上能适配各种宽度。需要前端努力调试，使用flex技术或百分比宽度，使得网页在各种宽度下的样式都符合预期。
      - `<meta name="viewport" content="width=device-width,initial-scale=1">`
        - 添加这段代码前，px是渲染像素Rendered Pixels，文字会显得特别小（随着屏幕越做越清晰，同一片设备面积内的渲染像素越来越多，文字就会越来越小）。哪怕是16px的字号，也会非常的小。
        - 添加这段代码后，那么px就对应Points，它基本跟真实机型尺寸是成比例的，不会受ppi(pixel per inch)每英寸像素的影响。此时在各种设备下，人肉眼看16px的字都是正常字号。
        - 这行代码许多框架都会默认带上。

  - 活用 `justify-self-end` 等 grid 布局下元素自定位可以简化 DOM 结构，十分有用。
  - 注意：gird 布局时，定位注意按`包围盒`尺寸定义外部 padding 等属性位置。（30，40）。
  - 注意：`calc` 书写，`(100vh/1440*20)` 不要将 20 移置括号外相乘，样式会无效。
  - 注意：SVG 元素或自适应父容器的元素，`h-full/auto w-auto/full` 的应用，一般使用前者，例如 Header，w-full 则是根据父容器大小了。
  - 注意：`display:block` 阻止 `gap`等 属性生效和 grid 布局下属性生效！！
  - 使用 Tailwind 样式在组件拆分时的侵入性看法？
  - css 中 `@scope` 内的 css 变量，需要在同一个 scope 中才能被找到，区分在不同 scope 的 css 变量即使在同一个类下仍然无法被找到。
    - 需要参考 css 变量的使用范围。
    - @scope 顶层声明的变量无法被找到。
  - vw/vh 实现设计稿还原。不知道采用 max ratio 还是 min ratio，需要阅读相关文章，还需要注意使用，一味 min ratio 似乎是不对的，需要动态选择。
    - 可以 sm lg 不同断点使用不同 ratio 做 workaround。
    - 算法错了啊大哥！需要区分 字号、和定位使用的算法是不同的。？
      - 定位应该是 `120/100vw*1440`, 字号 `100vw/1440*10`?
        - 还写错了。使用 calc() 函数，你需要确保单位运算的结果是有效的 CSS 单位。！所以是 `120/1440*100vw 30/868*100vh`.
  - 好像所谓的 @scope 实现的样式隔离并没有什么用啊...和没用一样。
    - 不，这样 scope 中的样式不会外泄作用到外界同类名元素上，还是有用的，要写傻了都。
    - 并且 @scope 可以扩展其适用范围。
    - 注意：@scope 同类下，后者会替换前者？
  - 移动端采用单独代码模版实现？初版采用移动端/桌面端双端形式开发，方便排版定位，一定程度降低实现实现难度。但造成的问题是两端的 DOM 结构存在差异，导致双端整合的设计实现过程中遇到困难。
    - 已解决，采用双端代码实现。grid 定位排版一定程度上也是一种 hack 方式，因为手动筛选合适的 grid 栅格，所以其实和瀑布流定位没有太多本质区别，后者还更轻松些，不影响 DOM 结构。
  - SSR 下，对于 z-index 不同的元素，下层元素穿透上层元素覆盖的实现存在一些问题。
    - 解决方法：Page3 Button 元素的定位不考虑 flex justify-between 实现了，这样会需要额外嵌套一层 Div。
  - css 类型选择器是大小写敏感的吗？是否会转换小驼峰书写为连字符书写？
  - ModuleCSS 相关问题
    - module SCSS 是否能解决 module CSS 的样式无法嵌套书写的问题？
    - ModuleCSS 原理遗忘，与 CSS 原子引擎工作原理有差异，引擎默认无法直接转写文件，需要 AST 处理 ModuleCSS 中样式。
      - 解决方法：UnoCSS/TailwindCSS 处理绝大多数样式，复杂样式通过 ModuleCSS 实现样式隔离。
      - 衍生问题：ModuleCSS 作为对象传入的表现？
      - 衍生问题：ModuleCSS 的 local global 效果？
        - 半解决，目前状态： => `.local-class :global(.test-stroke) {...}` !!! 确实实现了局部的常规 css 效果？！。但是使用上略为麻烦。可以通过 `&` 选择符一定程度简化书写。
      - 衍生问题：ReactNode 对象生成，顶层 className 会被父组件传入的 className 替换吗？
  - UnoCSS 相关问题：
    - UnoCSS VariantGroup 模式不起作用, 在 className 中，在 css @apply 中同样，只有 lg 等断点响应 group 有效。`text:() p:() hover:()` 等均无效。
    - UnoCSS 断点系统，sm 配置会被 lg 继承，除非对应样式类被重写，这可能带来问题？
      - 所以双端适配代码不适合在 Attributify mode 中书写除布局控制逻辑外的样式代码。将需要的部分转移至 css + @scope 中处理和应用。
    - Unocss `AttributifyAttributes` on JSX Element 问题。https://github.com/unocss/unocss/issues/3897。
      - 未解决，提交 issue 至官方库，此处有三个以上问题。
      - 关于 VariantGroup 在 className 中不生效
      - 关于 AttributifyAttribute 元素外传入没有生成预期样式
      - 关于组合 Type 使用报错 `lg:grid=""`。
      - 关于 CompileClass Not Work。
      - 关于 css Magic `@unocss-include` Not Work。
      - 相关链接：https://github.com/unocss/unocss/issues/3192 【VariantGroup、CompileClass】
    - 最好是项目能够支持 css 文件的 UnoCSS 变量的编译，如何实现？
      - 已解决。`@apply` 指令在 vanilla CSS 文件中正常使用。
        - 衍生问题：`@apply` 指令只应用了一行！--uno 又不能用。哎哟头疼好烦。Nuxt3 支持 --uno 写多条样式不会冲突。
          - 订正，未解决。
            - `@apply` 在 `@apply sm:(bg-red);@apply lg:(bg-yellow)`;情况下，后者样式没有被应用，且比更后者 `@apply bg-blue` 有更高的优先级。
            - `@apply sm:(bg-red) lg-(bg-green)` 中 `:, -` 分割符 separater 均可使用。
            -
          - 解决思路：只能考虑一个 @apply 的多行书写了。
      - 衍生问题：官方文档的 `--at-apply --uno --uno-apply` Directives 都无法在 vanilla CSS 中生效？
      - 衍生问题：官方文档对于 `:` 的使用的描述有差异，`transformers` 之间会有冲突？不能支持 TSX className 中 variantGroup 特性的 `transformerVariantGroup` 反而能支持此处样式的 group 样式处理？
    - 项目期间遭遇未知样式丢失问题，跟 UnoCSS 有关，而且经过排除不是配置方面问题。
      - 活见鬼了，重启电脑才解决问题，重启编辑器和浏览器都没有用。
    - UnoCSS 与 postcss 合作流程，解决什么问题？`@unocss/postcss`, `postcss.config.js`, `uno.config.ts`.`content.pipeline|filesystem`。
  - TailwindCSS 响应设计系统最小断点 `sm` 对应最小屏宽为 640px，大于绝大多数常规移动手机设备，仅匹配 iPad mini 大小屏幕，要实现一码多用还是需要 CSS 原生媒体查询，无法直接应用 TailwindCSS。
    - 【吐槽】!!!怎么没想到通过更改设计系统断点实现？？怎么想些偏的呢？！！！
    - 衍生问题：得出结论，移动端代码需要移动到 css 文件中进行使用，并应用命名规范。新问题是，需要验证后入 className 对前部样式的覆盖问题。
      - 【该结论错误，仅记录过程】。
        - 验证 + 已解决？。因为前部调研使用的 `css + @scope` 样式隔离方式，该方式添加了选择器，导致比一般用于 `className` 的样式优先级要高，所以无法直接 `css + @scope + @media` 方式复用移动端样式。
        - 衍生问题：但是！可以通过 styles 内联样式 + Module CSS 实现？内联样式的使用方式契合 ModuleCSS 的使用！？
          - 已解决。JSX 元素的内联样式有 type 约束，只能 CSS 相关，无法传入 ModuleCSS。
        - 半解决，需要覆盖率。关于样式引入覆盖问题。不需要/也无法 style 内联样式。
          - `className` 的使用上：className + !important > css 组合选择 > moduleCSS + :global > css @scope 选择器(需要指定一个父域) ｜ moduleCSS =(根据引入上下文顺序！！className 中顺序影响呢？不影响，因为 css 和 moduleCSS 引入都是同一类名？，只受样式文件引入顺序影响)=？ css 类选择器 > UnoCSS Attributify > className
          - className 中 UnoCSS 样式在前的优先级高于 > 在后面的。
          - ??css `@apply` 中，排在后的样式优先级更高。
        - 注意！@media @scope 并没有对优先级造成影响，还要考虑样式上下文前后顺序造成的优先级影响判断！

可改进点：

- 项目页面导航栏支持展开/缩小。
- 项目页面导航蓝支持拖拽移动。
