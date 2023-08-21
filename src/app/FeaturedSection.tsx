import RightArrowSm from "@/assets/svgs/RightArrowSM";
import { StaticImageData } from "next/image";
import { PropertyCard } from "./PropertyCard";

export function FeaturedSection({
  FirstPropertyImage,
  SecondPropertyImage,
  ThirdPropertyImage,
}: {
  FirstPropertyImage: StaticImageData;
  SecondPropertyImage: StaticImageData;
  ThirdPropertyImage: StaticImageData;
}) {
  return (
    <section className=" bg-[#F5FAFE] py-28">
      <div className="max-w-[1110px] mx-auto flex flex-col">
        <h2 className="text-[#000339] text-3xl font-semibold leading-9 ">
          Featured Properties
        </h2>
        <div className="flex justify-between">
          <p>Everything you need to know when you&apos;re looking</p>
          <div className="flex items-center gap-x-2">
            <p className="text-lg font-semibold text-[#0689FF]">
              View All Properties
            </p>
            <RightArrowSm />
          </div>
        </div>
        <div className="flex mt-[70px] justify-between">
          <PropertyCard image={FirstPropertyImage} />
          <PropertyCard image={SecondPropertyImage} />
          <PropertyCard image={ThirdPropertyImage} />
        </div>
      </div>
    </section>
  );
}
