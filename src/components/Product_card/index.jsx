import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux'

const ProductCard = ({ el }) => {
  const {product} = useSelector((s) => s)
  const dispatch = useDispatch()
  function Delete(item){
    dispatch({type:"DELETE",payload:item})
  }
  return (
    <div className='w-[250px] h-450px border-2 border-rose-500 relative'>
      <div className="my-5 flex items-center justify-center flex-col gap-[20px]">
        <button onClick={() => Delete(el)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 absolute top-[8px] right-0 ">X</button>
        <Zoom> <img src={el.img} alt="" className='w-[150px]' /></Zoom>
        <h1 className='text-2xl italic font-serif'>{el.name}</h1>
        <h3>{el.raiting}</h3>
        <h5 className='text-2xl font-bold' >{el.price}$</h5>
        <div className="">
          <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">BUY PRODUCT</button>
        </div>
      </div>
    </div>
  )
}


export default ProductCard