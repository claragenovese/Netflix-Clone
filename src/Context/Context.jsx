import React, {  useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";
import { db } from '../firebase';
import { doc, onSnapshot, arrayUnion, updateDoc } from 'firebase/firestore';

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


    const [savedMoviesArr, setSavedMoviesArr] = useState([])
    const { user } = useAuth()

    const addSavedMovie = async (savedMovie) => {
        if(user?.email) {
          await updateDoc(doc(db, 'users', `${user?.email}`), {
            savedMovies: arrayUnion({
                title: savedMovie.name ?? savedMovie.title,
                image: savedMovie.poster_path
            })
          })
        }
        else{
          alert("Please, log in to save movie")
        }
    }

    const removeSavedMovie = async (removedMovieTitle) => {
        try {
            const newArray = savedMoviesArr.filter(eachMovie => eachMovie.title !== removedMovieTitle) 
            await updateDoc(doc(db, 'users', `${user?.email}`), {
                savedMovies: newArray
            })
        } catch (error) {
            console.log(error)
        }
    }

    const actualizeSavedMoviesArr = () => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setSavedMoviesArr(doc.data()?.savedMovies);
        });
    }


    return(
        <Context.Provider value={
            {
                addSavedMovie, removeSavedMovie, actualizeSavedMoviesArr, savedMoviesArr,
                newMovieClicked, actualizeMovieClicked, removeMovieClicked,
                viewportWidth
            }
        }>
            {children}
        </Context.Provider>
    )
}

    
export function useListContext(){
    const {addSavedMovie, removeSavedMovie, actualizeSavedMoviesArr, savedMoviesArr} = useContext(Context)
    const object = {addSavedMovie, removeSavedMovie, actualizeSavedMoviesArr, savedMoviesArr}
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