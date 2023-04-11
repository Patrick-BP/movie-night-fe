import { Link } from "react-router-dom";
import React, { useState,useEffect, useContext } from 'react';
import axios from "axios";
import Nav from '../components/Nav'
import {Context} from '../components/context'

axios.defaults.baseURL = "http://localhost:3001";

function SearchPage() {
const urlPath = 'http://localhost:3001'
const {user} = useContext(Context)

const [myMovies, setMyMovies] = useState([]);
const [resSearch, setResSearch] = useState([])
const [searchinput, setsearchInput] = useState('')

function favFunc(id){
    const movieid =id
    const userid = user.data.others._id
    const newFav ={userId:userid, movieId:movieid}
  
  axios.post('/fav/add', newFav)
    
  }
useEffect(()=>{
(async function search(){
    const list = await axios.get(`/movies`)
    setMyMovies(list.data)
  })()
},[])

  return (
    <>

<div className="">
      <div className="wrapper d-flex">
        <div className="left-side ">
          <div className="logo-div">
            <img src="/pngwing.com.png" alt="logo"></img>
          </div>

          <div>
            <Nav />
          </div>
        </div>
        {/* midle-side */}
        <div className="midle-side  ">
          <div className=" heading">
            <h4>Movie Night</h4>
          </div>
          <div>
            <div className="text-center mb-4">
                <h4>Find your favorite Movies, TV shows, Documentaries</h4>
            </div>
            
            <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" value={searchinput} name="search" onChange={(e)=>setsearchInput(e.target.value)}  placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
    </div>
    <br/><br/><br/>
          </div>

<div className="d-flex flex-wrap">

{searchinput.length === 0 && <div className="text-center text-secondary p-5 w-100"><h2>Your Result Here... </h2></div> }

{ resSearch.length !== 0 && <div className="text-center text-secondary p-5 w-100">No Result for {searchinput}</div>}

{ searchinput.length > 0 && myMovies.filter((val)=>{
  
    if(val.title && val.title.toLowerCase().includes(searchinput.toLowerCase())){
       
        return val
    }
}).map((movie,index)=>{
      return (
        <div key={index}  className="m-2 movie-box image-container">
         <img src={`${urlPath}/images/${movie.smallimg}`} alt="movie" />  
          <div className="fav" onClick={()=>favFunc(movie._id)}>
            <svg 
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
              <div className="text-size">{new Date(movie.releaseDate).getFullYear()}</div>
              <div className=" text-size  text-warning">
              {movie.popularity} &nbsp;<i className="fa-sharp fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          </Link>
        </div>
      )
}) }
</div>

          
            
          </div>
        
        {/* end midle-side */}

        {/* right-side */}
        <div className="right-side ">
         <div className="profile-name">
          <span><i className="fa-sharp fa-solid fa-circle-user mr-3  fs-1"></i>{user.data.others.firstname}</span>
         </div>
          <div className="tag__box">
            <div className="tag btn btn-outline-secondary">
              <span>Action</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Advanture</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>SI-FI</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Hulu</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Technology</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Hollywood</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Marvel</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>SuperHero</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Disney</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Netflix</span>
            </div>
            <div className="tag btn btn-outline-secondary">
              <span>Animation</span>
            </div>
          </div>
          <div>
            <span className="p-3">Popular Movies</span>
            <div className="popular__box">
              <a href="/movie/616037">
                <div className="popularMovies">
                  <div className="banner__img">
                    <img
                      src="https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
                      alt="Thor: Love and Thunder"
                    />
                  </div>
                  <div className="popular__content">
                    <span>Thor: Love and Thunder</span>
                    <p>
                      After his retirement is interrupted by Gorr the God
                      Butcher, a galactic killer who seeks ...
                    </p>
                  </div>
                </div>
              </a>
              <a href="/movie/985939">
                <div className="popularMovies">
                  <div className="banner__img">
                    <img
                      src="https://image.tmdb.org/t/p/original/2RSirqZG949GuRwN38MYCIGG4Od.jpg"
                      alt="Fall"
                    />
                  </div>
                  <div className="popular__content">
                    <span>Fall</span>
                    <p>
                      For best friends Becky and Hunter, life is all about
                      conquering fears and pushing limits....
                    </p>
                  </div>
                </div>
              </a>
              <a href="/movie/760741">
                <div className="popularMovies">
                  <div className="banner__img">
                    <img
                      src="https://image.tmdb.org/t/p/original/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg"
                      alt="Beast"
                    />
                  </div>
                  <div className="popular__content">
                    <span>Beast</span>
                    <p>
                      A recently widowed man and his two teenage daughters
                      travel to a game reserve in South Af...
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*end right-side */}
      </div>
</div>

    </>
  );
}

export default SearchPage;
