import React, {  useState, useEffect, useContext } from "react";
import axios from "axios";
import allUrlsObject from "../api/apiRequests";

const MovieContext = React.createContext()

function MovieContextProvider({children}){
    const [isLoading, setIsLoading] = useState(true)
    const [moviesCategoriesArr, setMoviesCategoriesArr] = useState([])
    const [tvCategoriesArr, setTvCategoriesArr] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

        async function requestApiData(urlsArray){
            let arr = []
            for(let i = 0 ; i < urlsArray.length ; i++){
                const movies = await axios.get(urlsArray[i].url)
                arr.push(
                    {
                        categoryTitle: urlsArray[i].category,
                        allCategoryMovies: movies.data.results, 
                        categoryType: urlsArray[i].type
                    }
                )
            }
            return arr
        }

        async function callApiAndUpdateData(){
            setIsLoading(true)
            const moviesUrlsArray = allUrlsObject.movies
            const tvUrlsArray = allUrlsObject.tvShows
            try{
                const moviesData = await requestApiData(moviesUrlsArray)
                setMoviesCategoriesArr(moviesData)
                const tvShowsData = await requestApiData(tvUrlsArray)
                setTvCategoriesArr(tvShowsData)
            }
            catch(err){
                setError(err)
            }
            finally{
                setTimeout(() => {
                    setIsLoading(false)
                }, [1600])
            }
        }

        callApiAndUpdateData()
        
    }, [])

    return(
        <MovieContext.Provider value={
            {
                isLoading, 
                moviesCategoriesArr, 
                tvCategoriesArr
            }
        }>
            {children}
        </MovieContext.Provider>
    )
}

export function useMovie(){
    return useContext(MovieContext)
}

export {MovieContextProvider}