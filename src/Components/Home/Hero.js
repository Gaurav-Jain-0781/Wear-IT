import React from 'react'
import backgroundImage from '../../images/people/pp3.png'
import buttonImage from '../../images/shop_now.jpg'

const Hero = () => {
  return (
    <section id='hero' style={{backgroundImage: `url(${backgroundImage})`}}>
      <h4>Real-time-offers</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons and up to 70% off</p>
      <button style={{backgroundImage: `url(${buttonImage})`}}>
        Shop Now
      </button>
    </section>
  )
}

export default Hero
