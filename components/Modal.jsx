"use client"
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Modal = ({ closeModal, isOpenModal }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpenModal) {
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
        }
    }, [isOpenModal]);

    const handleSubmit = () => {
        gsap.to(modalRef.current, { opacity: 0, y: -50, duration: 0.3, ease: 'power2.in', onComplete: closeModal });
    };

    if (!isOpenModal) return null;

    return (
        <div ref={modalRef} onClick={handleSubmit} className="modal-bg fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-[#4b4d6350]">
            <div onClick={(e) => e.stopPropagation()} className="modal bg-[#7d5a50] text-white p-6 rounded shadow-lg w-96 mx-3">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Оставить заявку</h2>
                    <button onClick={handleSubmit} className="text-white hover:text-gray-300 duration-100">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M12.707 12.707a1 1 0 0 1-1.414 0L10 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L8.586 10 7.293 8.707a1 1 0 0 1 1.414-1.414L10 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L11.414 10l1.293 1.293a1 1 0 0 1 0 1.414z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Имя</label>
                    <input
                        type="text"
                        // value={input1}
                        // onChange={handleInput1Change}
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Фамилия</label>
                    <input
                        type="text"
                        // value={input2}
                        // onChange={handleInput2Change}
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Номер</label>
                    <input
                        type="text"
                        // value={input3}
                        // onChange={handleInput3Change}
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    />
                </div>
                <button
                    className="button w-full"
                    onClick={handleSubmit}
                >
                    Сохранить
                </button>
            </div>
        </div>
    )
}

export default Modal