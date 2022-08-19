import React from 'react'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { useMovie } from '../Context/MovieContext'

export default function Series() {

  const { tvCategoriesArr } = useMovie()

  return (
    <>
      <Main render={tvCategoriesArr}/>
      <Titles render={tvCategoriesArr}/>
    </>
  )
}
