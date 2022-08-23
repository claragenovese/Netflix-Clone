import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

const CHANGES_INFORMATION_URL = "https://github.com/claragenovese/Netflix-Clone-optimized-/blob/main/README.md"
const OLD_VERSION_URL = "https://github.com/claragenovese/Netflix-Clone-optimized-/blob/main/README.md"

export default function Announcement({setShowAnnoun}) {
  return (
    <motion.div className='announ-container'>
        <motion.div 
            className='announ-info-container'
            initial={{scale: 0.7, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration:0.3, delay: 0.5}} 
            exit={{scale: 0.7, opacity: 0, transition:{duration: 0.2, delay: 0}}}   
        >
            <AiFillCloseCircle 
                className="announ-close-icon" 
                onClick={()=>setShowAnnoun(false)}
            />
            <h2>Hey there!</h2>
            <p>This is an optimized version of a project I already made. You can read about the changes <a href={CHANGES_INFORMATION_URL}>here</a>, and look at the old version <a href={OLD_VERSION_URL}>here</a> to see the differencies!</p>
            <p>Thanks for read.</p>
            <p>I hope you have an amazing experience, and please let me know if there's anything you think I can make better.</p>
            <p>Clara.</p>
        </motion.div>
    </motion.div>
  )
}
