import Image from "next/image";
import { Page3NavItemsTextArr } from "@/app/constants";
import Styles from "@/app/page.module.css";

export default function Page3_Desktop() {
  // @1-unit-y: 10/868 = 1.15 % vh
  // @2-unit-y: 20/868 = 2.3% vh
  // @1-unit-x: 10/1440 = 0.7% vw
  // @2-unit-x: 20/1440 = 1.4% vw
  // content: 1200/1440 % = 83.33 %
  // outer-px: 120/1440 % = 8.3 %
  // outer-py: 40/868 % 4.6 %
  // 1 col + 1 gutter = 100 px
  // leading default 1.5x of text size.
  // widthRatio = 2007/1440 about 1.39375, heightRatio = 1203/868
  // scaleFactor = widthRatio
  // new font size = 72 * scaleFactor about 100px
  //   const m_ratio = window.screen.width / 375;
  //   const d_ratio = window.screen.width / 1440;
  //   text-#5463FF
  const discountPercent = 15;
  const growthPercent = 50;
  const isMobile = false;
  if (isMobile) {
    return (
      <div className="`mobile-container box-border` h-screen w-screen p-[calc(100vw/375*20)]">
        <div className="mx-auto grid h-full w-full grid-rows-3">
          <div className="grid grid-rows-11">
            <header className="flex items-center justify-between">
              <div className="logo">
                <Image
                  src="/3-logo.svg"
                  alt="Page3 Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="menu">
                <Image
                  src="/3-menu.svg"
                  alt="Page3 Menu Icon"
                  width={31}
                  height={20}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
            </header>
            <main className="row-start-4 ml-[calc(100vw/375*20)]">
              <p className="text-[calc(100vw/375*13.06)] font-light">
                Yes. I want to do
              </p>
              <h2 className="text-#5463FF text-nowrap text-[calc(100vw/375*39.19)] font-bold">
                UIUX DESIGNER
              </h2>
              <p className="text-pretty text-center text-[calc(100vw/375*9.58)] font-light">
                Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus
                ipsum. Ullam congue in viverra congue ornare.Morbi non tincidunt
                velit nec.
              </p>
            </main>
            <div className="row-span-2 row-end-12 mx-auto self-end">
              <button
                type="button"
                className="rounded-5.2px bg-#5463FF hover:scale-120 block w-[calc(100vw/375*205)] px-[calc(100vw/375*12)] py-[calc(100vw/375*10)] text-[calc(100vw/375*8.31)] font-medium text-white"
              >
                Contact Us Now
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mx-auto mt-[calc(100vw/375*24)] flex gap-[calc(100vw/375*33)] leading-4">
              <div>
                <span className="text-[calc(100vw/375*9.21)]">Upto</span>
                <br />
                <span className="text-#5463FF text-[calc(100vw/375*18.42)] font-bold">
                  {discountPercent}%
                </span>
                <br />
                <span className="text-[calc(100vw/375*9.21)]">
                  Discount on 1st order
                </span>
              </div>
              <div>
                <span className="text-[calc(100vw/375*9.21)]">Upto</span>
                <br />
                <span className="text-#5463FF text-[calc(100vw/375*18.42)] font-bold">
                  {growthPercent}%
                </span>
                <br />
                <span className="text-[calc(100vw/375*9.21)]">
                  Growth Estimate
                </span>
              </div>
            </div>
            <div className="">
              <Image
                src="/3-hero-image.png"
                alt="Page3 Hero Image"
                width={0}
                height={0}
                sizes="max"
                className="h-full w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!isMobile) {
    return (
      <div className="desktop-container py-4.6vh px-8.3vw text-shadow h-screen w-screen">
        <div className="gap-1.4vw mx-auto grid h-full w-full grid-cols-12 grid-rows-12">
          <header className="leading-2.3vh col-span-full grid h-[calc(1.39*2.3vh)] grid-cols-subgrid">
            <div className="logo col-span-3 col-start-1 h-full hover:cursor-pointer">
              <Image
                src="/3-logo.svg"
                alt="Page3 Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-auto"
              />
            </div>
            <div className="col-start-4 col-end-13 flex items-center justify-between lg:col-start-5 xl:col-start-6 2xl:col-start-7">
              <nav className="gap-2.8vw flex">
                {Page3NavItemsTextArr.map((item) => (
                  <a
                    href={item.linkUrl}
                    className="hover:text-#5463FF text-[calc(1.39*16px)] font-semibold hover:cursor-pointer"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
              <div className="pointer-events-auto relative">
                <button
                  type="button"
                  className="bg-#5463FF px-2.2vw py-1.4vh rounded-10px hover:scale-120 absolute -right-10 -z-10 -translate-y-1/2 text-[calc(1.39*16px)] font-medium text-white lg:-right-10"
                >
                  Button
                </button>
              </div>
            </div>
          </header>
          <div className="hero-image -my-15 col-start-5 col-end-13 row-start-7 row-end-12 -mx-5 md:col-start-5 md:row-start-7 lg:row-start-5 xl:row-start-4 2xl:col-start-7 2xl:row-start-3">
            {/* <div className="hero-image col-span-6 row-span-9 row-end-12 col-end-13 -my-15 -mx-5"> */}
            <Image
              // src="/3-hero-image.png"
              src="https://selfuse-1308651335.cos.ap-nanjing.myqcloud.com/3-hero-Image.png"
              alt="Page3 Hero Image"
              width={0}
              height={0}
              sizes="max"
              className="h-full w-auto"
            />
          </div>
          <main className="col-span-6 col-start-1 row-start-4 row-end-11 grid grid-rows-subgrid">
            <p className="row-end-2 self-end text-[calc(1.39*24px)] font-light leading-10">
              Yes, I want to do
            </p>
            <h2 className="text-#5463FF leading-20 row-start-2 text-nowrap text-[calc(1.39*72px)] font-bold">
              UIUX DESIGNER
            </h2>
            <p className="mt-3vh leading-2.5vh text-pretty text-[calc(1.39*18px)] font-light">
              Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus
              ipsum. Ullam congue in viverra congue ornare.Morbi non tincidunt
              <br />
              velit nec.
            </p>
            <div className="row-start-5">
              <button
                type="button"
                className="bg-#5463FF rounded-10px px-2.2vw py-1.4vh hover:scale-120 text-[calc(1.39*16px)] font-medium text-white"
              >
                Contact Us Now
              </button>
            </div>
            <div className="gap-3.5vw row-start-7 flex">
              <div>
                <span className="text-[calc(1.39*16px)] leading-5">Upto</span>
                <br />
                <span className="text-#5463FF text-[calc(1.39*32px)] font-bold leading-10">
                  {discountPercent}%
                </span>
                <br />
                <span className="text-[calc(1.39*16px)]">
                  Discount on 1st order
                </span>
              </div>
              <div>
                <span className="text-[calc(1.39*16px)] leading-5">Upto</span>
                <br />
                <span className="text-#5463FF text-[calc(1.39*32px)] font-bold leading-10">
                  {growthPercent}%
                </span>
                <br />
                <span className="text-[calc(1.39*16px)]">Growth Estimate</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
