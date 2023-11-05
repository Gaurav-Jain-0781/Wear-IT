import React from 'react'
import Header, { PageHeader } from '../Components/Header/Header'
import Forums from '../Components/Forum/Forums'
import Footer from '../Components/Footer/Footer'

const Forum = () => {
  const pageheader = {
    text : '#igsneakercommunity', 
    desc : 'Get know about various memebers of our sneakers community', 
    sectionclass : 'blog-header'
  }
  return (
    <>
        <Header/>
        <PageHeader pageheader={pageheader}/>
        <Forums/>
        <Footer/>
    </>
  )
}

export default Forum
