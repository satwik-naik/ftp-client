import React from "react";
import Login from "./components/Login";
import RegistrationPage from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";
import LIst_of_data from "./components/LIst_of_data";
import IsAuth from "./components/IsAuth";

let App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsAuth/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/lists" element={<LIst_of_data/>}/>
        <Route path="*" element={
           <div>
            <h2>404 Page not found</h2>
           </div>
        }/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;