import React from 'react'

const Modal = () => {
    return (
        <div className='modal-bg w-full h-screen fixed top-0 left-0 flex items-center justify-center z-50 backdrop-blur bg-black/30'>
            <form className="modal max-w-lg flex flex-col rounded-xl bg-green-900">
                <label>
                    <p>Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Modal
