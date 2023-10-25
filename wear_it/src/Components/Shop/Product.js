import React, { useEffect, useState } from 'react'
import ProductList from '../Home/Product-List'
import { Products } from './Data'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Product = () => {
  const [page, setPage] = useState(1)
  const productsPerPage = 10;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  useEffect(() => {    
    const buttons = document.querySelectorAll('#pagination button')

    buttons.forEach((button) => {
      const pagebutton = parseInt(button.textContent)

      if(pagebutton ===  page){
        button.classList.add('active')
      }
      else{
        button.classList.remove('active')
      }
    })
  }, [page])

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
        <button onClick={() => setPage(page-1)}><FaArrowLeft/></button>
        {Array
        .from({length : Math.ceil(Products.length / productsPerPage)})
        .fill(null)
        .map((_, i) => {
          return <button key={i} onClick={(e) => setPage(parseInt(e.target.textContent))}>{i+1}</button>
        })} 
        <button onClick={() => setPage(page+1)}><FaArrowRight/></button>
    </section>
    </>
  )
}

export default Product
