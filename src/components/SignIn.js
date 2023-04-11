import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useContext } from "react";
import {Context} from './context'
axios.defaults.baseURL = 'http://localhost:3001'

function SignIn({LoginForms}) {

const {user, dispatch, isFetching} = useContext(Context)

const [login, setLogin]= useState({email:"", password:""})
const [loginMsg, setLogimsg] =useState("")

const navigate = useNavigate()
  function handleChange(e){
   
    setLogin({...login, [e.target.name]:e.target.value})
  }


  async function siginFunc(e){ 
    e.preventDefault()
    dispatch({type:"LOGIN_START"});

    try{
const response = await axios.post('/login', login)
    localStorage.setItem('accessToken', response.data.data.accessToken);
    dispatch({type:"LOGIN_SUCCESS", payload: response.data});

 
      
    }catch(e){
      dispatch({type:"LOGIN_FAILURE"});
    }
    
    

 
}



    return ( 
        <>
        <div className="md:bg-black/80 bg-dark min-h-screen">
        <div className="px-4 py-2 rounded-xl max-w-xl w-full min-h-[500px] text-white/70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center mb-5">
            <div className="text-[50px] font-semibold mb-1 mx-auto">
              <div className="text-primary leading-none mb-4 text-center">
                Sign In To Movie Night
              </div>
            </div>
            <div className="flex gap-4 mb-8">
             
              
            </div>
            <p className="text-lg">use your email account: </p>
          </div>
          <form>
            <div className="relative mb-6">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white is-valid"
                value={login.email}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
        translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
        "
              >
                Email
              </label>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 -translate-y-1/2 right-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
              </svg>
            </div>
            <div className="relative mb-12">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white is-valid"
                value={login.password} 
                required
                onChange={handleChange}
               
              />
              <label
                htmlFor="password"
                className="absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
        translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
        "
              >
                Password
              </label>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute top-1/2 -translate-y-1/2 right-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"></path>
                </g>
              </svg><div className='text-danger'>{loginMsg}</div>
            </div>
             
            <button onClick={siginFunc} className="btn-signIn px-12 py-3 bg-primary rounded-full text-lg text-white uppercase absolute left-1/2 -translate-x-1/2 hover:bg-[#4161cc] transition duration-300" disabled={isFetching}>
              Sign In
            </button>
          
          <p className="text-xl flex gap-2 mt-32 justify-center">
            <span>Not a member?</span>
            <button type="submit" onClick={LoginForms} className="text-primary/90 underline">
              Sign Up
            </button>
          </p></form>
        </div>
      </div>
        
        </>
     );
}

export default SignIn;