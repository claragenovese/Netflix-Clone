import React, {  useState, useEffect, useContext } from "react";

const Context = React.createContext()

function ContextProvider({children}){

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
          setViewportWidth(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    })


    
    const [newMovieClicked, setNewMovieClicked] = useState(null)

    function actualizeMovieClicked(movieClicked) {
        setNewMovieClicked(movieClicked)
    }

    function removeMovieClicked(){
        setTimeout(()=> { 
            setNewMovieClicked(null)
        },[500]) //await the  close animation finish
    }


    
    const [savedMovies, setSavedMovies] = useState([])
    
    function addToMyList(item){
        const newMovie ={
            title: item.name ?? item.title,
            backdrop_path: item.poster_path
        }
        setSavedMovies(prevArray => ([...prevArray, newMovie]))
    }

    function removeFromList(item){
        let oldArray = savedMovies
        const newArray = oldArray.filter(movie => movie.title !== item.title) 
        setSavedMovies(newArray)
    }

    return(
        <Context.Provider value={
            {
                savedMovies, addToMyList, removeFromList, 
                newMovieClicked, actualizeMovieClicked, removeMovieClicked,
                viewportWidth
            }
        }>
            {children}
        </Context.Provider>
    )
}

    
export function useListContext(){
    const {savedMovies, addToMyList, removeFromList} = useContext(Context)
    const object = {savedMovies, addToMyList, removeFromList}
    return object
}

export function useViewportWidth(){
    const { viewportWidth } = useContext(Context)
    return viewportWidth
}

export function useClickedMovie(){
    const {newMovieClicked, actualizeMovieClicked, removeMovieClicked} = useContext(Context)
    const object = {newMovieClicked, actualizeMovieClicked, removeMovieClicked}
    return object
}

export {ContextProvider, Context}