import React, { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/modal';
import { FaPen } from "react-icons/fa";


const ProductCard = ({ el }) => {
  const { product } = useSelector((s) => s)
  const dispatch = useDispatch()
  const { basket } = useSelector((s) => s)
  const [edit,setEdit] = useState(false)
  const [newValue,setNewValue] = useState('')

  // function added(){
  //   toast.success('🦄 Добавленно!', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //     });
  // }

  // const NewValue = (e) => {
  //   setNewValue(e.target.value)
  // }
  
  // const upDateValue = (id,newPrice) => {

  // }

  function Delete(item) {
    dispatch({ type: "DELETE", payload: item })
    console.log(item);
    
  }
  function Buy_product(item) {
    dispatch({ type: "BASKET_PRODUCT", payload: item })
    added()
  }
  return (
    <div className='w-[250px] h-450px border-2 border-rose-500 relative'>
      <div className="my-5 flex items-center justify-center flex-col gap-[20px]">
        <div className="w-[90%] flex justify-between">
        <button type="button"  
         class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600
         dark:hover:bg-green-700 dark:focus:ring-green-800"><FaPen/></button>
        <button onClick={() => Delete(el)} type="button" class="focus:outline-none text-white bg-red-700
         hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 absolute top-[8px] right-0 ">X</button>
        </div>
        <Zoom> <img src={el.img} alt="" className='w-[150px]' /></Zoom>
        <h1 className='text-2xl italic font-serif'>{el.name}</h1>
        <h3>{el.raiting}</h3>
        {
          edit?(<input defaultValue={el.price} type="text" className='bg-slate-500'/>)
          :(<h5 className='text-2xl font-bold' >{el.price}$</h5>)
        }
        
        
        <div className="">
          <button
            onClick={() => Buy_product(el)}
            type="button"
            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            BUY PRODUCT
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}


export default ProductCard