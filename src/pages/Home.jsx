import React, { useState } from 'react'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { useMovie } from '../Context/MovieContext'

function Home() {

  const { moviesCategoriesArr } = useMovie()

  return (
    <>
      <Main render={moviesCategoriesArr}/>
      <Titles render={moviesCategoriesArr}/>
    </>
  )
}

export default  Home


