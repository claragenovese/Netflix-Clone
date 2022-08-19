import React from 'react'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { useMovie } from '../Context/MovieContext'

export default function Series() {

  const { moviesCategoriesArr } = useMovie()
  return (
    <>
      <Main render={moviesCategoriesArr}/>
      <Titles render={moviesCategoriesArr}/>
    </>
  )
}
