import { FaHotel } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

import Hero from "@/components/Hero";
import Image from "next/image";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import SectioneEight from "@/components/SectioneEight";

const Playfair_DisplayFont = Playfair_Display({
   weight: ['400', "500", "600"],
   display: 'swap',
   subsets: ["latin"]
});

export default function Home() {
   return (
      <>
         <section>
            <Hero Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>
         <section>
            <SectionTwo Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectionThree Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         <section>
            <SectionFour Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectionFive Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         {/* <section>
            <SectionSix Playfair_DisplayFont={Playfair_DisplayFont} />
         </section> */}

         <section className="bg-[#c9aa7e]">
            <SectionSeven Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectioneEight Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>
      </>
   );
}
