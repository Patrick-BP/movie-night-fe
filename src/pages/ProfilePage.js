import "../App.css";
import Nav from "../components/Nav";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Context } from "../components/context";
axios.defaults.baseURL = "http://localhost:3001";

function ProfilePage() {
    const {user} = useContext(Context)
  const imgPath = "http://localhost:3001";
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    (async function fetch() {
      const resp = await axios.get("/movies");
      setmovies(resp.data);
    })();
  }, [movies]);
  
function delfunc(id){
axios.put(`/movies/del/${id}`, {isDeleted:true})
    
}

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
        
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container padding-bottom-3x mb-2">
    <div className="row">
        <div className="col-lg-4">
            <aside className="user-info-wrapper">
                <div className="user-cover" style={{backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)"}}>
                </div>
                <div className="user-info">
                    <div className="user-avatar">
                        <a className="edit-avatar" href="#"></a><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User"/></div>
                    <div className="user-data">
                        <h4>Daniel Adams</h4><span>Joined February 06, 2017</span>
                    </div>
                </div>
                <button className="btn btn-simple ">Update</button>
            </aside>
            {/* <nav className="list-group">
                <a className="list-group-item with-badge" href="#"><i className=" fa fa-th"></i>Orders<span className="badge badge-primary badge-pill">6</span></a>
                <a className="list-group-item" href="#"><i className="fa fa-user"></i>Profile</a>
                <a className="list-group-item" href="#"><i className="fa fa-map"></i>Addresses</a>
                <a className="list-group-item with-badge active" href="#"><i className="fa fa-heart"></i>Wishlist<span className="badge badge-primary badge-pill">3</span></a>
                <a className="list-group-item with-badge" href="#"><i className="fa fa-tag"></i>My Tickets<span className="badge badge-primary badge-pill">4</span></a>
            </nav> */}
        </div>
        <div className="col-lg-8">
            <div className="padding-top-2x mt-2 hidden-lg-up"></div>
          
            <div className="table-responsive wishlist-table margin-bottom-none">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-secondary">Comments</th>  
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                <div className="product-item">
                                    <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/FF0000/000000" alt="Product" /></a>
                                    <div className="product-info">
                                        <h4 className="product-title"><a href="#">Unionbay Park</a></h4>
                                        <div className="text-lg text-medium text-muted">fghfghj</div>
                                        <div>Availability:
                                            <div className="d-inline text-success">Update</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i className="icon-cross"></i></a></td>
                        </tr>
                        
                 
                    </tbody>
                </table>
            </div>
            {/* <hr className="mb-4"> */}
            
        </div>
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

export default ProfilePage;
