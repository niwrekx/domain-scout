import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { dashboardPages } from '../constants/navUrl'

const MainLayout = () => {

  const location = useLocation();
  
  // const isDashboard = location.pathname === dashboardLink
  // const isDashboard = dashboardPages.includes(location.pathname)


  return (
    <div className=''>
        {/* {!isDashboard &&<Navbar />} */}
        <Navbar />
        <Outlet />
        <Footer />
        {/* {!isDashboard && <Footer />} */}
    </div>
  )
}

export default MainLayout