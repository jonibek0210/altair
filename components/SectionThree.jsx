"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBus } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";

const arr = [
    {
        title: "Трансфер",
        dcr: "Мы предлагаем удобный трансфер от аэропорта или вокзала прямо до нашего отеля и обратно. Насладитесь комфортной поездкой, расслабьтесь и забудьте о заботах – наш профессиональный водитель встретит вас, обеспечит быстрое и безопасное путешествие.",
        icon: <FaBus size={30} color="#fff" />
    },
    {
        title: "Завтрак",
        dcr: "Начните день с изысканного шведского стола в нашем отеле! Насладитесь свежими фруктами, выпечкой и традиционными восточными деликатесами. Широкий выбор горячих и холодных блюд подарит вам заряд энергии для изучения великолепного Самарканда.",
        icon: <MdDinnerDining size={30} color="#fff" />
    },
    {
        title: "Экскурсии",
        dcr: "Наш отель предлагает организацию профессиональных экскурсий по Самарканду и его окрестностям. Откройте для себя исторические и культурные сокровища города с нашими опытными гидами, которые помогут вам максимально насладиться вашим визитом.",
        icon: <FaCameraRetro size={30} color="#fff" />
    },
]

gsap.registerPlugin(ScrollTrigger);
const SectionThree = ({ Playfair_DisplayFont }) => {
    useGSAP(() => {
        gsap.from(".a", {
            x: -40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".as",
                start: "-30% center",
            }
        })
    }, []);

    return (
        <div className="as custom-container grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-16 max-lg:gap-10 padding">
            {
                arr.map((el, index) => (
                    <div key={index} className="a max-sm:px-3 text-white">
                        <div className="border-4 border-white p-3 rounded-full w-fit m-auto">
                            {el.icon}
                        </div>
                        <div className="text-center mt-5 max-md:mt-3">
                            <h3 className={`text-4xl max-lg:text-3xl max-sm:text-2xl font-medium ${Playfair_DisplayFont.className}`}>
                                {el.title}
                            </h3>
                            <p className="mt-3 text-sm leading-5 tracking-[1px]">
                                {el.dcr}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SectionThree
