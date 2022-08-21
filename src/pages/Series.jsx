import React, {useEffect} from 'react'
import showLoading from '../../functions/LoadContent/LoadContent'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { useMovie } from '../Context/MovieContext'

export default function Series() {

  const { tvCategoriesArr, acualiceData, loadSeries } = useMovie()

   useEffect(() => {
    acualiceData("shows")
  }, [])


  return (
    <>
    {!loadSeries ?  
      <>
        <Main render={tvCategoriesArr}/>
        <Titles render={tvCategoriesArr}/>
      </>
      :
      showLoading()
    }
    </>
  )
}
