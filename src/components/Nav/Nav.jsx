import React, { useState, useEffect } from 'react'
import NetflixLogo from './NetflixLogo/NetflixLogo'
import NavMenu from './NavMenu/NavMenu'
import Login from './Login/Login'
import { useViewportWidth } from '../../Context/Context'

export default function Nav() {
  const viewportWidth = useViewportWidth()
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    function changeNavBackground(){
      if(window.scrollY > 10) setIsScroll(true)
      else setIsScroll(false)
    }
    
    window.addEventListener('scroll', changeNavBackground)

    return () => {
      window.removeEventListener('scroll', changeNavBackground)
    }
  })

 
  return (
    <div className={isScroll ? 'nav-container scroll' : 'nav-container'}>
      <NetflixLogo viewportWidth={viewportWidth}/>
      <NavMenu viewportWidth={viewportWidth}/>
      <Login />
    </div>
  )
}
