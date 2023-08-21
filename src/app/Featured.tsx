import Image from "next/image";

export function Featured({ MobileIllustrationImage }: any) {
  return (
    <section className="my-[51px] mt-[72px] relative">
      <div className="bg-[#063183] mx-auto max-w-[1110px] py-28 px-20 rounded-3xl flex relative">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-white text-4xl font-semibold leading-9">
            Featured Properties
          </h1>
          <p className="text-base font-normal leading-8 text-white/75">
            Everything you need to know when you&apos;re looking
          </p>
          <button className="bg-white py-4 px-6 text-[#002366] font-medium text-sm rounded-xl w-fit">
            Get Started Now
          </button>
        </div>
        <div className="absolute right-0 -top-10">
          <Image
            src={MobileIllustrationImage}
            height={438}
            width={515}
            alt="mobile illustration"
            className="w-full h-[438.437px]"
          />
        </div>
      </div>
    </section>
  );
}
