import React from 'react'
import { FeatureProducts } from './Data'
import ProductList from './Product-List'

const Product = () => {
  return (
    <section id='product'>
        <h2>Featured Products</h2>
        <p>Sneakers that say who you are!</p>
        <div className="product_container">
          {FeatureProducts.map((product) => {
            return <ProductList key={product.id} product={product}/>
          })}
        </div>
    </section>
  )
}



export default Product
