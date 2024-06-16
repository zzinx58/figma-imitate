// import Image from "next/image";
import { Page3NavItemsTextArr } from "@/constants";
import { Header } from "./_components/Header";
// 使用 CSS 原生 @scope 作用域选择器实现局部样式使用。因为 ModuleCSS 局部 CSS 复用方式较为复杂，故不再使用 ${ComplexStyles["local-class"]} 。只需专门为应用内单个域起名即可，成本较低。
// import ComplexStyles from "./version2.module.css";
// (- -) !!!怎么没想到通过更改设计系统断点实现？？怎么想些偏的呢？！！！2024/6/14 16:32
import "./mobile.css";
import "./desktop.css";
import "./common.css";
// import moduleStyles from "./version2.module.css";

export default () => {
  //   return <div>Versions - Version2 Page</div>;
  const UtilStyles = {};
  // 这里 UnoCSS Magic 和 AttributifyAttributes `un-sm/md/lg/xl/2xl/...` 不起作用。
  // @unocss-include
  const HeaderStyles: ComponentProps<typeof Header>["customStyles"] = {
    logo: {
      className: "logo",
    },
    nav: {
      className: "nav",
    },
    menuIcon: {
      className: "menuIcon",
    },
    extraButton: {
      className: "extraButton",
    },
  };
  // 这里尝试优化代码，UnoCSS 无法解析运行时生成的字符串，只能写死。或需要设置动态规则，4px 为一单位，预生成一系列 Rules 这样。
  // const mobileRatio = "p-[calc(100vw/375*20)]";
  // 字号处理参考
  // font-size: clamp(12px, 1.67vw, 36px);

  const discountPercent = 15;
  const growthPercent = 50;

  return (
    // Container
    <div
      className={`page3-version2  h-screen w-screen`}
      // 错误。布局不是使用该算法。应该是 120/100vw*1440? 而不是 100vw/1440*120? 后者是 text 大小 ratio使用？。
      // un-sm="p-[calc(100vw/375*20)]"
      // un-lg={`px-[calc(100vw/1440*120)] py-[calc(100vh/868*30)]`}
      un-sm="p-[calc(20/724*100vh)]"
      un-lg={`px-[calc(120/1440*100vw)] py-[calc(30/868*100vh)]`}
    >
      {/* 基本定位框架层 */}
      <div
        className="grid w-full h-full "
        un-sm="grid"
        un-lg="grid-cols-12 grid-rows-12 gap-[calc(25/1440*100vw)]"
      >
        {/* 移动端辅助定位框架层 */}
        <Header
          navItemList={Page3NavItemsTextArr}
          customStyles={HeaderStyles}
          className="header col-span-full"
          un-sm="flex items-center justify-between"
          un-lg="grid grid-cols-subgrid place-content-start"
        />
        <div
          className="hero-image"
          un-m="-y-15 -x-5"
          un-sm="row-start-3 mx-auto"
          un-lg="col-start-5 col-end-13 row-start-6 row-end-12"
          un-xl="row-start-4"
          un-2xl="col-start-7 row-start-3"
        >
          <NextImage
            src="https://selfuse-1308651335.cos.ap-nanjing.myqcloud.com/3-hero-Image.png"
            alt="Page3 Hero Image"
            width={0}
            height={0}
            sizes="max"
            className="h-full w-auto"
          />
        </div>
        <main
          className="slogan text-stroke-white"
          un-sm="flex flex-col text-center"
          un-lg="col-start-1 col-span-6 row-start-4 row-end-11 grid grid-rows-subgrid"
        >
          <p className="slogan-1">Yes, I want to do</p>
          <h2 className="slogan-2">UIUX DESIGNER</h2>
          <p className="slogan-3">
            Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus ipsum.
            Ullam congue in viverra congue ornare.Morbi non tincidunt velit nec.
          </p>
          <div className="slogan-button">
            <button
              type="button"
              className="bg-#5463FF text-white rounded-10px px-2.2vw py-1.4vh hover:scale-120 text-[16/868*100vh]"
            >
              Contact Us Now
            </button>
          </div>
          <div className="slogan-data">
            <div>
              Upto
              <br />
              <span className="slogan-data-number">{discountPercent}%</span>
              <br />
              Discount on 1st order
            </div>
            <div>
              Upto
              <br />
              <span className="slogan-data-number">{growthPercent}%</span>
              <br />
              Growth Estimate
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
