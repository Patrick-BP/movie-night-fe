import { Link } from "react-router-dom";
import React, { useState,useEffect, useContext } from 'react';
import axios from "axios";

import {Context} from './context'

axios.defaults.baseURL = "http://localhost:3001";
const imgPath = "http://localhost:3001";

function Movie({filter}) {
  const {user, dispatch} = useContext(Context)
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async function fetch() {
      const moviesList = await axios.get(`/movies`);
      setMovies(moviesList.data);
    })();
  }, []);


let filtered =[]
if(filter === "popularity"){
filtered = movies.filter((movie)=> movie.popularity > 6)
}else if(filter === "releaseDate"){
  
const filteredFinder = movies.filter((movie)=>{
  const dateA =new Date(movie.releaseDate) 
  const currentYear = new Date().getFullYear()
  return dateA.getFullYear() ===  currentYear
}  )
filtered = filteredFinder.reverse()

}
const [iconChange, SetIconChange] = useState("white")
const [userInfo, SetuserInfo] = useState({})

function favFun(id){
  const movieid =id
  const userid = user.data.others._id
  const newFav ={userId:userid, movieId:movieid}

axios.post('/fav/add', newFav)
  
}

  return (
    <>
    {filtered.map((movie, index)=>{
      const month = new Date(movie.releaseDate)
      const releaseDate = month.getFullYear()
      
      return (
      
        <div key={index} className="m-2 movie-box image-container">
         {movie.smallimg ? <img src={`${imgPath}/images/${movie.smallimg}`} alt="movie" /> :<img src={`/sample-img.png`} alt="movie" /> } 
          <div title ="Add to favorite" className="fav" onClick={()=>favFun(movie._id)}>
            <svg style={{color:"red"}}
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FavoriteBorderIcon"
            >
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
            </svg>
          </div>
          <Link  to={`/movie/${movie._id}`}>
          <div className="overlay ">
            <div className="movie-title">{movie.title}</div>
            <div className="d-flex flex-row  justify-content-between">
              <div className="text-size">{releaseDate}</div>
              <div className=" text-size  text-warning">
              {movie.popularity} &nbsp;<i className="fa-sharp fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          </Link>
        </div>
      )
      
    })}  
    </>
  );
}

export default Movie;
