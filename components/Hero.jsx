import Image from 'next/image'
import React from 'react'
// f8f4eb
const Hero = ({ Playfair_DisplayFont }) => {
    return (
        <div className="bg-[#1f4037]">
            <div className='custom-container flex gap-5 items-center justify-between padding'>
                <div className="w-1/2 max-lg:w-3/5 max-md:w-full">
                    <p className={`tracking-[4px] text-white ${Playfair_DisplayFont.className}`}>WELCOME TO</p>
                    <h2 className={`text-7xl max-2xl:text-6xl max-xl:text-5xl max-xs:text-4xl font-medium mb-3 text-white ${Playfair_DisplayFont.className}`}>Amazing Deluxe Hoteland Resort</h2>
                    <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam totam dicta est nostrum, quisquam officia enim ullam illum aspernatur eius quasi fugiat. Dolore quaerat doloribus ipsum expedita repellendus quisquam quam. Hic consectetur recusandae voluptate?</p>
                    <button className='button mt-5'>Reserved Now</button>
                </div>
                <div className="w-1/2 max-md:hidden max-w-[400px] max-h-[400px] max-xl:max-w-[350px] max-xl:max-h-[350px] max-lg:max-w-[280px] max-lg:max-h-[280px] rounded-tl-[250px] max-lg:rounded-tl-[200px] overflow-hidden">
                    <Image
                        className='w-full h-full object-cover object-bottom -translate-y-10'
                        width={1000}
                        height={1000}
                        src={"/images/image-1.png"}
                        alt='image'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
