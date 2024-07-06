import React from 'react'
import './navbar.css'
import navbarLogo from '../../assets/Аннотация 2024-07-01 220219.png'
import { CiMenuFries, CiSearch, CiUser, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { CiCreditCard2 } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-wrapper'>

        <div className="navbar">
          <div className='navbar-logo-collection-wrapper'>
            <Link to={"/"} className='navbar-logo-link' href="">
              <img className='navbar-logo-img' src={navbarLogo} alt="" />
            </Link>
            <button className='navbar-menu-btn' >
              <CiMenuFries />
              <span>Katalog</span>
            </button>
          </div>
          <div className='navbar-search'>
            <input type="text" placeholder='search' />
            <button>Qidirish</button>
          </div>
          <div className='navbar-collection'>
            <Link to={"/"} className='navbar-collection-item navbar-collection-home'>
              <IoHomeOutline />
              <span>Kirish</span>
            </Link>
            <Link to={"taqqoslash"} className='navbar-collection-item'>
              <p><LiaBalanceScaleSolid /></p>
              <span>Taqqoslash</span>
            </Link>
            <Link to={""} className='navbar-collection-item'>
              <p><CiCreditCard2 /></p>
              <span>Tolov</span>
            </Link>
            <Link to={""} className='navbar-collection-item'>
              <p><FaCarSide /> </p>
              <span>Trek</span>
            </Link>
            <Link to={'card'} className='navbar-collection-item'>
              <p><CiShoppingBasket /></p>
              <span>Savat</span>
            </Link>
            <Link to={'like'} className='navbar-collection-item'>
              <p> <CiHeart /></p>
              <span>Saralanagan</span>
            </Link>
            <Link to={"form"} className='navbar-collection-item'>
             <p> < CiUser/></p>
              <span>Kirish</span>
            </Link>
          </div>
        </div>
    
    </div>
  )
}
export default Navbar