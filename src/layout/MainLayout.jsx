import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { dashboardPages } from '../constants/navUrl'

const MainLayout = () => {

  const location = useLocation();
  



  return (
    <div className=''>
     
        <Navbar />
        <Outlet />
        <Footer />

    </div>
  )
}

export default MainLayout