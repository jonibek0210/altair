"use client"
import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaHotel } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger);
const SectionFour = ({ Playfair_DisplayFont }) => {

    useGSAP(() => {
        gsap.from(".room", {
            y: 40,
            opacity: 0,
            stagger: .2,
            duration: 1,
            scrollTrigger: {
                trigger: ".four-sec",
                start: "-10% center",
            }
        })
        gsap.from(".title", {
            y: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".four-sec",
                start: "-10% center",
            }
        })
    }, []);

    return (
        <div className="four-sec custom-container padding">
            <div id='rooms' className="text-center">
                <h2 className={`title text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Наши номера</h2>
            </div>

            <div className="mt-10 max-lg:mt-7 max-md:mt-7">
                <div className="bg-[#1f4037] room rounded-[60px] max-md:rounded-3xl overflow-hidden text-white">
                    <div className="flex max-lg:flex-col">
                        <div className="w-1/2 max-lg:w-full p-14 max-lg:px-10 max-md:px-4 max-lg:py-8 max-sm:py-5">
                            <h3 className={`text-4xl max-md:text-3xl font-medium text-center ${Playfair_DisplayFont.className}`}>Standart Room</h3>
                            <hr className="line m-auto bg-[#D7DDE8]" />
                            <p className=" text-center max-lg:text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas commodi ullam iusto, perspiciatis quis excepturi quibusdam est reprehenderit inventore odio voluptatum expedita corporis ipsam.
                            </p>
                        </div>
                        <div className="w-1/2 max-lg:w-full max-h-96 max-lg:h-60 max-md:h-40 overflow-hidden">
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
    )
}

export default SectionFour
