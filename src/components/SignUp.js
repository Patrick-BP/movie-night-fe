import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL= 'http://localhost:3001'
function SignUp({LoginForms}) {
  const navigate = useNavigate
  const [userInfo, setuserinfo] = useState({firstname:"" , lastname:"" , email:"" , password:""})
let [message, setmessage]= useState("");

  function handlechange(e){
    const {value, name} = e.target
    setuserinfo((prev)=>({...prev, [name]: value}))
  }
  async function signUpFun(e){
    e.preventDefault()

    if(userInfo.firstname !=="" && userInfo.lastname!=="" && userInfo.email!=="" && userInfo.password!==""){
 await axios.post('/users', userInfo)
   .then((res)=>console.log(res))
   
   setmessage("successfully Registrated!")
   setTimeout(()=>{
setuserinfo({firstname:"" , lastname:"" , email:"" , password:""})
setmessage()
navigate('/login')
   },2000)
    }else{
      message="Fields Can't be Empty"
    }
   
   

  }

  console.log(userInfo);
  return (
    <>
      <div className="px-4 py-2 rounded-xl max-w-xl w-full min-h-[500px] text-white/70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center mb-5">
          <div className="text-[50px] font-semibold mb-1 mx-auto text-center md:text-left">
            <div className="uppercase tracking-wider text-xl font-medium mb-2">
              Start for free
            </div>
            <div className="text-primary leading-none mb-4 ">
              Create Account
            </div>
          </div>
          
          
        </div>
        <form onSubmit={signUpFun}>
          <div className="flex md:justify-between gap-8 md:gap-0 mb-6">
            <div className="relative mr-5">
              <input
                name="firstname"
                type="text"
                placeholder="First name"
                className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white"
                value={userInfo.firstname}
              onChange={handlechange}
              required
              />
              <label
                htmlFor="firstName"
                className="absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                "
              >
                First name
              </label>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute top-1/2 -translate-y-1/2 right-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="absolute top-[95%] left-[3%] text-red-600"></p>
            </div>
            <div className="relative">
              <input
                name="lastname"
                type="text"
                placeholder="Last name"
                className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white"
                value={userInfo.lastname}
              onChange={handlechange}
              required
              />
              <label
                htmlFor="lastName"
                className="absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                "
              >
                Last name
              </label>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute top-1/2 -translate-y-1/2 right-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                  fill="currentColor"
                ></path>
              </svg>
              
            </div>
          </div>
          <div className="relative mb-6">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white"
              value={userInfo.email}
              onChange={handlechange}
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
            <p className="absolute top-[95%] left-[3%] text-red-600"></p>
          </div>
          <div className="relative mb-12">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white"
              value={userInfo.password}
              onChange={handlechange}
              required
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
            </svg>
           {message &&<p style={{display: "block"}} className="absolute top-[95%] left-[3%] text-red-600">{message}</p>} 
          </div>
          <button
            type="submit"
            
            className="px-12 py-3 bg-primary rounded-full text-lg text-white uppercase absolute left-1/2 -translate-x-1/2 hover:bg-[#4161cc] transition duration-300"
          >
            Register
          </button>
        </form>
         
        <p className="text-xl flex gap-2 mt-32 justify-center">
          <span>Already a member?</span>
          <button type="submit" onClick={LoginForms} className="text-primary/90 underline">
            Sign In
          </button>
        </p>
      </div>
    </>
  );
}

export default SignUp;
