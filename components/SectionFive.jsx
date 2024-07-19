"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

const SectionFive = ({ Playfair_DisplayFont }) => {

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".five-sec-el", {
            y: 40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".five-sec",
                start: "-20% center",
            }
        })
    }, []);

    return (
        <div className="five-sec custom-container padding text-center text-white">
            <h2 className={`five-sec-el text-5xl max-xl:text-4xl max-lg:text-3xl font-medium ${Playfair_DisplayFont.className}`}>Discover All Room</h2>
            <p className={`five-sec-el mt-3 text-lg max-xs:text-base tracking-[4px] max-xl:tracking-[2px] max-md:tracking-[1px] ${Playfair_DisplayFont.className}`}>Realx Yourself and Family</p>
            <hr className="five-sec-el line m-auto bg-white" />
            <p className="five-sec-el tracking-[2px] max-sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Natus, quo. Consectetur
                minus deserunt, aperiam distinctio eveniet
                animi, eum, esse dolorum sapiente quas a
                officiis. Nulla pariatur quidem
                perspiciatis ea cum!
            </p>
            <button className="five-sec-el button mt-5">Check Room</button>
        </div>
    )
}

export default SectionFive
