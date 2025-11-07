import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import CourseApplicants from '../pages/CourseApplicants'
import ApplicantDetail from '../components/ApplicantDetail'

import NavBar from '../components/nav_bar'
import logo from '../assets/logo.png'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layoutbrand'>
          <img src={logo} alt='USM logo' className='layoutlogo' />
          <h1 className='layouttitle'>PAU-Profesor</h1>
        </div>
        <NavBar />
        <div className='layoutpage'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/course/:courseId' element={<CourseApplicants />} />
            <Route path='/applicant/:id' element={<ApplicantDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout