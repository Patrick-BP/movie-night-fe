import Nav from "../components/Nav";
import "../App.css";
import Movie from "../components/Movie";
import { useContext } from "react";
import { Context } from "../components/context";

function Home() {
  const {user} = useContext(Context)
  return (
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
          <div className="home__boxx">
            <div className="discovers">
              <div className="discover__img">
                <img src="/startwars.jpeg" />
              </div>
              <div className="discover__content">
                <div className="discover__left">
                  <h3>
                    Start Wars<span>( 2022 )</span>
                  </h3>
                  <div className="button__box">
                    <a href="/movie/960700">
                      <button className="btn1">Play</button>
                    </a>
                    <button className="btn2">My List</button>
                  </div>
                  <p>
                    In this sequel to the 2017 live-action netflix Adaptation of
                    the manga the Elric brothers meet their toughest opponent
                    ...
                  </p>
                </div>
                <div className="right__discover">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="StarIcon"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <span>7</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" heading">Latest Movies</div>
          <div className="d-flex flex-wrap result-wrpr">
            <Movie filter="releaseDate" />
          </div>
          <br />
          <br />
          <div>
            <div className=" heading">Top Rated</div>
            <div className="d-flex result-wrpr">
              <Movie filter={"popularity"} />
            </div>
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
  );
}

export default Home;
