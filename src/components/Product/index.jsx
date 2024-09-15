import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Product_card'
import BAG from '../../assets/404 error.png'

const Product = () => {

  const { product } = useSelector((s) => s)

  return (
    <div className='mt-[50px]'>
      {
        product.length?<div className="container">
        <div className="flex items-center flex-wrap gap-[40px]">
          {
            product.map((el) => <ProductCard el={el} />)
          }
        </div>
      </div>:
        <div className="flex items-center justify-center">
          <img src={BAG} alt="" />
        </div>
      }
    </div>
  )
}


export default Product