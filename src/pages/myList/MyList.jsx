import React from 'react'
import { useListContext } from '../../Context/Context'
import EachMovieList from './EachMovieList'

export default function MyList() {
  const {savedMovies} = useListContext()

  const movie = savedMovies.map((item, index) => {
    return(
      <EachMovieList 
        key={index} 
        item={item} 
        index={index}
      />
    )
  })

  return (
    <div className='my-list-container'>
      <h1 className='ml-title'>My List</h1>
      { savedMovies[0] ? 
      <div className='ml-movies'>
        {movie}
      </div> : 
      <div className='no-titles-container'>
        <h2 className='no-item'>You haven´t added any titles to your list yet</h2>
      </div>
    }
      
    </div>
  )
}
