// src/components/Home.js
import React from 'react';
import axios from 'axios'

const Home = () => {
   

  return (
    <div className=" min-h-screen flex flex-col items-center  justify-evenly h-[100vh] w-auto relative">
        <div className='h-[20rem] w-[20rem] bg-black rounded-full bg-gradient-to-r from-cyan-500 to-blue-500  absolute left-6 bottom-0'></div>
        <div className='h-[15rem] w-[15rem] bg-black rounded-full bg-gradient-to-r from-purple-600 to-blue-500 absolute right-1 top-0'></div>
        <div className='h-[10rem] w-[10rem] bg-black rounded-full bg-gradient-to-r from-blue-500 to-pink-500 absolute top-0 '></div>
        <div className='h-[22rem] w-[22rem] bg-black rounded-full bg-gradient-to-r from-yellow-500 to-red-500 absolute bottom-4 right-0 '></div>
     
     <div className='flex flex-col '>
     <h1 className='font-semibold text-[9rem]'>Welcome to Ftp Server</h1>
     <div className='flex py-10 flex-row  justify-evenly items-center mt-8'>
     <button className='bg-black text-white py-5 px-[5rem] rounded-[5rem] font-extrabold'>Upload File !</button>
     <button className='bg-black text-white py-5 px-[5rem] rounded-[5rem] font-extrabold'>Download File</button>
     <button className='bg-black text-white py-5 px-[5rem] rounded-[5rem] font-extrabold'>List Of Files</button>
     </div>
     </div>

    </div>
  );
};

export default Home;
