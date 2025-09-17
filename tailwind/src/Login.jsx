import React, { useRef, useState } from "react";
import Otp from "./Otp";

function Login() {
    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const ref4=useRef()

    const [disabled,setDisabled]=useState(true)
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-600 flex justify-center items-center">
      <div className="flex flex-col w-[100vw] max-w-md items-center gap-9">
        <h1>Webinar.gg</h1>
        <h1 className="text-white text-4xl">Login Kro</h1>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <p>please enter your email do signIn</p>
           <div className="flex items-center gap-3">
            <Otp refrence={ref1} onDone={()=>ref2.current.focus()}/>
            <Otp refrence={ref2} goBack={(e)=>ref1.current.focus()} onDone={()=>ref3.current.focus()}/>
            <Otp refrence={ref3} goBack={(e)=>ref2.current.focus()} onDone={()=>ref4.current.focus()}/>
            <Otp refrence={ref4} goBack={(e)=>ref3.current.focus()} onDone={()=>setDisabled(false)}/>
           </div>
          </div>
          <button disabled={disabled} className={`w-full py-2 px-4 rounded-xl ${disabled===false ? "bg-blue-800":"bg-gray-400"}`}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
