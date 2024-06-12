import Image from "next/image";

export default function Page3_Mobile() {
  //   const discountPercent = 0;
  //   const growthPercent = 0;
  const discountPercent = 15;
  const growthPercent = 50;
  return (
    <div className="hero-container h-screen p-20px">
      <header className="flex items-center justify-between h-max mb-10">
        <div className="logo">
          <Image
            src="/3-logo.svg"
            alt="Page3 Logo"
            width={0}
            height={0}
            sizes="min"
            className="w-min h-min"
          />
        </div>
        <div className="menu">
          <Image
            src="/3-menu.svg"
            alt="Page3 Menu Icon"
            width={0}
            height={0}
            sizes="min"
            className="w-min h-min"
          />
        </div>
      </header>
      <main className="main px-20px">
        <p className="font-light leading-20.9px text-13px">Yes. I want to do</p>
        <h2 className="font-bold leading-47px text-39.2px text-#5463FF mb-2 text-nowrap">
          UIUX DESIGNER
        </h2>
        <p className="font-light text-9.58px text-center mb-3">
          Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus ipsum.
          Ullam congue in viverra congue ornare.Morbi non tincidunt velit nec.
        </p>
        <div className="grid place-content-center">
          <button
            type="button"
            className=" bg-#5463FF text-white rounded-5.2px mb-5 p-8px box-border text-10px"
          >
            Contact Us Now
          </button>
          <div className="text-10px flex gap-8">
            <div>
              Upto
              <br />
              <span className="font-bold text-#5463FF text-16px">
                {discountPercent}%
              </span>
              <br />
              Discount on 1st order
            </div>
            <div>
              Upto
              <br />
              <span className="font-bold text-#5463FF text-16px">
                {growthPercent}%
              </span>
              <br />
              Growth Estimate
            </div>
          </div>
        </div>
      </main>
      <div className="hero-image flex items-center justify-center mt-7">
        {/* <div className="grow">123</div> */}
        <Image
          src="/3-@2-hero-image.png"
          alt="Page3 Hero Image"
          width={0}
          height={0}
          sizes="max"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
