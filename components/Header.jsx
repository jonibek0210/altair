"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header className='w-full bg-[#0E0E0E] text-white fixed z-50'>
            <div className="custom-container flex justify-between items-center py-5 max-xl:py-3">
                <div className="">
                    <Link href={"/"}>
                        <h1 className='text-2xl font-semibold'>ALTAIR</h1>
                    </Link>
                </div>
                <nav className={`${openModal ? "block" : "max-md:hidden"} block max-md:fixed max-md:top-14 max-md:left-0 max-md:h-screen max-md:w-full max-md:bg-[#0E0E0E] max-lg:z-[-1]`}>
                    <ul className='flex max-md:flex-col md:items-center justify-between gap-5 max-md:gap-3 px-5 max-md:pt-5'>
                        <li>
                            <Link onClick={() => setOpenModal(false)} href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenModal(false)} href={"#"}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenModal(false)} href={"/contacts"}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenModal(false)} href={"#"}>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="max-md:block hidden h-fit">
                    <button onClick={() => setOpenModal(!openModal)}>
                        {
                            openModal ?
                                <IoCloseSharp size={25} color='#fff' />
                                :
                                <GiHamburgerMenu size={25} color='#fff' />
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
