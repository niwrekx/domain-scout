import React from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import SignInPage from './pages/SignInPage'

import { dashboardLink, resultsLink, signInLink } from './constants/navUrl'
import DashboardPage from './pages/DashboardPage'
import ResultsPage from './pages/ResultsPage'
import {DomainProvider} from './context/DomainContext'


const App = () => {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path={signInLink} element={<SignInPage />}/>

        <Route path={dashboardLink} element={<DashboardPage />}/>

        <Route path={`${resultsLink}/:domainName`} element={<ResultsPage />}/>
      </Route>
    )
  )
  return (
    <>
    <DomainProvider>
      <section className=' min-h-screen bg-gradient-to-br from-green-300 from-0% via-sky-500 via-80% to-blue-500 to-100% ]'>
        <RouterProvider router={router}/>
      </section>
   </DomainProvider>
   </>
  )
}

export default App