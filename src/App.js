import React, { useEffect, useState,useContext } from "react";
import Header from "./Header/Header";
import Movies from "./components/NewMovie/Movies";
import axios from "axios";
import newContext from "./Context";
import "./App.css";
import SinglePost from "./components/SinglePost/SinglePost";
import {  BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom";
import SaveMovies from "./components/Favorite/SaveMovies";
import Search from "./components/Search/Search";




function App() {
  const {apiKey,saveMovie} = useContext(newContext);

  const API_URL_NEWMOVIE =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;



  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL_NEWMOVIE)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <div className="App">
     
          <Router>
            <Header />
          <Routes>
           <Route path="*" element={<Navigate to='/' replace/>}/>
            <Route path="/" element={<Movies data={movie}  savemovie={saveMovie}/>}/>
            <Route  path="/saveMovies" element={<SaveMovies data={saveMovie}/>} />
            <Route path="/singlepost/:movieId" element={<SinglePost id={1212} />}/>
            <Route path="/search" element={<Search />}/>
          </Routes>
          </Router>
      
    </div>
  );
}

export default App;
