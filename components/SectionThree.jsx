"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'
import { FaHotel } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger);
const SectionThree = ({ Playfair_DisplayFont }) => {
    useGSAP(() => {
        gsap.from(".a", {
            x: -40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".as",
                start: "-30% center",
            }
        })
    }, []);

    return (
        <div className="as custom-container grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-16 max-lg:gap-10 padding">
            {
                [0, 1, 2].map((i) => (
                    <div key={i} className="a max-sm:px-3 text-gray-200">
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
    )
}

export default SectionThree
