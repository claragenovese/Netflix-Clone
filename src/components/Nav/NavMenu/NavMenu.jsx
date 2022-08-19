import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoIosPlay} from 'react-icons/io'
import {motion} from 'framer-motion'

export default function NavMenu({viewportWidth}) {
  
  const [isMenuDisplay, setIsMenuDisplay] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.div 
      className={isClicked ? 'nav-menu clicked' : 'nav-menu'}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.8}}
      onClick={() => setIsClicked(prev => !prev)}
    >
      { 
        viewportWidth < 850 &&
        <div 
          className='collapse-container'
          onClick={()=>setIsMenuDisplay(prev => !prev)} 
        >
          <h2>Browse
          <span>
            <IoIosPlay className='collapse-icon'/>
          </span></h2>
        </div>
      }
      <ul 
        className={ isMenuDisplay ? 'nav-ul display-collapse-menu' : 'nav-ul'}
      >
        <Link to="/"><li className='nav-li'>Home</li></Link>
        <Link to="/shows"><li className='nav-li'>TV Shows</li></Link>
        <Link to="/movies"><li className='nav-li'>Movies</li></Link>
        <Link to="/my_list"><li className='nav-li'>My List</li></Link>
      </ul>
    </motion.div>
  )
}

// When refactoring i can map this