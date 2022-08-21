import React, {  useState, useEffect, useContext } from "react";
import axios from "axios";
import allUrlsObject from "../api/apiRequests";

const MovieContext = React.createContext()

function MovieContextProvider({children}){
    const [isLoading, setIsLoading] = useState(true)
    const [moviesCategoriesArr, setMoviesCategoriesArr] = useState([])
    const [tvCategoriesArr, setTvCategoriesArr] = useState([])
    const [error, setError] = useState(null)

    // useEffect(() => {

    //     async function requestApiData(urlsArray){
    //         let arr = []
    //         for(let i = 0 ; i < urlsArray.length ; i++){
    //             const movies = await axios.get(urlsArray[i].url)
    //             arr.push(
    //                 {
    //                     categoryTitle: urlsArray[i].category,
    //                     allCategoryMovies: movies.data.results, 
    //                     categoryType: urlsArray[i].type
    //                 }
    //             )
    //         }
    //         return arr
    //     }

    //     async function callApiAndUpdateData(){
    //         setIsLoading(true)
    //         const moviesUrlsArray = allUrlsObject.movies
    //         const tvUrlsArray = allUrlsObject.tvShows
    //         try{
    //             const moviesData = await requestApiData(moviesUrlsArray)
    //             setMoviesCategoriesArr(moviesData)
    //             const tvShowsData = await requestApiData(tvUrlsArray)
    //             setTvCategoriesArr(tvShowsData)
    //         }
    //         catch(err){
    //             setError(err)
    //         }
    //         finally{
    //             setIsLoading(false)
    //         }
    //     }

    //     callApiAndUpdateData()
        
    // }, [])

    const [dataType, setDataType] = useState("movies")
    const [loadSeries, setLoadSeries] = useState(true)

    function acualiceData(data){
        setDataType(data)
    }
    
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

        async function callApiAndSetMovies(){
            const moviesUrlsArray = allUrlsObject.movies
            try{
                const moviesData = await requestApiData(moviesUrlsArray)
                setMoviesCategoriesArr(moviesData)
            }
            catch(err){
                setError(err)
            }
            finally{
                setIsLoading(false)
            }
        }
        async function callApiAndSetShows(){
            setLoadSeries(true)
            console.log("atroden")
            const tvUrlsArray = allUrlsObject.tvShows
            try{
                const tvShowsData = await requestApiData(tvUrlsArray)
                setTvCategoriesArr(tvShowsData)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoadSeries(false)
            }
        }
        
        callApiAndSetMovies()
        if(dataType === "shows") callApiAndSetShows()
    }, [dataType])

    console.log(tvCategoriesArr)
        
    return(
        <MovieContext.Provider value={
            {
                isLoading, 
                loadSeries,
                acualiceData,
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