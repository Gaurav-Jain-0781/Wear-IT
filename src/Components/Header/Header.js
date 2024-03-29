import React, { useState } from 'react'
import logo from './logo.png'
import { FaCartPlus, FaArrowLeft, FaBars } from 'react-icons/fa'
import { links } from './data'

import {Link} from 'react-router-dom'

const Header = () => {
    const [slider, setSlider] = useState(false);

  return (
    <section id="header">
        <a id="logo" href="index.html"><img src={logo} alt="logo" width="100px"></img></a>
        <div>
            <ul id="navbar" className={slider ? 'active' : null} >
                {links.map((link) => {
                    return <li key={link.id}><Link to={link.url}>{link.text}</Link></li>
                })}
                <a href="#" id="close" onClick={() => setSlider(!slider)}><FaArrowLeft/></a>
            </ul>
        </div>
        <div id="mobile">
            <div className='cart'>
                <Link to='/cart'><FaCartPlus/></Link>
            </div>
            <div className='slider'>
                <FaBars onClick={() => setSlider(!slider)}/>
            </div>
        </div>
    </section>
  )
}

export const PageHeader = ({pageheader}) => {
    const {text, desc, sectionclass} = pageheader
    return <section id="page-header" className={sectionclass}>
        <h2>{text}</h2>
        <p>{desc}</p>
    </section>
}

export default Header
