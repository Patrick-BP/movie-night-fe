import { Link,useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import {Context} from './context'
function Nav() {

  const {user, dispatch} = useContext(Context)
  const navigate = useNavigate()
  function logoutFunc(){
    dispatch({type:"LOGOUT"})
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    navigate('/login')
  }
    return ( 
        <>
        <div className="menu-wrppr">
            <div className="menu-title">Menu</div>
            <ul>
              <li><Link to="/" className="sideitem"><i className="fa-solid fa-house-chimney css-vubbuv icon"></i><span>Home</span></Link></li>
              <li><Link to="/search" className="sideitem"><i className="fa-solid fa-magnifying-glass css-vubbuv icon"></i><span>Search</span></Link></li>
              <li><Link to="/mylist" className="sideitem"><i className="fa-solid fa-heart css-vubbuv icon" ></i><span>Favorite</span></Link></li>
            </ul>
          </div>
          <div className="menu-wrppr">
            <div className="menu-title">Other</div>
            <ul>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-rectangle-list css-vubbuv icon"></i><span>PlayList</span></a></li>
              <li><Link to="/profile" className="sideitem"><i className="fa-solid fa-gear css-vubbuv icon"></i><span>Profile</span></Link></li>
              <li><span onClick={logoutFunc} className="sideitem"><i className="fa-solid fa-right-from-bracket css-vubbuv icon"></i><span>LogOut</span></span></li>
            </ul>
          </div>
        </>
     );
}

export default Nav;