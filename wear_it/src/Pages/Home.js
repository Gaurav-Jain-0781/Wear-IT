import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Home/Hero'
import Feature from '../Components/Home/Feature'
import FeatureProduct, { Product } from '../Components/Home/Product'
import Banner, { Banner2 } from '../Components/Home/Banner'
import Footer from '../Components/Footer/Footer'

//importing Home Page CSS
import '../Styles/style.css'
import '../Styles/index_hero.css'
import '../Styles/index_product.css'
import '../Styles/index_banner.css'
import '../Styles/index_footer.css'
import '../Styles/index_signup.css'

const Home = () => {
  return <>
    <Header/>
    <Hero/>
    <Feature/>
    <FeatureProduct/>
    <Banner/>
    <Product/>
    <Banner2/>
    <Footer/>
  </>
}

export default Home
