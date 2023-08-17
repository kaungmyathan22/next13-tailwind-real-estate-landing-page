import CartLogo from "@/assets/svgs/CartLogo";
import RentLogo from "@/assets/svgs/RentLogo";
import SellLogo from "@/assets/svgs/SellLogo";
import { HowItWorkCard } from "./HowItWorkCard";

export function HowItWork({}) {
  return (
    <section className="mt-20 w-[685px] mx-auto py-20">
      <div className="mx-auto h-1 w-10 rounded-xl bg-[#000339]"></div>
      <div className="flex flex-col mt-3">
        <h2 className="text-[#000339] text-center text-3xl font-semibold leading-9">
          How its works ?
        </h2>
        <p className="text-center text-[#5A6473] font-normal leading-8 text-base mt-5">
          Everything you need to know when you're looking to buy,
          <br /> rent, or sell - all in one place.
        </p>
        <div className="flex justify-between mt-20">
          <HowItWorkCard
            title={"Buyer Guides"}
            subtitle="How to buy"
            logo={<CartLogo />}
          />
          <HowItWorkCard
            title={"Renting Guides"}
            subtitle="How to rent"
            logo={<RentLogo />}
          />
          <HowItWorkCard
            title={"Seller Guides"}
            subtitle="How to sell"
            logo={<SellLogo />}
          />
        </div>
        <div className="flex mt-12 justify-center">
          <button className="bg-[#0F1B4C] rounded-xl text-white font-medium text-sm text-center px-6 py-4">
            Sell Full Guidelines
          </button>
        </div>
      </div>
    </section>
  );
}
