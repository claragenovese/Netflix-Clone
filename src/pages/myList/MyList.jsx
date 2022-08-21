import React, { useEffect } from 'react'
import EachMovieList from './EachMovieList'
import { useAuth } from '../../Context/AuthContext';
import { useListContext } from '../../Context/Context';

export default function MyList() {
  const { user } = useAuth()
  const { savedMoviesArr, actualizeSavedMoviesArr } = useListContext()

  useEffect(() => {
    actualizeSavedMoviesArr()
  }, [user?.email]);
  
  const movie = savedMoviesArr.map((item, index) => {
    return(
      <EachMovieList 
        key={index} 
        title={item.title} 
        image={item.image}
        index={index}
      />
    )
  })
 
  return (
    <div className='my-list-container'>
      <h1 className='ml-title'>My List</h1>

      { savedMoviesArr[0] ? 
        <div className='ml-movies'>
          {movie}
        </div> 
        : 
        <div className='no-titles-container'>
          <h2 className='no-item'>You haven't added any titles to your list yet</h2>
        </div>
      }
    </div>
  )
}
