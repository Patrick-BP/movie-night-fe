import { Link } from "react-router-dom";
import React, { useState,useEffect, useContext } from 'react';
import axios from "axios";
import Nav from '../components/Nav'
import {Context} from '../components/context'

axios.defaults.baseURL = "http://localhost:3001";

function MyListPage() {
const urlPath = 'http://localhost:3001'
const {user} = useContext(Context)

const [myMovies, setMyMovies] = useState([]);
  
useEffect(()=>{
  (async function fetch(){
    const list = await axios.get(`/fav/${user.data.others._id}`)
    setMyMovies(list.data)
  })()

},[myMovies])

function remfavFunc(id){
axios.delete(`/fav/${user.data.others._id}/${id}`)

}


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
          

<div className="d-flex flex-wrap">

{myMovies.length === 0 ? <div className="text-center"><h1>No Favorite Movie Yet</h1></div> : myMovies.map((movie,index)=>{
      return (
        <div key={index}  className="m-2 movie-box image-container">
         <img src={`${urlPath}/images/${movie.movieId.smallimg}`} alt="movie" />  
          <div className="fav" title ="Remove from favorite"  onClick={()=>remfavFunc(movie.movieId._id)}>
          <span className="material-symbols-outlined text-danger ">disabled_by_default</span>

          </div>
          <Link title ="Click to watch this movie"  to={`/movie/${movie.movieId._id}`}>
          <div className="overlay ">
            <div className="movie-title">{movie.movieId.title}</div>
            <div className="d-flex flex-row  justify-content-between">
              <div className="text-size">{new Date(movie.movieId.releaseDate).getFullYear()}</div>
              <div className=" text-size  text-warning">
              {movie.movieId.popularity} &nbsp;<i className="fa-sharp fa-solid fa-star"></i>
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

export default MyListPage;
