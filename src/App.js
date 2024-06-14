import React from "react";
import Login from "./components/Login";
import RegistrationPage from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

let App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;