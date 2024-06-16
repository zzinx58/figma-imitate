import type { NavItemType, NavItemArrType } from "@/constants";

/* Alt + Shift + A */
/* 组件目标表现效果：移动端宽度下 隐藏 NavBar，使用 MenuIcon 替换 */
/* 组件需求分析：移动端表现的： Nav 栏 被 Menu Icon 替换的效果，很常规的一个实现是通过 js-window 获取页宽，或 状态管理库存储当前用户页面设备，但是需要考虑 SSR 上下文问题。 纯 CSS 实现一定程度上带来项目复杂度。*/

/* 常识：1. TailwindCSS lg 断点对应 1024px，同时是 iPad Pro （竖排情况）下宽度（语言常识：宽度通常指长方形中短的一边？✅）。 */
export const Header = ({
  navItemList,
  customStyles = {},
  ...rest
}: {
  navItemList: NavItemArrType;
  // 这里可以考虑更职能的类型声明，暂不花时间在此。
  customStyles?: {
    logo?: UnoAttriesObj;
    nav?: UnoAttriesObj;
    menuIcon?: UnoAttriesObj;
    extraButton?: UnoAttriesObj;
    // 对于不是全部暴露的样式对象，这里做类型映射没有意义。
    // [key: string]: string | Record<string, string> | undefined;
  };
  [key: string]: any;
}) => {
  // 本代码块采用 "纯CSS" 方式实现。
  return (
    <div {...rest}>
      {/* Header Logo */}
      <div {...customStyles.logo}>
        <NextImage
          src="/page3/logo.svg"
          alt="Page3 Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto"
        />
      </div>
      {/* Header NavBar */}
      <nav {...customStyles.nav}>
        {navItemList.map((item) => (
          <Link href={item.link || ""}>{item.text}</Link>
        ))}
      </nav>
      <button type="button" {...customStyles.extraButton}>
        Button
      </button>
      {/* Mobile: Header MenuIcon */}
      <div {...customStyles.menuIcon}>
        <NextImage
          src="/page3/menu-icon.svg"
          alt="Page3 Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};
