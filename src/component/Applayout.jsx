import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function Applayout() {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout