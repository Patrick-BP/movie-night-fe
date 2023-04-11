import "../../App.css";
import React, { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
function ShowmovieTable() {
  const imgPath = "http://localhost:3001";
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    (async function fetch() {
      const resp = await axios.get("/movies");
      setmovies(resp.data);
    })();
  }, [movies]);

  function delfunc(id) {
    axios.put(`/movies/del/${id}`, { isDeleted: true });
  }
  const [more, setmore] = useState(false);
  const overviewRef = useRef();
  function truncate(string, n) {
    if (string && string.length > n) {
      const firstHlf = string.substr(0, n - 1) + "...";

      return firstHlf;
    } else {
      return string;
    }
  }
 

  const [imgSuccess, setImgSuccess] = useState();
  const [movieSuccess, setMovieSuccess] = useState();
  const [addSuccess,setAddSuccess] = useState()
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    popularity: 0,
    releaseDate: "",
    genre: "",
    language: "",
    director: "",
    type: "",
    country: "",
  });
  const [file, setfile] = useState(null);
  const [videofile, setvideofile] = useState(null);

  function handleChanges(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    const newMovie = {
      title: movie.title,
      overview: movie.overview,
      popularity: movie.popularity,
      releaseDate: movie.releaseDate,
      genre: movie.genre,
      language: movie.language,
      director: movie.director,
      type: movie.type,
      country: movie.country,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newMovie.smallimg = filename;

      try {
        const resp = await axios.post("/upload/", data);
        setImgSuccess(resp);
      } catch (e) {
        console.log(e.message);
      }
    }

    if (videofile) {
      const datavid = new FormData();
      const filename = Date.now() + videofile.name;
      datavid.append("name", filename);
      datavid.append("file", videofile);
      newMovie.videourl = filename;

      try {
        const resp = await axios.post("/upload/vid/", datavid);
        setMovieSuccess(resp.data);
      } catch (e) {
        console.log(e.message);
      }
    }

    try {
      const resp = await axios.post("/movies", newMovie);
      setAddSuccess(resp.data)
    } catch (e) {
      
    }
    e.target.reset()
    setTimeout(() => {
      setImgSuccess();
      setMovieSuccess();
      setvideofile(null);
      setfile(null);
      setMovie({
        title: "",
        overview: "",
        popularity: 0,
        releaseDate: "",
        genre: "",
        language: "",
        director: "",
        type: "",
        country: "",
      })
    }, 2000);
  }




  return (
    <div className="card card-showmovie">
      <div className="card-body mx-auto">
        <h4 className="card-title mt-3 text-center">All Movie</h4>

        <table className="table align-middle mb-0  ">
          <thead className="bg-light">
            <tr>
              <th>Poster</th>
              <th>Title</th>
              <th>overview</th>
              <th>Genre</th>
              <th>Language</th>
              <th>Type</th>
              <th>Country</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.length > 0 &&
              movies.map((movie, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={`${imgPath}/images/${movie.smallimg}`}
                          alt=""
                          style={{ width: "70px", height: "100px" }}
                          className="rounded"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{movie.title}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <p>
                        {!more ? truncate(movie.overview, 200) : movie.overview}
                        <span onClick={() => setmore(!more)}>
                          <>{more ? <span className="btn">- less</span> : <span className="btn">+ more</span>}</>
                        </span>
                      </p>
               
                    </td>

                    <td>{movie.genre}</td>
                    <td>{movie.language}</td>
                    <td>{movie.type}</td>
                    <td>{movie.country}</td>

                    <td>
                      <span data-bs-toggle="modal"  data-bs-target="#staticBackdrop" className="cursor-del badge badge-success rounded-pill d-inline">
                        Edit
                      </span>
                      <div className=" modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-floating">
  
      <form onSubmit={submit} encType="multipart/form-data">
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-video"></i>{" "}
              </span>
            </div>
            <input
              name="title"
              className="form-control"
              placeholder="Movie tilte"
              type="text"
              value={movie.title}
              onChange={handleChanges}
              required
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-pen"></i>{" "}
              </span>
            </div>
            <textarea
              name="overview"
              value={movie.overview}
              className="form-control"
              placeholder="Overview"
              type="text"
              onChange={handleChanges}
              required
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-">popularity :</i>{" "}
              </span>
            </div>
            <input
              name="popularity"
              value={movie.popularity}
              className="form-control"
              placeholder="popularity"
              type="range"
              min="1"
              max="10"
              onChange={handleChanges}
              required
            />
            <span className="input-group-text">
              {" "}
              <i className="fa ">{movie.popularity}</i>{" "}
            </span>
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-date">release-Date</i>{" "}
              </span>
            </div>
            <input
              name="releaseDate"
              value={movie.releaseDate}
              className="form-control"
              placeholder="releaseDate"
              type="date"
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-film"></i>{" "}
              </span>
            </div>

            <select
              className="custom-select"
              name="genre"
              onChange={handleChanges}
              value={movie.genre}
              required
            >
              <option value="">Movie Genre</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Animation">Animation</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Familly">Familly</option>
              <option value="Crime">Crime</option>
            </select>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-microphone"></i>{" "}
              </span>
            </div>
            <select
              className="custom-select"
              name="language"
              onChange={handleChanges}
              value={movie.language}
              required
            >
              <option value="">Movie language</option>
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-users"></i>{" "}
              </span>
            </div>
            <input
              name="director"
              value={movie.director}
              className="form-control"
              placeholder="director"
              type="text"
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-film"></i>{" "}
              </span>
            </div>
            <select
              className="custom-select"
              value={movie.type}
              name="type"
              onChange={handleChanges}
              required
            >
              <option value="">Movie Type</option>
              <option value="Movie">Movie</option>
              <option value="Tv-Show">Tv-Show</option>
              <option value="Documentary">Documentary</option>
            </select>
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-globe"></i>{" "}
              </span>
            </div>
            <select
              className="custom-select"
              value={movie.country}
              name="country"
              onChange={handleChanges}
              required
            >
              <option value="">Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CHINA">CHINA</option>
              <option value="KOREA">KOREA</option>
              <option value="FRANCE">FRANCE</option>
            </select>
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-file-image-o"></i>{" "}
              </span>
            </div>
            <input
              className="form-control"
              type="file"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-picture-o"></i>{" "}
              </span>
            </div>
            <input
              className="form-control"
              placeholder="movie"
              type="file"
              multiple
              onChange={(e) => setvideofile(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Save{" "}
            </button>
          </div>
          {/* {addSuccess && (
            <p className="text-center text-success">{addSuccess}</p>
          )}
          {imgSuccess && (
            <p className="text-center text-success">{imgSuccess}</p>
          )}
          {movieSuccess && (
            <p className="text-center text-success">{movieSuccess}</p>
          )} */}
        </form>

  
</div> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick="" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
                    </td>
                    <td>
                      <span
                        onClick={() => delfunc(movie._id)}
                        className=" cursor-del badge badge-danger rounded-pill d-inline"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowmovieTable;
