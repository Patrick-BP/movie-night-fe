import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import React, { useState } from 'react';

function LoginPage() {
    const [isloginForm, setIsLoginForm ] = useState(true)

    function LoginForms(){
        setIsLoginForm((prev)=> !prev)
    }
  return (
    <>
      <video
        autoPlay={true}
        loop={true}
        src="/endgame.mp4"
        className="fixed md:-top-[130px] -top-[155px] object-cover left-0 h-[135vh] w-full -z-10"
      >
      </video>
      
    {isloginForm ? <SignIn LoginForms={LoginForms}/> : <SignUp LoginForms={LoginForms}/>} 
      
    </>
  );
}

export default LoginPage;
