import React from 'react'

const ProductList = () => {
  return (
    <div class="pro">
        <img src="images/product/pd32.png" alt="product_1" />
        <div class="des">
            <span>Nike Women Dunk Low</span>
            <h5>White &amp Volt</h5>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <h3>Find Your Color : </h3>
            <button class="colour"></button>
            <button class="colour2"></button>
        </div>
        <a href="#"><i class="fa-solid fa-shopping-cart cart"></i></a>
    </div>
  )
}

export default ProductList
