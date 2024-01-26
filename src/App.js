import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Forum from './Pages/Forum'
import About from './Pages/About'
import Cart from './Pages/Cart'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/forum' element={<Forum/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  </Router>
  )
}

export default App 
