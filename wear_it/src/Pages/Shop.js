import React from 'react'
import Header from '../Components/Header/Header'
import PageHeader from '../Components/Shop/Page-Header'
import Product from '../Components/Shop/Product'
import Footer from '../Components/Footer/Footer'

// Style Sheet for Shop Page
import '../Styles/shop_page.css'

const Shop = () => {
  return (
    <div>
      <Header/>
      <PageHeader/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Shop
