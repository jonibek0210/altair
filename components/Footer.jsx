import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full bg-[#0E0E0E] text-white'>
            <div className="custom-container flex gap-5 flex-wrap justify-between items-center py-5 max-xl:py-3">
                <div className="">Алтаир 2024 © Все права защищены</div>
                <ul className='flex items-center gap-5'>
                    <li>
                        <Link href={"#"} className='bg-white p-2 max-xl:p-1 rounded-full block'>
                            <FaFacebookF size={20} color='#000' />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className='bg-white p-2 max-xl:p-1 rounded-full block'>
                            <FaInstagram size={20} color='#000' />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className='bg-white p-2 max-xl:p-1 rounded-full block'>
                            <FaTwitter size={20} color='#000' />
                        </Link>
                    </li>
                </ul>
                <div className="">
                    <p>By in DotLabs</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
