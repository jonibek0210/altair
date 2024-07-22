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

         <section>
            <SectionSix Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectionSeven Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         {/* <section>
            <div className="custom-container padding">
               <div className="max-w-5xl m-auto text-center">
                  <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Capture Every Moment With Us</h2>
                  <hr className="line m-auto bg-[#6d6960]" />
                  <p className="tracking-[2px] max-sm:text-sm text-gray-500">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi expedita, dolores est quidem suscipit debitis dolor pariatur asperiores vitae.
                  </p>
               </div>

               <div className="grid grid-cols-4 gap-10 mt-10">
                  {
                     [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="">
                           <Image
                              src={"/images/image-1.png"}
                              width={1000}
                              height={1000}
                              alt="image"
                           />
                        </div>
                     ))
                  }
               </div>
            </div>
         </section> */}

         <section className="bg-[#c9aa7e]">
            <SectioneEight Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>
      </>
   );
}
