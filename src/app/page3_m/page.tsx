import Image from "next/image";

export default function Page3_Mobile() {
  //   const discountPercent = 0;
  //   const growthPercent = 0;
  const discountPercent = 15;
  const growthPercent = 50;
  return (
    <div className="hero-container p-20px h-screen">
      <header className="mb-10 flex h-max items-center justify-between">
        <div className="logo">
          <Image
            src="/3-logo.svg"
            alt="Page3 Logo"
            width={0}
            height={0}
            sizes="min"
            className="h-min w-min"
          />
        </div>
        <div className="menu">
          <Image
            src="/3-menu.svg"
            alt="Page3 Menu Icon"
            width={0}
            height={0}
            sizes="min"
            className="h-min w-min"
          />
        </div>
      </header>
      <main className="main px-20px">
        <p className="leading-20.9px text-13px font-light">Yes. I want to do</p>
        <h2 className="leading-47px text-39.2px text-#5463FF mb-2 text-nowrap font-bold">
          UIUX DESIGNER
        </h2>
        <p className="text-9.58px mb-3 text-center font-light">
          Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus ipsum.
          Ullam congue in viverra congue ornare.Morbi non tincidunt velit nec.
        </p>
        <div className="grid place-content-center">
          <button
            type="button"
            className="bg-#5463FF rounded-5.2px p-8px text-10px mb-5 box-border text-white"
          >
            Contact Us Now
          </button>
          <div className="text-10px flex gap-8">
            <div>
              Upto
              <br />
              <span className="text-#5463FF text-16px font-bold">
                {discountPercent}%
              </span>
              <br />
              Discount on 1st order
            </div>
            <div>
              Upto
              <br />
              <span className="text-#5463FF text-16px font-bold">
                {growthPercent}%
              </span>
              <br />
              Growth Estimate
            </div>
          </div>
        </div>
      </main>
      <div className="hero-image mt-7 flex items-center justify-center">
        {/* <div className="grow">123</div> */}
        <Image
          src="/3-@2-hero-image.png"
          alt="Page3 Hero Image"
          width={0}
          height={0}
          sizes="max"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
