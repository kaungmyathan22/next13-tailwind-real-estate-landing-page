import HouseIllustration from "@/assets/svgs/HouseIllustration";

export function Hero({}) {
  return (
    <section>
      <div className="flex items-center gap-x-32">
        <div className="flex justify-center flex-col flex-1 ml-40">
          <h2 className="text-[#687690] text-lg font-medium tracking-[0.18px] mb-2">
            Welcome to Besnik Agency
          </h2>
          <h1 className="text-[#000336] text-6xl font-bold leading-[76px] mb-8">
            Discover a place you&apos;ll love to live.
          </h1>
          <p className="first-letter:uppercase text-lg font-normal text-[#5A6473] lowercase mb-10">
            get the best real estate deals first, before they hit the mass
            market! HOT FORECLOSURE DEALS with one simple search
          </p>
          <button className="text-white text-[13px] font-medium px-9 py-4 rounded-xl bg-[#0F1B4C] w-fit">
            More About Us
          </button>
        </div>
        <HouseIllustration className="flex-1" />
      </div>
    </section>
  );
}
