import React, { useEffect, useState } from "react";
import fly1 from './documents-symbol.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GridLayout = () => {
  const email=localStorage.getItem("email")
  const[data,setData]=useState([])
  const navigate = useNavigate();


  try{
    useEffect(()=>{
      getData()
    },[])
  
    const getData=async()=>{
      const result = await axios.post("http://localhost:5000/get-files",{
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
  
     setData( result.data.data)

  }
    
  }catch(err){
    console.log(err)
  }
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
    {

      (data != null)?<h1 className="text-3xl font-bold mb-6 text-center">Uploaded Files</h1>:<h1></h1>

    }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {
        (data != null)?
        data.map((data, index) => (
          <div className=" h-auto w-[15rem] p-3 rounded-xl flex flex-col justify-between items-center">
         <a href={`http://localhost:5000/uploads/${data}`}><img src={fly1} className="rounded-l-xl rounded-r-xl" /></a>
          <p className="text-center font-bold">{data}</p>
        </div>
        )): <div className="flex  justify-center items-center w-[100vw] h-[50vh]">
              <h1 className=" text-[10rem] ">File Not Uploaded</h1>
        </div>   

       } 

      </div>
      
      <button className="bg-black mt-[10rem] text-white py-5 px-[5rem] rounded-[5rem] font-extrabold" onClick={()=>{
        navigate("/home")
      }}>back to Home</button>
      
    </div>
  );
};

export default GridLayout;
