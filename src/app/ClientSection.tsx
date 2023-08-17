import AmazonLogo from "@/assets/svgs/AmazonLogo";
import LogoSVG from "@/assets/svgs/Logo";
import SitePointLogo from "@/assets/svgs/SitePointLogo";
import SlackLogo from "@/assets/svgs/SlackLogo";
import SlackTextLogo from "@/assets/svgs/SlackTextLogo";
import UndieLogo from "@/assets/svgs/UndieLogo";
import WooCommerce from "@/assets/svgs/WooCommerceLogo";
import Image from "next/image";
import StartImage from "../assets/images/star.png";

export function ClientSection() {
  return (
    <section className="max-w-[1110px] mx-auto mt-20 py-11 flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <LogoSVG />
        <Image src={StartImage} height={18} width={116} alt="Start logo" />
      </div>
      <div className="flex items-center">
        <p className="text-[#7D8589] text-base leading-5 font-medium">
          More than 45,000+ companies trust besnik
        </p>
        <p className="text-[#7D8589] text-base leading-5 font-medium">
          5 Star Ratings (2k+ Review)
        </p>
      </div>
      <div className="flex mt-16 items-center">
        <div className="flex items-center w-full justify-between">
          <UndieLogo key="UndieLogo" />
          <SlackLogo key="SlackLogo" />
          <SlackTextLogo key="SlackTextLogo" />
          <AmazonLogo key="AmazonLogo" />
          <WooCommerce key="WooCommerce" />
          <SitePointLogo key="SitePointLogo" />
        </div>
      </div>
    </section>
  );
}
