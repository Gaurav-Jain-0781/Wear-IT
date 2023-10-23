import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const ProductList = ({product}) => {
  return (
    <div className="pro" key={product.id}>
      <img src={product.url} alt={product.name} />
      <div className='des'>
          <h5>{product.name}</h5>
          <span>{product.desc}</span>
      </div>
      <div className='price'>
        <p>{product.price}</p>
        <button className='cart'>Add to Cart <FaCartPlus/></button>
      </div>      
    </div>
  )
}

export default ProductList
