import Image from "next/image";
import Hero from "./Section/Hero";
import Navbar from "./Components/layout/Header";
import About from "./Section/About";
import Services from "./Section/Services";
import Pricing from "./Section/Pricing";
import Faq from "./Section/Faq";
import Portfolio from "./Section/Portfolio";
import Testimonial from "./Section/Testimonals";



export default function Home() {
  return (
     <main>

<div className="relative">
      <Image src="/.jpeg" alt="Blob background" className="absolute top-0 left-0 w-[10%] h-full z-0" fill objectFit="cover"
      />

      {/* Main content */}
      <div className="container mx-auto p-6 relative z-10">

        {/* Navbar */}
      <Navbar/>

 {/* hero HeroSection */}
    <Hero/>

    <About/>
    <Services/>
    <Pricing/>
    <Faq/>
    <Portfolio/>
    <Testimonial/>
      </div>
    </div>
      
    </main>
  );
}
