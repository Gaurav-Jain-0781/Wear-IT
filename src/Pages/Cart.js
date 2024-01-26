import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import CartComponent, { CartTotal } from '../Components/Cart/Cart'

import '../Styles/cart.css'

const Cart = () => {
    return (
    <>
      <Header/>
      <CartComponent/>
      <CartTotal/>
      <Footer/>
    </>
    )
}

export default Cart
