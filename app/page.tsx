import AfricanLegacy from "@/components/AfricanLegacy";
import DriveNow from "@/components/DriveNow";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* <Navbar /> */}
        <Hero />
        <Fleet />
        <DriveNow />
        <AfricanLegacy />
        <Footer />
      </main>
    </div>
  );
}
