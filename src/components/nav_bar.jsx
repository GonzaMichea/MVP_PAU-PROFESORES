import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { COURSES } from '../data/courses'

export const NavBar = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  
  // Detectar si estamos en la página de un curso
  const courseId = pathSegments[1] === 'course' ? pathSegments[2] : null
  const course = courseId ? COURSES[courseId] : null

  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>
      {course && (
        <>
          <span className='nav-bar__separator'> / </span>
          <span className='nav-bar__current'>{course.id} - {course.name}</span>
        </>
      )}
    </nav>
  )
}
 
export default NavBar
