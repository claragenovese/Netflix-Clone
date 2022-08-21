import React from 'react'
import { motion } from 'framer-motion'
import { useClickedMovie, useViewportWidth } from '../../../../Context/Context'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

function EachMovie({item, popularMovieNumber}){

  const viewportWidth = useViewportWidth()

  const {actualizeMovieClicked} = useClickedMovie()

  function displayMovieAndNumber(){
    return(
      <div className='popular-movie-card'>
        { viewportWidth > 780 && popularMovieNumber }
        <LazyLoadImage
          width="100%"
          heigth= "auto"
          className='movie-img'
          src={`${BASE_IMG_URL}${item.poster_path}`} 
        />
      </div>
    )
  }


  function displayMovie(){
    return(
      <div className='img-container'>
        <LazyLoadImage
          width="100%"
          heigth= "auto"
          effect='black-and-white'
          className='movie-img'
          src={`${BASE_IMG_URL}${viewportWidth > 680 ?  item.backdrop_path : item.poster_path}`} 
        />
      </div>
    )
  }

  return(
    <motion.div 
      className={ 'movie-container'} 
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
      onClick={() => actualizeMovieClicked(item)}
    >
      {popularMovieNumber ? displayMovieAndNumber() : displayMovie()}
    </motion.div>
  )
}

export default React.memo(EachMovie)




