import { Playfair_Display } from 'next/font/google';
import React from 'react'

import { IoIosCall, IoMdArrowDropright } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Accordions from '@/components/Accordions';
import ContactInfo from '@/components/ContactInfo';
import Map from '@/components/Map';


const Playfair_DisplayFont = Playfair_Display({
    weight: ['400', "500", "600"],
    display: 'swap',
    subsets: ["latin"]
});

const Page = () => {
    return (
        <div>
            <div className="py-20 max-lg:py-10 max-md:pt-5 max-md:pb-0 md:bg-[url('/images/image-1.png')] bg-cover bg-no-repeat bg-center px-3 relative z-20">
                <div className="absolute z-[-1] top-0 left-0 inset-0 bg-black/30 md:block hidden"></div>
                <h2 className={`text-5xl max-xl:text-4xl md:text-center font-medium text-gray md:text-white ${Playfair_DisplayFont.className}`}>Контакты</h2>
            </div>

            <div className="custom-container padding">
                <div className="mx-20 max-xl:mx-10 max-lg:mx-0">
                    <ContactInfo Playfair_DisplayFont={Playfair_DisplayFont} />

                    <Map Playfair_DisplayFont={Playfair_DisplayFont} />
                </div>
            </div>
        </div>
    )
}

export default Page
