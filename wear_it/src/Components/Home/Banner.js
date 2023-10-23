import React from 'react'

const Banner = () => {
  return (
    <section id="banner">   
        <h4>Cashback Offers</h4>
        <h2>Up to <span>60% Off </span> with guaranteed Cashback</h2>
        <button className="normal">Explore More</button>
    </section>
  )
}

export const Banner2 = () => {
  return(
    <section id="banner2">
      <div className="first">
        <h4> Crazy Deals </h4>
        <h2> Bug 1 and get vouchers worth 1000 Free</h2>
        <span>Let your legs also enjoy some luxury</span>
        <button>Learn More</button>
      </div>
      <div className="first second">
        <h4> Premium Collection </h4>
        <button>Explore Collection</button>
      </div>
    </section>
  )
}

export default Banner
