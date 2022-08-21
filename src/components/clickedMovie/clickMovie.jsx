import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsPlayFill, BsCheckLg } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Context } from "../../Context/Context";
import { useAuth } from '../../Context/AuthContext'
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore"; 


const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

const animationVariants = {
    open: { opacity: 1},
    closed: { opacity: 0}
}

export default function ShowMovieInformation({movie}){

    const [isSaved, setIsSaved] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    
    const {user} = useAuth()
    const {addToMyList, removeFromList, actualizeMovieClicked, removeMovieClicked} = useContext(Context)

    async function saveMovie(){
        if(user?.email) {
          setIsSaved(prev => !prev)
          addToMyList(movie)

          await updateDoc(doc(db, 'users', `${user?.email}`), {
            savedMovies: arrayUnion({
                title: movie.name ?? movie.title,
                image: movie.poster_path
            })
          })
        }
        else{
          alert("Please, log in to save movie")
        }
      }
    
    function removeMovie(){
        setIsSaved(false)
        removeFromList(movie)
    }

    function handleClose(){
        removeMovieClicked()
        setIsOpen(false)
    }
    
    return(
        <div className="prove">
            <motion.div 
                className="click-container"
                initial={{opacity: 0}}
                animate={isOpen ? "open" : "closed"}
                variants={animationVariants}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.1 }}>
                    <div className="click-info-container">
                        <AiFillCloseCircle 
                            className="close-icon" 
                            onClick={handleClose}
                        />
                        <img className="click-img" src={`${BASE_IMG_URL}${movie.backdrop_path}`}/>
                        <div className="click-info">
                            <div className="click-icons-container">
                                <div className='plus-icon'>
                                    {isSaved ? 
                                        <BiCheck 
                                            className='icon save'
                                            onClick={removeMovie}
                                        />
                                    : 
                                        <AiOutlinePlus 
                                            className='icon'
                                            onClick={saveMovie}/>}
                                </div>
                                <Link to="watchMovie">
                                    <div 
                                        className='info-icon'
                                        onClick={handleClose}
                                    > 
                                        <BsPlayFill className='icon play'/>
                                    </div>
                                </Link> 
                            </div>
                            <h1 className="click-title">{movie.title ?? movie.name}</h1>
                            <h4 className="click-stats">{movie.release_date?.slice(0,4)}<span>{movie.vote_average}</span> </h4>
                            <p className="click-overview">{movie.overview}</p>
                        </div>
                    </div>
            </motion.div>
        </div>
    )
}