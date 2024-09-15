import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <div className='header'>
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
            <Link to={'/basket'} className='bag'><FiShoppingBag/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header