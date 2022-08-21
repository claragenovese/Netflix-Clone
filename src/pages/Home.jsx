import React, { useEffect } from 'react'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { useMovie } from '../Context/MovieContext'

function Home() {

  const { moviesCategoriesArr, acualiceData } = useMovie()

  // useEffect(() => {
  //   console.log("hola")
  //   acualiceData("movies")
  // }, [])

  return (
    <>
      <Main render={moviesCategoriesArr}/>
      <Titles render={moviesCategoriesArr}/>
    </>
  )
}

export default  Home