import LogoSVG from "@/assets/svgs/Logo";
import Link from "next/link";

export function Navbar({}) {
  return (
    <nav className="bg-[#E6F0FF]">
      <div className="max-w-[1110px] mx-auto flex items-center justify-between ">
        {/* left side */}
        <div className="flex items-center gap-x-16 py-12">
          <LogoSVG />
          <ul className="flex items-center gap-x-7 text-sm font-medium">
            <li>Home</li>
            <li>Features</li>
            <li>Service</li>
            <li>Listed</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <Link href="/signup" className="text-[#0F1B4C]">
            Sign up
          </Link>
          <Link
            href="/register"
            className="text-white rounded-lg bg-[#0F1B4C] px-5  py-2"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
