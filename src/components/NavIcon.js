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
        <div className="menu-wrppr icon-only">
            <div className="menu-title">Menu</div>
            <ul>
            <li><Link to="/" className="sideitem"><i className="fa-solid fa-house-chimney css-vubbuv icon"></i></Link></li>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-magnifying-glass css-vubbuv icon"></i></a></li>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-heart css-vubbuv icon" ></i></a></li>
            </ul>
          </div>
          <div className="menu-wrppr icon-only">
            <div className="menu-title">Other</div>
            <ul>
            <li><a href="#" className="sideitem"><i className="fa-solid fa-rectangle-list css-vubbuv icon"></i></a></li>
              <li><Link to="/profile" className="sideitem"><i className="fa-solid fa-gear css-vubbuv icon"></i></Link></li>
              <li><a href="#" onClick={logoutFunc} className="sideitem"><i className="fa-solid fa-right-from-bracket css-vubbuv icon"></i></a></li>
            </ul>
          </div>
        </>
     );
}

export default Nav;