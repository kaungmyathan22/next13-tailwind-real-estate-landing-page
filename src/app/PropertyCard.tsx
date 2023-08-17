import BedLogo from "@/assets/svgs/BedLogo";
import BothLogo from "@/assets/svgs/BothLogo";
import SquareLogo from "@/assets/svgs/SquareLogo";
import Image, { StaticImageData } from "next/image";

export function PropertyCard({ image }: { image: StaticImageData }) {
  return (
    <div
      className="flex flex-col rounded-xl bg-white pb-6 overflow-hidden"
      style={{
        boxShadow: "0px 65px 80px -46px rgba(226, 238, 249, 0.60)",
      }}
    >
      <Image
        src={image}
        width={350}
        height={227}
        alt="Some house image "
        className="h-[227px] object-cover"
      />
      <div className="flex flex-col mt-5 px-5 gap-y-2">
        <h6 className="text-[#000339] text-xl font-semibold leading-5">
          $35000
        </h6>
        <p className="font-medium text-sm text-[#A3A6AB]">
          8502 Preston Rd. Inglewood, Maine 98280
        </p>
        <div className="flex items-center mt-5 justify-between">
          <div className="flex items-center gap-x-2">
            <BedLogo />
            <p className="text-[#4D4D52] text-sm font-medium tracking-[0.14px]">
              5 Beds
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <BothLogo />
            <p className="text-[#4D4D52] text-sm font-medium tracking-[0.14px]">
              5 Beds
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <SquareLogo />
            <p className="text-[#4D4D52] text-sm font-medium tracking-[0.14px]">
              5 Beds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
