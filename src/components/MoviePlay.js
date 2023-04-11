import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../App.css";
import moment from "moment";
import { Context } from "./context";
axios.defaults.baseURL = "http://localhost:3001";

function MoviePlay() {
  const imgPath = "http://localhost:3001";
  const { user, dispatch } = useContext(Context);

  const movieId = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [listOfList, setListOfComments] = useState([])
  useEffect(() => {
    (async function fetch() {
      const findbyId = await axios.get(`/movies/${movieId.id}`);
      setMovieInfo(findbyId.data);
      
    })();
  }, []);

  useEffect(() => {
    (async function fetch() {
      const fetchComnts = await axios.get(`/comments/${movieId.id}`)
      setListOfComments(fetchComnts.data)
      
    })();
  }, [listOfList]);


  function addtolistFun(id) {
    const movieid = id;
    const userid = user.data.others._id;
    const newlist = { userId: userid, movieId: movieid };

    axios.post("/playlist/add", newlist);
  }


let time;
const [commentPost, setCommnet] =useState({
  userId: user.data.others._id,
  movieId:movieId.id,
  comment:""
})
function handlechanges(e){
  setCommnet({...commentPost, [e.target.name]: e.target.value})
}
function sendComnt(){
axios.post('/comments/add', commentPost)
}



const [replyList, SetReplyList] = useState([]);
const [parentId, setparentId] = useState();
const [replyInput, setreplyInput] = useState({
  userId:user.data.others._id,
  movieId:movieId.id,
  parent_comment_id:"",
  comment:""
});

function handleReply(e){
  setreplyInput({...replyInput , [e.target.name]:e.target.value})
}


function replyFunc(){
  axios.post('/comments/add', replyInput)
  
}
const [more, setmore] = useState(true);
function truncate(string, n){
  if(string.length > n){
    return   string.substr(0, n-1) + '...'
  }else{
    return string
  }

}
function readmore(){
  setmore((prev)=> !prev)
  console.log(more);
}

  return (
    <>
      {movieInfo.videourl && (
        <div>
          <div className="">
            <video width="100%" height="500" controls>
              <source
                src={`${imgPath}/videos/${movieInfo.videourl}`}
               
              />
            </video>
          </div>

          <br />
          <br />

          <div className="video-overview">
            <div
              onClick={() => addtolistFun(movieInfo._id)}
              className="tag btn btn-outline-secondary"
            >
              <span>Add To List</span>
            </div>
            <br />
            <br />
            <h4>overview:</h4>
            <div className="d-flex">
              <div className="left-img ">
                {movieInfo.smallimg ? (
                  <img
                    src={`${imgPath}/images/${movieInfo.smallimg}`}
                    alt="movie"
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="right-video-info">
                <div className="video-title">
                  <h3> {movieInfo.title}</h3>
                </div>
                <div className="video-rating d-flex gap-5 mt-4 ">
                  <div className="d-flex gap-2 items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-warning"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    <p>{movieInfo.popularity}</p>
                  </div>
                  <div className="d-flex gap-2 items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-warning"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"></path>
                      <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"></path>
                    </svg>
                    <p>
                      {movieInfo.releaseDate
                        ? new Date(movieInfo.releaseDate).getFullYear()
                        : " "}
                    </p>
                  </div>
                </div>

                <div className="info">
                  <p>
                  { movieInfo.overview && more ?<span>{truncate(movieInfo.overview, 300) }<button onClick={readmore} className="bg-secondary text-light px-2">+ More</button></span>:
                      <span> {movieInfo.overview} <button onClick={readmore} className="bg-secondary text-light px-2"><b>-</b> less</button></span>}
                    
                  </p>

                  <table className="table text-light">
                    <tbody>
                      <tr>
                        <td>country:</td>
                        <td>{movieInfo.country}</td>
                      </tr>
                      <tr>
                        <td>Genre:</td>
                        <td>{movieInfo.genre}</td>
                      </tr>
                      <tr>
                        <td>Director:</td>
                        <td>{movieInfo.director}</td>
                      </tr>
                      <tr>
                        <td>Language:</td>
                        <td>{movieInfo.language}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="video-comments">
            <div className="video-comment">
              <h4>
                {" "}
                <span className="numOfCmnts">{listOfList.length}</span>Comments:
              </h4>
              <div className="d-flex">
                <div className="input-cmnt rounded-pill d-flex">
                <i className="fa-sharp fa-solid fa-circle-user user-icon"></i>
                <textarea
                  type="text"
                  rows="1"
                  name="comment"
                  className="form-control-plaintext"
                  placeholder="Plaintext input"
                  value={commentPost.comment}
                  onChange={handlechanges}
                />
              </div>
              <span style={{fontSize:"3rem", marginLeft:"20px", cursor:"pointer"}} onClick={sendComnt} className=" align-self-center mt-4 pl-3 material-symbols-outlined">
                send
                </span>
              </div>
              

             {listOfList.length > 0 ? <div>
                <div className="cmnt">
                  <div className=" mb-5 mt-5">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-12">


                            {listOfList.length > 0 && listOfList.filter((reply)=>{
                                      if(!reply.parent_comment_id ){
                                        return reply
                                      }
                                  }).map((cmnt, index)=>{
                              return (
                                <div key={index} className="media">
                                <img
                                  className="mr-3 rounded-circle"
                                  alt="Bootstrap Media Preview"
                                  src="https://i.imgur.com/stD0Q19.jpg"
                                />
                                <div className="media-body">
                                  <div className="row">
                                    
                                    <div className="col-8 d-flex name-fcmnt">
                                      <h5>{cmnt.userId.firstname} {cmnt.userId.lastname}</h5>
                                      &nbsp; &nbsp;<span>{moment(cmnt.createdAt).fromNow() }</span>
            
                                    </div>

                                    <div className="col-4">
                                      <div className="pull-right reply">
                                        
                                          <span data-bs-toggle="modal" style={{cursor:"pointer"}} data-bs-target="#staticBackdrop" name="parent_comment_id" onClick={()=>setreplyInput({...replyInput , parent_comment_id:cmnt._id})}>
                                            <i className="fa fa-reply"></i>{" "}
                                            reply
                                          </span>
                                        
{/* ======================================== */}

{/* <!-- Button trigger modal --> */}

{/* <!-- Modal --> */}
<div className=" modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-floating">
  <textarea className="form-control" value={replyInput.comment} onChange={handleReply} name="comment"   placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  
</div> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={replyFunc} className="btn btn-primary">Reply</button>
      </div>
    </div>
  </div>
</div>
{/* ============================================ */}




                                      </div>
                                    </div>
                                  </div>
                                  {cmnt.comment}



                                  {/* ============== Replies =============== */}
                                  {listOfList.length > 0 && listOfList.filter((reply)=>{
                                      if(reply.parent_comment_id && reply.parent_comment_id === cmnt._id){
                                        return reply
                                      }
                                  })
                                  .map((reply)=>{
                                    return(
                                      <div className="media mt-4">
                                    <a className="pr-3" href="#">
                                      <img
                                        className="rounded-circle"
                                        alt="Bootstrap Media Another Preview"
                                        src="https://i.imgur.com/xELPaag.jpg"
                                      />
                                    </a>
                                    <div className="media-body">
                                      <div className="row">
                                        <div className="col-12 d-flex name-cmnt">
                                          <h5>{reply.userId.firstname} {reply.userId.lastname}</h5>
                                         &nbsp;&nbsp; &nbsp;<span>{moment(reply.createdAt).fromNow()}</span>
                                        </div>
                                      </div>
                                      {reply.comment}
                                    </div>
                                  </div>
                                    )
                                  }) }
                                  
                                  {/* ==============End Replies =============== */}

                                  <br/><br/>
                                </div>
                              </div>
                              )
                            })}  

                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>:<div className="text-center m-4 w-100 text-secondary"><h3>No Comments yet</h3></div> }


            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePlay;
