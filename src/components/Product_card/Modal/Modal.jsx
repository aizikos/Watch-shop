import React from 'react'
import { FaPen } from "react-icons/fa";


const Modal = () => {
  return (
    <>
    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600
         dark:hover:bg-green-700 dark:focus:ring-green-800"><FaPen/></button>
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/45'/>
    <div className="fixed w-[600px] rounded bg-white py-3 px-3 left-[31%] top-[50px]">
        
    </div>

    </>
  )
}


export default Modal