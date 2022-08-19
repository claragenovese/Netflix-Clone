import React, { useContext, useMemo } from 'react'
import { BsTriangleFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { motion } from 'framer-motion'
import { animationDelay } from '../../assets/delay'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

function Main({render: allCategoriesArray}) {

    const { actualizeMovieClicked } = useContext(Context)

    const popularMoviesData = allCategoriesArray[0].allCategoryMovies

    const randomPosition = useMemo(() => Math.floor(Math.random() * 10), [])

    const randomMovie = popularMoviesData[randomPosition]

 
    return (
        <main className='main-container'>
            <motion.div 
                className='main-background'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ ease: "easeOut", duration: 0.3, delay: animationDelay.nav}}
            >
                <img 
                    className='main-bkg-img'
                    src={`${BASE_IMG_URL}${randomMovie.backdrop_path}`} 
                    alt={randomMovie.title} />
            </motion.div>
            <motion.div 
                className='main-content'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ ease: "easeOut", duration: 0.3, delay: 1}}
            >
                <h1 className='main-title'>{randomMovie.title  ?? randomMovie.name}</h1>
                <h3 className='position'>N° {randomPosition + 1} on today's movies</h3>
                <div className='main-btns'>
                    <Link to="/watchMovie"><button className='play-btn'><span><BsTriangleFill className='play-icon'/></span>Play</button></Link> 
                    <button 
                        className='info-btn'
                        onClick={() => actualizeMovieClicked(randomMovie)}
                    >
                        <span><AiOutlineInfoCircle className='info-icon' /></span>
                        More Info
                    </button>
                </div>
            </motion.div>
            <div className='layers'>
                <div className='vertical'></div>
                <div className='horizontal'></div>
            </div>
        </main>
    )
}

export default React.memo(Main)