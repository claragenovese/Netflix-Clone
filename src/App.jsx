import React, { useState, Suspense } from "react";
import { useClickedMovie } from "./Context/Context";
import { useMovie } from "./Context/MovieContext";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav/Nav";
const LazyHome = React.lazy(() => import("./pages/Home"))
const LazySeries = React.lazy(() => import("./pages/Series"))
const LazyMovies = React.lazy(() => import("./pages/Movies"))
import Home from "./pages/Home";
const LazyMyList = React.lazy(() => import("./pages/myList/MyList"))
const LazyLog = React.lazy(() => import("./components/logPages/Log"))
import WatchMovie from "./pages/watchMovie/WatchMovie";
import ShowMovieInformation from "./components/clickedMovie/clickMovie";

import showLoading from "./functions/LoadContent/LoadContent";
import Announcement from "./components/Announcement/Announcement";

function App() {
  const {isLoading } = useMovie()
  const {newMovieClicked} = useClickedMovie()

  const [showAnnouncement, setShowAnnouncement] = useState(true)

  const initialLoading = true

  function showAppCharged(){
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={showLoading()}>
              <LazyHome />
            </Suspense>} 
          />
          <Route path="/shows" element={
            <Suspense fallback={showLoading()}>
              <LazySeries />
            </Suspense>} 
          />
          <Route path="/movies" element={
            <Suspense fallback={showLoading()}>
              <LazyMovies />
            </Suspense>} 
          />
          <Route path="/my_list" element={
            <Suspense fallback={showLoading()}>
              <LazyMyList />
            </Suspense>} 
          />
          <Route path="/signUp" element={
            <Suspense fallback={showLoading()}>
              <LazyLog type={"signUp"}/>
            </Suspense>} 
          />
          <Route path="/login" element={
            <Suspense fallback={showLoading()}>
              <LazyLog type={"logIn"}/>
            </Suspense>} 
          />
          <Route path="/watchMovie" element={<WatchMovie />} />
        </Routes>
        <Route path="*" element={<Home />} />

        { newMovieClicked && <ShowMovieInformation movie={newMovieClicked} />}
        
        <AnimatePresence>
          {showAnnouncement && <Announcement setShowAnnoun={setShowAnnouncement} />}
        </AnimatePresence>
      </>
    )
  }
  
  return (
    <div className="app">
      { isLoading ? 
        showLoading(initialLoading) :
        showAppCharged()
      }
    </div>
  );
}

export default App;
