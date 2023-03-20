import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
const Layoute = () => {
  return (
    <div className='main-wrapper'>
      <Header/>
      <div className='site-wrapper'>
      <Outlet/>
      </div> 
      <Footer/>
    </div>
  )
}

export default Layoute;
