import React from 'react'
import Contact, { Video, Forms } from '../Components/About/Contact'
import Footer, { Notifications } from '../Components/Footer/Footer'
import Header, { PageHeader } from '../Components/Header/Header'

import '../Styles/about.css'

const About = () => {
    const pageHeader = {
        text : "#Let's_Connect", 
        desc : 'Website without visitors is like a ship lost in the horizon.', 
        sectionclass : 'about-header'
    }

  return ( <>      
        <Header/>
        <PageHeader pageheader={pageHeader}/>
        <Video/>
        <Contact/>
        <Forms/>
        <Notifications/>
        <Footer/>
    </>
  )
}

export default About
