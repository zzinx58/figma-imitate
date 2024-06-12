import Image from "next/image";
import { Page2NavItemsTextArr } from "@/app/constants";
// https://www.figma.com/design/03nwrdmzwdECs70vyWFuvp/Heromaster---Free-collection-of-hero-section-(Community)?node-id=1-346&t=cqDwdR6hZ6RyVWDc-0

export default function Page2() {
  return (
    <div className="hero-container bg-#515DEF flex h-screen justify-between">
      {/*  */}
      <div className="main-container col-span-2 w-full">
        <header className="header h-120px bg-red relative flex w-full items-center justify-center">
          <button
            type="button"
            className="text-18px bg-#515DEF p-8px -right-2/5 absolute top-1/3 text-white"
          >
            Contact Us
          </button>
          <div className="">
            <div className="logo">
              <Image src="/Livia.svg" width={92} height={54} alt="Livia Logo" />
            </div>
            <nav className="nav text-18px gap-56px flex font-semibold text-white">
              {Page2NavItemsTextArr.map((item) => (
                <a>{item.text}</a>
              ))}
            </nav>
          </div>
        </header>
        {/*  */}
        <main className="text-24px pt-42px grid w-full place-content-center items-center text-white">
          <p className="mb-4">Hi, There!</p>
          <h1 className="slogan text-64px mb-8 font-bold">
            We are a growing-up
            <br />
            Creative Agency from
            <br />
            Indonesia!
          </h1>
          <p className="mb-13">
            We provides you with modest and professional design templates
            <br />
            that come from the synergy of design and technology
          </p>
          <button
            type="button"
            className="h-80px w-300px flex items-center justify-center bg-white text-black"
          >
            Let's Collaborate
            <span className="i-mdi:arrow-right size-48px" />
          </button>
        </main>
      </div>
      {/*  */}
      <div className="side-image">
        <Image
          className="w-100vw h-100vh"
          src={"/side-image.png"}
          alt="Side Image"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      {/*  */}
    </div>
  );
}
