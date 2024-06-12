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
      <div className="`mobile-container w-screen h-screen p-[calc(100vw/375*20)] box-border`">
        <div className="w-full h-full grid  grid-rows-3 mx-auto">
          <div className=" grid grid-rows-11">
            <header className=" flex justify-between items-center">
              <div className="logo">
                <Image
                  src="/3-logo.svg"
                  alt="Page3 Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="menu">
                <Image
                  src="/3-menu.svg"
                  alt="Page3 Menu Icon"
                  width={31}
                  height={20}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </header>
            <main className=" row-start-4 ml-[calc(100vw/375*20)]">
              <p className="font-light text-[calc(100vw/375*13.06)]">
                Yes. I want to do
              </p>
              <h2 className="text-#5463FF font-bold text-[calc(100vw/375*39.19)] text-nowrap">
                UIUX DESIGNER
              </h2>
              <p className="font-light text-[calc(100vw/375*9.58)] text-center text-pretty">
                Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus
                ipsum. Ullam congue in viverra congue ornare.Morbi non tincidunt
                velit nec.
              </p>
            </main>
            <div className="mx-auto row-end-12 row-span-2 self-end">
              <button
                type="button"
                className="block text-white font-medium text-[calc(100vw/375*8.31)] rounded-5.2px bg-#5463FF w-[calc(100vw/375*205)] px-[calc(100vw/375*12)] py-[calc(100vw/375*10)] hover:scale-120"
              >
                Contact Us Now
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-[calc(100vw/375*33)] mx-auto leading-4 mt-[calc(100vw/375*24)]">
              <div>
                <span className="text-[calc(100vw/375*9.21)]">Upto</span>
                <br />
                <span className="text-#5463FF font-bold text-[calc(100vw/375*18.42)] ">
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
                <span className="text-#5463FF font-bold text-[calc(100vw/375*18.42)]">
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
                className="w-auto h-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!isMobile) {
    return (
      <div className="desktop-container w-screen h-screen py-4.6vh px-8.3vw text-shadow">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-1.4vw mx-auto ">
          <header className="col-span-full grid grid-cols-subgrid h-[calc(1.39*2.3vh)] leading-2.3vh ">
            <div className="logo h-full col-start-1 col-span-3 hover:cursor-pointer">
              <Image
                src="/3-logo.svg"
                alt="Page3 Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full"
              />
            </div>
            <div className="col-end-13 2xl:col-start-7 xl:col-start-6 lg:col-start-5 col-start-4 flex justify-between items-center">
              <nav className="flex gap-2.8vw">
                {Page3NavItemsTextArr.map((item) => (
                  <a
                    href={item.linkUrl}
                    className="font-semibold hover:text-#5463FF hover:cursor-pointer text-[calc(1.39*16px)]"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
              <div className="relative">
                <button
                  type="button"
                  className="bg-#5463FF text-white text-[calc(1.39*16px)] font-medium px-2.2vw py-1.4vh absolute rounded-10px lg:-right-10 -right-10 -translate-y-1/2  hover:scale-120 -z-10"
                >
                  Button
                </button>
              </div>
            </div>
          </header>
          <div
            className="
            hero-image 
            row-end-12 md:row-start-7 lg:row-start-5 xl:row-start-4 2xl:row-start-3 row-start-7
            col-end-13 2xl:col-start-7 md:col-start-5
            col-start-5
            -my-15 -mx-5"
          >
            {/* <div className="hero-image col-span-6 row-span-9 row-end-12 col-end-13 -my-15 -mx-5"> */}
            <Image
              // src="/3-hero-image.png"
              src="https://selfuse-1308651335.cos.ap-nanjing.myqcloud.com/3-hero-Image.png"
              alt="Page3 Hero Image"
              width={0}
              height={0}
              sizes="max"
              className="w-auto h-full"
            />
          </div>
          <main className="col-span-6 col-start-1 row-start-4 row-end-11 grid grid-rows-subgrid">
            <p className="row-end-2 self-end leading-10 font-light text-[calc(1.39*24px)]">
              Yes, I want to do
            </p>
            <h2 className="text-#5463FF row-start-2 leading-20 font-bold text-[calc(1.39*72px)] text-nowrap">
              UIUX DESIGNER
            </h2>
            <p className="mt-3vh font-light text-[calc(1.39*18px)] leading-2.5vh text-pretty ">
              Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus
              ipsum. Ullam congue in viverra congue ornare.Morbi non tincidunt
              <br />
              velit nec.
            </p>
            <div className="row-start-5">
              <button
                type="button"
                className="text-[calc(1.39*16px)] text-white bg-#5463FF font-medium rounded-10px px-2.2vw py-1.4vh hover:scale-120"
              >
                Contact Us Now
              </button>
            </div>
            <div className="row-start-7 flex gap-3.5vw">
              <div>
                <span className="text-[calc(1.39*16px)] leading-5">Upto</span>
                <br />
                <span className="text-#5463FF font-bold text-[calc(1.39*32px)] leading-10">
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
                <span className="text-#5463FF font-bold text-[calc(1.39*32px)] leading-10">
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
