import React, { Suspense } from "react";
import { useClickedMovie } from "./Context/Context";
import { useMovie } from "./Context/MovieContext";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
const LazyHome = React.lazy(() => import("./pages/Home"))
const LazySeries = React.lazy(() => import("./pages/Series"))
const LazyMovies = React.lazy(() => import("./pages/Movies"))
const LazyMyList = React.lazy(() => import("./pages/myList/MyList"))
const LazyLog = React.lazy(() => import("./components/logPages/Log"))
import WatchMovie from "./pages/watchMovie/WatchMovie";
import ShowMovieInformation from "./components/clickedMovie/clickMovie";
import {netflixLogo} from './assets/netflixLogos'
import { motion } from "framer-motion"
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const {isLoading } = useMovie()
  const {newMovieClicked} = useClickedMovie()

  function showLoading(){
    return (
      <div className="loading-container">
        <motion.div 
          className="netflix-load"
          initial={{scale: 0.5, opacity: 0}}
          animate={{scale: 1.1, opacity: 1}}
          transition={{ ease: "easeOut", duration: 1.6}}
        >
          {netflixLogo}
        </motion.div>
        <motion.div  
          className="loader"
          initial={{opacity: 0}}
          animate={{opacity: 1, scale: 2}}
          transition={{ ease: "easeOut", duration: 0.2, delay: 1.6 }}
        >
          <ClipLoader color="rgb(219, 38, 38)" size={20}/>
        </motion.div>
      </div>
    )
  }

  function showAppCharged(){
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome />
            </Suspense>} 
          />
          <Route path="/shows" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySeries />
            </Suspense>} 
          />
          <Route path="/movies" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMovies />
            </Suspense>} 
          />
          <Route path="/my_list" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMyList />
            </Suspense>} 
          />
          <Route path="/signUp" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLog type={"signUp"}/>
            </Suspense>} 
          />
          <Route path="/login" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLog type={"logIn"}/>
            </Suspense>} 
          />
          {/* <Route path="/signUp" element={<Log />} />
          <Route path="/login" element={<Log type={"logIn"} />} /> */}
          <Route path="/watchMovie" element={<WatchMovie />} />
        </Routes>
        { newMovieClicked && <ShowMovieInformation movie={newMovieClicked} />}
      </>
    )
  }
  
  return (
    <div className="app">
      { isLoading ? 
        showLoading() :
        showAppCharged()
      }
    </div>
  );
}

export default App;
