import React from 'react'
import Header, { PageHeader } from '../Components/Header/Header'
import Product from '../Components/Shop/Product'
import Footer from '../Components/Footer/Footer'

// Style Sheet for Shop Page
import '../Styles/shop_page.css'

const Shop = () => {
  const pageHeader = {
    text : 'sneakerhead', 
    desc : 'Save more with coupons and up to 70% off',
    sectionclass : ''
  }
  
  return (<>
      <Header/>
      <PageHeader pageheader={pageHeader}/>
      <Product/>
      <Footer/>
    </>
  )
}

export default Shop
