import React from 'react'
import { netflixLogo, netflixMobileLogo } from '../../../assets/netflixLogos'
import { motion } from 'framer-motion'

export default function NetflixLogo({viewportWidth}) {
  return (
    <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.5}}
    >
      {viewportWidth > 900 ? netflixLogo : netflixMobileLogo}
    </motion.div>
  )
}
