import { Link } from "react-router-dom";
import "../App.css";
import NavIcons from "../components/NavIcon";
import MoviePlay from "../components/MoviePlay";

function MovieDetailsPage() {
  
  return (
    <div className="">
      <div className="wrapper d-flex">
        <div className="left-side-icon ">
          <div className="logo-div">
            <img src="/pngwing.com.png" alt="logo"></img>
          </div>

          <div>
            <NavIcons />
          </div>
        </div>

        {/* midle-side */}
        <div className="midle-side  ">
          <div className=" heading">
            <h4>Movie Night</h4>
          </div>
 
           <MoviePlay /> 

   
        </div>
        {/* end midle-side */}

        {/* right-side */}
        <div className="right-side_2 ">
          <form className="search">
            <div className="search">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SearchIcon"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <input type="text" placeholder="Search..." />
            </div>
          </form>

          <div>
            <span className="p-3">Similar</span>
            <div className="popular__box_2">
              <a href="/movie/616037">
                <div className=" similar">
                  <div className="banner__img">
                    <img
                      src="https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
                      alt="Thor: Love and Thunder"
                    />
                  </div>
                  <div className="similar__content">
                    <span>Thor: Love and Thunder</span>

                    <div className="d-flex flex-row  justify-content-between">
                      <div className="text-size">2022</div>
                      <div className=" text-size  text-warning">
                        8 &nbsp;<i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/movie/985939">
                <div className="similar">
                  <div className="banner__img">
                    <img
                      src="https://image.tmdb.org/t/p/original/2RSirqZG949GuRwN38MYCIGG4Od.jpg"
                      alt="Fall"
                    />
                  </div>
                  <div className="similar__content">
                    <span>Fall</span>
                    <div className="d-flex flex-row  justify-content-between">
                      <div className="text-size">2022</div>
                      <div className=" text-size  text-warning">
                        8 &nbsp;<i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/movie/760741 ">
                <div className="similar">
                  <div className="banner__img">
                    <img
                      src="https://image.tmdb.org/t/p/original/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg"
                      alt="Beast"
                    />
                  </div>
                  <div className="similar__content">
                    <span>Beast</span>
                    <div className="d-flex flex-row  justify-content-between">
                      <div className="text-size">2022</div>
                      <div className=" text-size  text-warning">
                        8 &nbsp;<i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                    </div>
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

export default MovieDetailsPage;
