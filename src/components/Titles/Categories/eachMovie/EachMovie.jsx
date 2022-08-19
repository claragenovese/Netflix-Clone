import React from 'react'
import { motion } from 'framer-motion'
import { useClickedMovie, useViewportWidth } from '../../../../Context/Context'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

function EachMovie({item, position}){

  const viewportWidth = useViewportWidth()

  const {actualizeMovieClicked} = useClickedMovie()

  function displayPopularMovies(){
    return(
      <div className='popular-movie-card'>
        { viewportWidth > 780 && position }
        <img className='movie-img' src={`${BASE_IMG_URL}${item.poster_path}`} />
      </div>
    )
  }


  function displayMovies(){
    return(
      <div className='img-container'>
        <img 
          className='movie-img' 
          src={`${BASE_IMG_URL}${viewportWidth > 680 ?  item.backdrop_path : item.poster_path}`} 
        />
      </div>
    )
  }

  return(
    <motion.div 
      className={position && 'movie-container'} 
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
      onClick={() => actualizeMovieClicked(item)}
    >
      {position ? displayPopularMovies() : displayMovies()}
    </motion.div>
  )
}

export default React.memo(EachMovie)




