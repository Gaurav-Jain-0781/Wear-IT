import React, { useState } from 'react'
import ProductList from '../Home/Product-List'
import { Products } from './Data'
import { FaArrowRight } from 'react-icons/fa'

const Product = () => {
  const [page, setPage] = useState(1)
  const productsPerPage = 10;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return (
    <>
      <section id="product">
        <div className="product_container">
            {Products.slice(startIndex, endIndex).map((product) => {
              return <ProductList key={product.id} product={product}/>
            })}
        </div>
      </section>
      <section id="pagination" className="indexing">
        <button onClick={(e) => setPage(parseInt(e.target.textContent))}> 1 </button>
        <button onClick={(e) => setPage(parseInt(e.target.textContent))}> 2 </button>
        <button onClick={() => setPage(page+1)}><FaArrowRight/></button>
    </section>
    </>
  )
}

export default Product
