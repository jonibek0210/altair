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
            <h2 className={`five-sec-el text-5xl max-xl:text-4xl max-lg:text-3xl font-medium ${Playfair_DisplayFont.className}`}>Откройте для себя все комнаты</h2>
            <p className={`five-sec-el mt-3 text-lg max-xs:text-base tracking-[4px] max-xl:tracking-[2px] max-md:tracking-[1px] ${Playfair_DisplayFont.className}`}>Почувствуйте себя и свою семью</p>
            <hr className="five-sec-el line m-auto bg-white" />
            <p className="five-sec-el tracking-[2px] max-sm:text-sm">
                Откройте для себя уютные гостиницы, где каждая комната воплощает комфорт и гостеприимство, обеспечивая идеальное пребывание и незабываемый опыт для всех гостей!
            </p>
            <button className="five-sec-el button mt-5">Оставить заявку</button>
        </div>
    )
}

export default SectionFive
