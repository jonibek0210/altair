"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
const SectionSix = ({ Playfair_DisplayFont }) => {
    useGSAP(() => {
        gsap.from(".time", {
            opacity: 0,
            x: -40,
            duration: 1,
            ease: 'power3.out',
            stagger: .2,
            scrollTrigger: {
                trigger: ".times",
                start: "-90% center",
            }
        })
    }, [])

    return (
        <div className={`times custom-container flex items-center justify-around py-10 text-gray ${Playfair_DisplayFont.className}`}>
            <div className="time text-center">
                <div className="text-5xl max-md:text-4xl font-medium">
                    256
                </div>
                <div className="text-sm mt-1">
                    customer
                </div>
            </div>
            <div className="time text-center">
                <div className="text-5xl max-md:text-4xl font-medium">
                    48
                </div>
                <div className="text-sm mt-1">
                    Rooms
                </div>
            </div>
            <div className="time text-center">
                <div className="text-5xl max-md:text-4xl font-medium">
                    26
                </div>
                <div className="text-sm mt-1">
                    facilities
                </div>
            </div>
            <div className="time text-center">
                <div className="text-5xl max-md:text-4xl font-medium">
                    59
                </div>
                <div className="text-sm mt-1">
                    staff
                </div>
            </div>
        </div>
    )
}

export default SectionSix
