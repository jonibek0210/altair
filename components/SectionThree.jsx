"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBus } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);
const SectionThree = ({ Playfair_DisplayFont, homepage }) => {
    const arr = [
        {
            title: homepage.sectionthree.title,
            dcr: homepage.sectionthree.dcr,
            img: "/images/services/transfer.png",
        },
        {
            title: homepage.sectionthree.title2,
            dcr: homepage.sectionthree.dcr2,
            img: "/images/services/transfer.png"
        },
        {
            title: homepage.sectionthree.title3,
            dcr: homepage.sectionthree.dcr3,
            img: "/images/services/transfer.png"
        },
    ]

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
                arr.map((el, index) => (
                    <div key={index} className="a">
                        <div className="absolute -top-16 -left-3 z-[-1] w-[350px] h-52 overflow-hidden">
                            <Image
                                className='w-full h-full object-cover object-center rounded-xl'
                                src={el.img}
                                width={1000}
                                height={1000}
                                alt='img'
                            />
                        </div>

                        <div className="text-center mt-5 max-md:mt-3 p-5 rounded-xl text-white bg-white/30 backdrop-blur-sm">
                            <h3 className={`text-4xl max-lg:text-3xl max-sm:text-2xl font-medium ${Playfair_DisplayFont.className}`}>
                                {el.title}
                            </h3>
                            <p className="mt-3 text-sm leading-5 tracking-[1px]">
                                {el.dcr}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SectionThree
