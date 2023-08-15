import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#E6F0FF]">
      {/* navbar */}
      <Navbar />
      {/* section hero */}
      <Hero />
    </main>
  );
}
