import { FaHotel } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

import Hero from "@/components/Hero";
import Image from "next/image";

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
            <div className="flex max-md:flex-col-reverse items-center gap-20 max-2xl:gap-10">
               <div className="w-1/2 max-md:w-full h-[500px] max-2xl:h-[400px] max-xl:h-[350px] max-lg:h-[300px] max-md:mr-5 rounded-r-full overflow-hidden bg-[#1f4037]">
                  <Image
                     className="w-full h-full object-cover"
                     width={1000}
                     height={1000}
                     src={"/images/image-1.png"}
                     alt='image'
                  />
               </div>

               <div className="text-center md:w-1/2 max-w-4xl pr-24 max-lg:pr-14 max-md:px-5 max-md:mt-5">
                  <p className={`mb-1 tracking-[4px] font-medium text-gray ${Playfair_DisplayFont.className}`}>HOTEL RESORT</p>
                  <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Relax In Place Heaven</h2>
                  <hr className="line m-auto bg-[#6d6960]" />
                  <p className="text-sm tracking-[1px] text-gray">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ducimus, molestiae deleniti quia ut minus sequi inventore
                     aliquid nobis itaque? Labore enim error impedit corrupti
                     doloremque reiciendis quis debitis assumenda quibusdam.
                  </p>
                  <button className="button m-auto mt-5">About Us</button>
               </div>
            </div>
         </section>

         <section className="bg-[#1f4037]">
            <div className="custom-container grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-16 max-lg:gap-10 padding">
               {
                  [0, 1, 2].map((i) => (
                     <div className="max-sm:px-3 text-gray-200">
                        <div className="border-4 border-gray-200 p-3 rounded-full w-fit m-auto">
                           <FaHotel size={30} color="#fff" />
                        </div>
                        <div className="text-center mt-5 max-md:mt-3">
                           <h3 className={`text-4xl max-lg:text-3xl max-sm:text-2xl font-medium ${Playfair_DisplayFont.className}`}>Deluxe Hotel</h3>
                           <p className="mt-3 max-sm:text-sm">
                              Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit.
                              Obcaecati sint quibusdam
                              numquam repudiandae ullam omnis.
                           </p>
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>

         <section>
            <div className="custom-container padding">
               <div className="text-center">
                  <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Our Rooms</h2>
               </div>

               <div className="mt-10 max-lg:mt-7 max-md:mt-7">
                  <div className="bg-[#1f4037] rounded-[60px] max-md:rounded-3xl overflow-hidden text-white">
                     <div className="flex max-lg:flex-col">
                        <div className="w-1/2 max-lg:w-full p-14 max-lg:px-10 max-md:px-4 max-lg:py-8 max-sm:py-5">
                           <h3 className={`text-4xl max-md:text-3xl font-medium text-center ${Playfair_DisplayFont.className}`}>Standart Room</h3>
                           <hr className="line m-auto bg-[#D7DDE8]" />
                           <p className=" text-center max-lg:text-sm">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas commodi ullam iusto, perspiciatis quis excepturi quibusdam est reprehenderit inventore odio voluptatum expedita corporis ipsam.
                           </p>
                        </div>
                        <div className="w-1/2 max-lg:w-full max-h-96 max-lg:max-h-60 max-md:max-h-40 bg-slate-400">
                           <Image
                              className="w-full h-full object-cover"
                              width={1000}
                              height={1000}
                              src={"/images/image-1.png"}
                              alt='image'
                           />
                        </div>
                     </div>
                     <div className="">
                        <div className="flex overflow-auto scroll-none">
                           <div className="min-w-52 max-2xl:min-w-44 max-sm:min-w-36 py-5 max-sm:py-3 px-10 max-2xl:px-5">
                              <div className="border-4 max-sm:border-2 border-[#D7DDE8] p-3 max-sm:p-2 rounded-full w-fit m-auto">
                                 <FaHotel size={20} color="#D7DDE8" />
                              </div>
                              <h4 className="text-center mt-2 ">Free Wifi</h4>
                              <p className="text-center mt-1 text-sm max-lg:text-xs ">Lorem ipsum dolor sit amet consectetur.</p>
                           </div>
                           <div className="bg-[#28564a] min-w-52 max-2xl:min-w-44 max-sm:min-w-36 py-5 max-sm:py-3 px-10 max-2xl:px-5">
                              <div className="border-4 max-sm:border-2 border-[#fff] p-3 max-sm:p-2 rounded-full w-fit m-auto">
                                 <FaHotel size={20} color="#fff" />
                              </div>
                              <h4 className="text-center mt-2 max-sm:text-sm text-white">Regular Service</h4>
                              <p className="text-center mt-1 text-sm max-lg:text-xs text-white">Lorem ipsum dolor sit amet consectetur.</p>
                           </div>
                           <div className="min-w-52 max-2xl:min-w-44 max-sm:min-w-36 py-5 max-sm:py-3 px-10 max-2xl:px-5">
                              <div className="border-4 max-sm:border-2 border-[#D7DDE8] p-3 max-sm:p-2 rounded-full w-fit m-auto">
                                 <FaHotel size={20} color="#D7DDE8" />
                              </div>
                              <h4 className="text-center mt-2 max-sm:text-sm ">Regular Service</h4>
                              <p className="text-center mt-1 text-sm max-lg:text-xs ">Lorem ipsum dolor sit amet consectetur.</p>
                           </div>
                           <div className="bg-[#28564a] min-w-52 max-2xl:min-w-44 max-sm:min-w-36 py-5 max-sm:py-3 px-10 max-2xl:px-5">
                              <div className="border-4 max-sm:border-2 border-[#fff] p-3 max-sm:p-2 rounded-full w-fit m-auto">
                                 <FaHotel size={20} color="#fff" />
                              </div>
                              <h4 className="text-center mt-2 max-sm:text-sm text-white">Free Breakfast</h4>
                              <p className="text-center mt-1 text-sm max-lg:text-xs text-white">Lorem ipsum dolor sit amet consectetur.</p>
                           </div>
                           <div className="min-w-52 max-2xl:min-w-44 max-sm:min-w-36 py-5 max-sm:py-3 px-10 max-2xl:px-5">
                              <div className="border-4 max-sm:border-2 border-[#D7DDE8] p-3 max-sm:p-2 rounded-full w-fit m-auto">
                                 <FaHotel size={20} color="#D7DDE8" />
                              </div>
                              <h4 className="text-center mt-2 max-sm:text-sm ">Free Breakfast</h4>
                              <p className="text-center mt-1 text-sm max-lg:text-xs ">Lorem ipsum dolor sit amet consectetur.</p>
                           </div>
                        </div>
                        <div className="py-5">
                           <button className="button m-auto block">Reserved Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-[#1f4037]">
            <div className="custom-container padding text-center text-white">
               <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium ${Playfair_DisplayFont.className}`}>Discover All Room</h2>
               <p className={`mt-3 text-lg max-xs:text-base tracking-[4px] max-xl:tracking-[2px] max-md:tracking-[1px] ${Playfair_DisplayFont.className}`}>Realx Yourself and Family</p>
               <hr className="line m-auto bg-white" />
               <p className="tracking-[2px] max-sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Natus, quo. Consectetur
                  minus deserunt, aperiam distinctio eveniet
                  animi, eum, esse dolorum sapiente quas a
                  officiis. Nulla pariatur quidem
                  perspiciatis ea cum!
               </p>
               <button className="button mt-5">Check Room</button>
            </div>
         </section>

         <section>
            <div className={`custom-container flex items-center justify-between py-10 text-gray ${Playfair_DisplayFont.className}`}>
               <div className="text-center">
                  <div className="text-5xl max-md:text-4xl font-medium">
                     256
                  </div>
                  <div className="text-sm mt-1">
                     customer
                  </div>
               </div>
               <div className="text-center">
                  <div className="text-5xl max-md:text-4xl font-medium">
                     48
                  </div>
                  <div className="text-sm mt-1">
                     Rooms
                  </div>
               </div>
               <div className="text-center">
                  <div className="text-5xl max-md:text-4xl font-medium">
                     26
                  </div>
                  <div className="text-sm mt-1">
                     facilities
                  </div>
               </div>
               <div className="text-center">
                  <div className="text-5xl max-md:text-4xl font-medium">
                     59
                  </div>
                  <div className="text-sm mt-1">
                     staff
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-[#1f4037]">
            <div className="custom-container padding">
               <div className="max-w-3xl m-auto text-center">
                  <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-white ${Playfair_DisplayFont.className}`}>What Our Client Says</h2>
                  <hr className="line m-auto bg-white" />
                  <p className="tracking-[2px] max-sm:text-sm text-white">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi expedita, dolores est quidem suscipit debitis dolor pariatur asperiores vitae.
                  </p>
               </div>

               <div className="flex items-center gap-10 max-md:gap-5 mt-14 max-md:mt-8 overflow-auto scroll-none">
                  {
                     [0, 1, 2].map((i) => (
                        <div className="min-w-80 max-md:min-w-60 flex flex-col p-8 max-md:p-4 rounded-md bg-[#28564a] text-white">
                           <p className="max-md:text-sm text-center mb-5">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis facilis rerum odit harum itaque sequi est minus id blanditiis corporis cum, impedit asperiores mollitia nesciunt totam, nam pariatur! Fugiat?
                           </p>
                           <div className="w-fit m-auto flex gap-3 mt-auto">
                              <div className="bg-[red] p-6 rounded-lg"></div>
                              <div className="">
                                 <p>Camella</p>
                                 <p>Lorem, ipsum.</p>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
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
                        <div className="">
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

         <section className="bg-[#1f4037]">
            <div className="custom-container padding flex gap-5 max-lg:flex-col lg:items-center justify-between">
               <div className="max-w-4xl max-xl:max-w-3xl text-white">
                  <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium ${Playfair_DisplayFont.className}`}>Capture Every Moment With Us</h2>
                  <hr className="line bg-white" />
                  <p className="tracking-[2px] max-sm:text-sm">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi expedita, dolores est quidem suscipit debitis dolor pariatur asperiores vitae.
                  </p>
               </div>
               <div className="">
                  <button className="button">Contact Us</button>
               </div>
            </div>
         </section>
      </>
   );
}
