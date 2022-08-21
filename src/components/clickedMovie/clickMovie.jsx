import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useClickedMovie, useListContext } from "../../Context/Context";
import { useAuth } from '../../Context/AuthContext'


const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

const animationVariants = {
    open: { opacity: 1},
    closed: { opacity: 0}
}

export default function ShowMovieInformation({movie}){

    const [isSaved, setIsSaved] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    
    const { removeMovieClicked } = useClickedMovie()
    const { removeSavedMovie, addSavedMovie } = useListContext()

    const movieTitle = movie.title ?? movie.name

    async function saveMovie(){
        setIsSaved(true)
        addSavedMovie(movie)
    }

    const removeFromList = async () => {
        setIsSaved(false)
        removeSavedMovie(movieTitle)
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
                                            onClick={removeFromList}
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
                            <h1 className="click-title">{movieTitle}</h1>
                            <h4 className="click-stats">{movie.release_date?.slice(0,4)}<span>{movie.vote_average}</span> </h4>
                            <p className="click-overview">{movie.overview}</p>
                        </div>
                    </div>
            </motion.div>
        </div>
    )
}