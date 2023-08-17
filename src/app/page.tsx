import FooterIcons from "@/assets/svgs/FooterIcons";
import LogoSVG from "@/assets/svgs/Logo";
import ThirdPropertyImage from "../assets/images/first-property.png";
import MobileIllustrationImage from "../assets/images/mobile-illustration.png";
import NeightbourImage from "../assets/images/neighbour.png";
import Profile from "../assets/images/profile.jpeg";
import SecondPropertyImage from "../assets/images/second-property.png";
import FirstPropertyImage from "../assets/images/third-property.png";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { ClientSection } from "./ClientSection";
import { Featured } from "./Featured";
import { FeaturedSection } from "./FeaturedSection";
import { HowItWork } from "./HowItWork";
import { NeightbourSection } from "./NeightbourSection";

export default function Home() {
  return (
    <main className="bg-white">
      {/* navbar */}
      <Navbar />
      {/* section hero */}
      <Hero />
      {/* client section */}
      <ClientSection />
      {/* How it works. */}
      <HowItWork />
      {/* Featured Properties */}
      <FeaturedSection
        FirstPropertyImage={FirstPropertyImage}
        SecondPropertyImage={SecondPropertyImage}
        ThirdPropertyImage={ThirdPropertyImage}
      />
      {/* neighbour section */}
      <NeightbourSection Profile={Profile} NeightbourImage={NeightbourImage} />
      {/* featurued property */}
      <Featured MobileIllustrationImage={MobileIllustrationImage} />
      {/* Footer */}
      <footer className="py-14 max-w-[1110px] mx-auto">
        <div className="flex justify-between w-full">
          <FooterColumn
            title="Product"
            items={["Listing", "Property", "Agents", "Blog"]}
          />
          <FooterColumn
            title="Resources  "
            items={["Our Homes", "Member Stories", "Video", "Free Trial"]}
          />
          <FooterColumn
            title="Company"
            items={["Partnership", "Terms of use", "Privacy", "Sitemap"]}
          />
          <div className="flex flex-col gap-y-11">
            <h6 className="text-[#1C1C1D] text-xl font-bold">Get in touch</h6>
            <p className="text-base font-normal text-[#7A7A7E]">
              You’ll find your next home, in
              <br /> any style you prefer.
            </p>
            <div className="flex">
              <FooterIcons />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <LogoSVG />
          <p className="text-[#C2C2C2] text-sm font-normal">
            Copyright 2020.com, All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-y-11">
      <h6 className="text-[#1C1C1D] text-xl font-bold">{title}</h6>
      <ul className="flex flex-col gap-y-5 text-base font-normal ">
        {items.map((item) => (
          <li key={item} className="text-[#7A7A7E]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
