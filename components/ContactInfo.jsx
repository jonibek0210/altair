"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { IoIosCall, IoMdArrowDropright } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const arr = [
    {
        icon: <IoIosCall className='text-[30px] max-lg:text-[25px]' color='#fff' />,
        title: "Номер",
        dcr: "+998(99)999-9999"
    },
    {
        icon: <FaMapMarkedAlt className='text-[30px] max-lg:text-[25px]' color='#fff' />,
        title: "локация",
        dcr: "Location"
    },
    {
        icon: <MdEmail className='text-[30px] max-lg:text-[25px]' color='#fff' />,
        title: "почта",
        dcr: "altair@gmail.com"
    }
]

const ContactInfo = ({ Playfair_DisplayFont }) => {

    useGSAP(() => {
        gsap.from(".info", {
            opacity: 0,
            x: -40,
            stagger: .2,
            duration: 1
        })
    }, [])


    return (
        <div className="flex items-center justify-around px-3 py-10 max-lg:py-8 max-sm:py-5 rounded-full bg-[#1f4037]">
            {
                arr.map((i) => (
                    <div key={i} className="info flex flex-col items-center justify-center gap-3 max-lg:gap-1">
                        <div className="mb-3 max-lg:mb-0 w-fit h-fit p-3 max-sm:p-2 rounded-full border-2 border-white">
                            {i.icon}
                        </div>
                        <h3 className={`text-3xl max-lg:text-2xl max-sm:text-lg text-white font-medium ${Playfair_DisplayFont.className}`}>{i.title}</h3>
                        <p className='text-sm max-sm:text-xs text-white'>{i.dcr}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactInfo
