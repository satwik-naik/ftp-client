import React from "react";
import Login from "./components/Login";
import RegistrationPage from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";

let App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/upload" element={<Upload/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;