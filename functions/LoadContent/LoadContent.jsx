import React from 'react'
import { motion } from "framer-motion"
import ClipLoader from "react-spinners/ClipLoader";
import {netflixLogo} from '../../src/assets/netflixLogos'

const NETFLIX_LOAD_DURATION = 1.6

const netflixLogoVariants = {
    initial:{
        scale: 0.5, 
        opacity: 0
    },
    animate:{
        scale: 1.1,
        opacity: 1,
        transition: {
            ease: "easeOut", 
            duration: NETFLIX_LOAD_DURATION
        }
    }
}
const clipVariants = {
    initial:{
        opacity: 0
    },
    animate:{
        scale: 2,
        opacity: 1
    }
}

export default function showLoading(isInitialLoading = false){
    const clipDelay = isInitialLoading ? NETFLIX_LOAD_DURATION : 0
    
    return (
      <div className="loading-container">
        {isInitialLoading &&
            <motion.div 
                className="netflix-load"
                variants={netflixLogoVariants}
                initial="initial"
                animate="animate"
            >
                {netflixLogo}
            </motion.div>
        }
        <motion.div  
            className="loader"
            variants={clipVariants}
            initial="initial"
            animate="animate"
            transition={{ ease: "easeOut", duration: 0.2, delay: clipDelay }}
        >
          <ClipLoader color="rgb(219, 38, 38)" size={20}/>
        </motion.div>
      </div>
    )
  }