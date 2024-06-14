// Login.js
import React, { useState } from 'react';

const Login = () => {
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")
     
    // const clearInput=()=>{
    //     let inputs=document.getElementsByClassName("clearIN");
    //     for(let i=0;i<inputs.length;i++){
    //       inputs[i].value="";
    //     }
    //    }

    const handleSubmit = (e) => {
      e.preventDefault();
        fetch("http://localhost:5000/login",{
          method:"POST",
          crossDomain:true,
          headers: {
            'Content-Type': 'application/json',
            Accept:'application/json',
            "Access-Control-Allow-Origin":"*"
          },
          body: JSON.stringify({
            email,
            password
          })
        }).then((data)=>{
          if(data.status == 200){
            window.location.href="http://localhost:3000/home"
          }
          else{
            alert("Password or email are in correct")
          }
        })
        .catch((err)=>{
          console.log(err)
        })
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="h-[30rem] w-[40rem] px-8 py-9 mt-4 text-left bg-white shadow-lg rounded-lg flex  flex-col justify-center">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form  onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input type="text" placeholder="Email" 
                className="clearIN w-full px-4 py-2 mt-2  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 border-2 border-blue-600"
                id="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }} required
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input type="password" placeholder="Password" 
                className="clearIN w-full px-4 py-2 mt-2  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 border-2 border-blue-600"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button type="submit" className="px-9 py-2 mt-4 text-white bg-black rounded-xl hover:bg-red-600" >Login</button>
              <a href="/register" className="text-sm text-purple-700 hover:underline" >not registered ?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
