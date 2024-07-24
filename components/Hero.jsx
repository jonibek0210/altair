"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Modal from './Modal'

const Hero = ({ Playfair_DisplayFont }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    useGSAP(() => {
        gsap.from(".animated", {
            x: -40,
            opacity: 0,
            stagger: .2,
            duration: 1
        })
        gsap.from(".hero-img", {
            x: 40,
            opacity: 0,
            duration: 1
        })
    }, []);

    return (
        <>
            <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
            <div className="bg-[#c9aa7e]">
                <div className='hero custom-container flex gap-5 items-center justify-between padding'>
                    <div className="w-1/2 max-lg:w-3/5 max-md:w-full">
                        <p className={`animated tracking-[4px] text-white ${Playfair_DisplayFont.className}`}>ДОБРО ПОЖАЛОВАТЬ В</p>
                        <h2 className={`animated text-4xl max-xs:text-4xl font-medium mb-3 text-white ${Playfair_DisplayFont.className}`}>Старинный стиль, современные удобства</h2>
                        <div className="max-h-[250px] my-2 rounded-xl overflow-hidden md:hidden">
                            <Image
                                className='w-full h-full object-cover object-center -translate-y-48'
                                width={1000}
                                height={1000}
                                src={"/images/image-2.png"}
                                alt='image'
                            /></div>
                        <p className='animated text-sm text-white'>Искусство Роскоши и Комфорта: Погружение в Удивительный Мир Роскошного Отеля, Где Каждая Деталь Совершенствуется для Максимального Комфорта и Удовольствия Гостей. Откройте Двери в Роскошь, Где Расположение, Обслуживание и Удобства Сливаются в Идеальное Гостеприимство.</p>
                        <button onClick={openModal} className='animated button mt-5'>Оставить заявку</button>
                    </div>
                    <div className="hero-img w-1/2 max-md:hidden max-w-[400px] max-h-[400px] max-xl:max-w-[350px] max-xl:max-h-[350px] max-lg:max-w-[280px] max-lg:max-h-[280px] rounded-tl-[250px] max-lg:rounded-tl-[200px] overflow-hidden">
                        <Image
                            className='w-full h-full object-cover object-bottom -translate-y-10'
                            width={1000}
                            height={1000}
                            src={"/images/image-2.png"}
                            alt='image'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
