import React from 'react'
import './style.css'
import logo from './logo.png'

const Header = () => {
  return (
    <section id='header'>
      <a id="logo" href="index.html"><img src={logo} alt="logo" width="100px"/></a>
        <div>
            <ul id="navbar">
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="html/shop.html">Shop</a></li>
                <li><a href="html/forum.html">Forum</a></li>
                <li><a href="html/about.html">About</a></li>
                <li id="shopping-bag"><a href="html/cart.html"><i className="fa-solid fa-cart-shopping"></i></a></li>
                <a href="#" id="close"><i className="fa-solid fa-arrow-left"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <a href="html/cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
            <i id="bar" className="fa-solid fa-sliders"></i>
        </div>
    </section>
  )
}

export default Header
