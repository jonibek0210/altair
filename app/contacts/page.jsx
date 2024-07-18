import { Playfair_Display } from 'next/font/google';
import React from 'react'

import { IoIosCall, IoMdArrowDropright } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Accordion from '@/components/children/Accordion';
import Accordions from '@/components/Accordions';


const Playfair_DisplayFont = Playfair_Display({
    weight: ['400', "500", "600"],
    display: 'swap',
    subsets: ["latin"]
});

const arr = [
    {
        icon: <IoIosCall className='text-[30px] max-lg:text-[25px]' color='#fff' />,
        title: "Call-Us",
        dcr: "+998(99)999-9999"
    },
    {
        icon: <FaMapMarkedAlt className='text-[30px] max-lg:text-[25px]' color='#fff' />,
        title: "Our Location",
        dcr: "Location"
    },
    {
        icon: <MdEmail className='text-[30px] max-lg:text-[25px]' color='#fff' />,
        title: "Email",
        dcr: "altair@gmail.com"
    }
]

const Page = () => {
    return (
        <div>
            <div className="py-20 max-lg:py-10 max-md:pt-5 max-md:pb-0 md:bg-[url('/images/image-1.png')] bg-cover bg-no-repeat bg-center px-3">
                <h2 className={`text-5xl max-xl:text-4xl md:text-center font-medium md:text-white ${Playfair_DisplayFont.className}`}>Contact Us</h2>
            </div>

            <div className="custom-container padding">
                <div className="mx-20 max-xl:mx-10 max-lg:mx-0">
                    <div className="flex items-center justify-around px-3 py-10 max-lg:py-8 max-sm:py-5 rounded-full bg-[#1f4037]">
                        {
                            arr.map((i) => (
                                <div key={i} className="flex flex-col items-center justify-center gap-3 max-lg:gap-1">
                                    <div className="mb-3 max-lg:mb-0 w-fit h-fit p-3 max-sm:p-2 rounded-full border-2 border-white">
                                        {i.icon}
                                    </div>
                                    <h3 className={`text-3xl max-lg:text-2xl max-sm:text-lg text-white font-medium ${Playfair_DisplayFont.className}`}>{i.title}</h3>
                                    <p className='text-sm max-sm:text-xs text-white'>{i.dcr}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="mt-20 max-lg:mt-10 flex max-lg:flex-col items-center gap-10">
                        <div className="lg:w-1/2">
                            <div className="">
                                <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Realx In Our Hotel</h2>
                                <p className={`my-3 text-gray font-medium ${Playfair_DisplayFont.className}`}>Altair Hotel Headquarters</p>
                                <p className='text-sm text-gray'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolorum pariatur aliquam, fugit asperiores voluptas iure
                                    commodi laudantium omnis dolore quia, ab doloribus
                                    doloremque! Fuga consequatur quibusdam, omnis suscipit harum eius!
                                </p>
                            </div>
                            <div className="mt-5 flex flex-col gap-2">
                                <Accordions />
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
                            <iframe className='w-full min-h-[400px] max-lg:min-h-[300px]' src="https://yandex.uz/map-widget/v1/?l=sat&ll=-114.211469%2C27.438976&z=3" frameborder="1" allowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
