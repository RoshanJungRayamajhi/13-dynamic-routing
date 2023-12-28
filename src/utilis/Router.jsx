import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import Contact from "../components/Contact";
import Userdetails from "../components/Userdetails";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} >
        
      <Route path="/user/:name" element={<Userdetails />} />
        
        </Route>
      <Route path="/userdetails/goback" element={<User/>}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  );
};

export default Router;
