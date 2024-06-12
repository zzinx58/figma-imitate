import Image from "next/image";
import { navItemsTextArr } from "../constants";
// https://www.figma.com/design/03nwrdmzwdECs70vyWFuvp/Heromaster---Free-collection-of-hero-section-(Community)?node-id=1-346&t=cqDwdR6hZ6RyVWDc-0

export default function Page2() {
  return (
    <div className="hero-container h-screen bg-#515DEF flex justify-between">
      {/*  */}
      <div className="main-container w-full col-span-2">
        <header className="header flex w-full h-120px items-center bg-red relative justify-center">
          <button
            type="button"
            className="absolute text-white text-18px bg-#515DEF p-8px top-1/3 -right-2/5"
          >
            Contact Us
          </button>
          <div className="">
            <div className="logo">
              <Image src="/Livia.svg" width={92} height={54} alt="Livia Logo" />
            </div>
            <nav className="nav text-white font-semibold text-18px flex gap-56px">
              {navItemsTextArr.map((item) => (
                <a>{item.text}</a>
              ))}
            </nav>
          </div>
        </header>
        {/*  */}
        <main className="text-white w-full grid place-content-center items-center text-24px pt-42px">
          <p className="mb-4">Hi, There!</p>
          <h1 className="slogan text-64px font-bold mb-8">
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
            className="text-black bg-white h-80px w-300px flex items-center justify-center"
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
