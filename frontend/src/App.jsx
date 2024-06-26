// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appoinment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Model from "./pages/Model";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
// eslint-disable-next-line no-unused-vars
import Footer from "./components/Footer";





function App() {
  return (
    
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/appointment" element={<Appoinment />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/model" element={<Model/>}></Route>
        </Routes>
       
        <Footer/>
        <ToastContainer position="top-center"/>
        </Router>
    </>
  );
}

export default App;
