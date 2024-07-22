"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'

const SectionTwo = ({ Playfair_DisplayFont }) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".two", {
            x: 40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".two-sec",
                start: "-50% center",
            }
        })
        gsap.from(".two-sec-img", {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: ".two-sec-img",
                start: "top center",
            }
        })
    }, []);

    return (
        <div className="flex max-md:flex-col-reverse items-center gap-20 max-2xl:gap-10">
            <div className="two-sec-img w-1/2 max-md:w-full h-[500px] max-2xl:h-[400px] max-xl:h-[400px] max-lg:h-[350px] max-sm:h-[280px] max-md:mr-5 rounded-r-full overflow-hidden bg-[#1f4037]">
                <Image
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                    src={"/images/image-1.png"}
                    alt='image'
                />
            </div>

            <div className="two-sec text-center md:w-1/2 max-w-4xl pr-24 max-lg:pr-14 max-md:px-5 max-md:mt-5">
                <p className={`two mb-1 tracking-[4px] font-medium text-gray ${Playfair_DisplayFont.className}`}>ОТЕЛЬ КУРОРТ</p>
                <h2 className={`two text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Расслабьтесь в месте Heaven</h2>
                <hr className="two line m-auto bg-[#6d6960]" />
                <p className="two text-sm tracking-[1px] text-gray">
                    Расслабьтесь в раю: наслаждение моментами спокойствия в уникальном месте под названием Heaven, где каждый шаг наполнен гармонией природы и теплом солнечных лучей, создавая идеальное место для истинного отдыха и восстановления сил.
                </p>
                <button className="two button m-auto mt-5">Контакты</button>
            </div>
        </div>
    )
}

export default SectionTwo
