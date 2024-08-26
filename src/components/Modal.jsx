import React from 'react'
import { IoClose } from "react-icons/io5";


const Modal = ({onClose, isOpen, children}) => {
    if(!isOpen) return null;

    return (
    <div className='fixed inset-0 z-50 flexCenterAllColumn bg-black bg-opacity-50'>
        <div className='bg-slate-50 w-full max-w-3xl p-4 rounded-md'>
            <div className='flexCenterBetween'>
                <h2 className='text-xl font-semibold'>Domain Name Record</h2>
                <button onClick={onClose}><IoClose className='text-2xl hover:text-sky-600'/></button>
            </div>

            <div className='overflow-y-auto max-h-[80vh]'>
                {children}
            </div>
        
        </div>
     
    </div>
    )
}

export default Modal