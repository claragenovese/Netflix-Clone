import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { animationDelay } from '../../assets/delay'

export default function WatchMovie() {
  
  const [isBtnClicked, setIsBtnClicked] = useState(false)

  function handleClick(){
    setIsBtnClicked(true)
    window.setTimeout(() => {
      window.location.href = 'https://wa.link/k5c5kz'
    }, 10000)
  }

  return (
    <motion.div 
      className='watch-movie-container'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.3, delay: animationDelay.nav}}
      >
        <div className='explanation'>
          <h1 className='play-title'>Bad News!</h1>
          <p className='play-ph'>This page it's just a clone so this feature isn't availablev yet, but  
            <span><a className='netflix-a' href='https://www.netflix.com/browse'> here</a></span> is the link for the real page!
          </p>  
          <p>I hope you have fun and <span>PLEASE</span> do not click the button below.</p>
        </div>
        
        { 
          isBtnClicked ?
          <div className='blur-words-container'>
            <div className='word'>Oh no...</div>
            <div className='word'>Now</div>
            <div className='word'>You Can't</div>
            <div className='word'>Regret.</div>
          </div> :
          <a className='btn' href='#' onClick={handleClick}>
            <span>DON'T CLICK ME!</span>
          </a>
         }
    </motion.div>
  )
}
