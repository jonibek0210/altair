"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
const SectioneEight = ({ Playfair_DisplayFont }) => {

    useGSAP(() => {
        gsap.from(".eight-sec-title ", {
            y: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".eight-sec",
                start: "-30% center",
            }
        })
    }, [])

    return (
        <div className="eight-sec custom-container padding flex gap-5 max-lg:flex-col lg:items-center justify-between">
            <div className="max-w-4xl max-xl:max-w-3xl text-white">
                <h2 className={`eight-sec-title text-5xl max-xl:text-4xl max-lg:text-3xl font-medium ${Playfair_DisplayFont.className}`}>Запечатлейте каждый момент вместе с нами</h2>
                <hr className="eight-sec-title line bg-white" />
                <p className="eight-sec-title tracking-[2px] max-sm:text-sm">
                    Зафиксируйте каждый ценный момент вместе с нами: наши уникальные услуги и гостеприимная атмосфера помогут создать воспоминания, которые вы будете хранить долгие годы.
                </p>
            </div>
            <div className="">
                <button className="eight-sec-title button">Контакты</button>
            </div>
        </div>
    )
}

export default SectioneEight
