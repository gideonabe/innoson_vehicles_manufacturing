import Fleet from "@/components/Fleet";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* <Hero /> */}
        <Fleet />
      </main>
    </div>
  );
}
