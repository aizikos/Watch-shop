import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from 'react-redux';

const Header = () => {
  const {basket} = useSelector((s) => s)
  return (
    <div className='header bg-lime-400'>
      <div className="container">
        <div className=" header-menu">
          <h1 className='logo-text'>ShopVerse</h1>
          <div className="menu">
            <Link to={'/'}>About</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/'}>Categories</Link>
            <Link to={'/create'}>Create</Link>
          </div>
          <div className="input_searc">
            <div className="seach">
              <a href="#"><IoSearch /></a>
              <input type="text" placeholder='Search for “Phones”' />
            </div>
            <a href="#" className='fav'><FaRegHeart/></a>
            <Link to={'/basket'} className='bag'>
            {basket.length ? <div className="quantity">{basket.length}</div>:null}
            <FiShoppingBag/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header