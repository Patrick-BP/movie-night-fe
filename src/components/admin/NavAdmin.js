import { Link,useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import {Context} from '../context'
function NavAdmin() {

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
              <li><Link to="/show" className="sideitem"><i className="fa-solid fa-house-chimney css-vubbuv icon"></i><span>All Movies</span></Link></li>
              <li><Link to="/add" className="sideitem"><i className="fa-solid fa-magnifying-glass css-vubbuv icon"></i><span>Add a Movie</span></Link></li>
             
            </ul>
          </div>
          <div className="menu-wrppr">
            <div className="menu-title">Other</div>
            <ul>
              
              <li><a href="#" className="sideitem"><i className="fa-solid fa-gear css-vubbuv icon"></i><span>Setting</span></a></li>
              <li><span onClick={logoutFunc} className="sideitem"><i className="fa-solid fa-right-from-bracket css-vubbuv icon"></i><span>LogOut</span></span></li>
            </ul>
          </div>
        </>
     );
}

export default NavAdmin;