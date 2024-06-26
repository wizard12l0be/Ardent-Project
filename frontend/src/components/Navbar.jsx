// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import "../App.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"} >
        <div className="logo">
          <img src="images/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"} style={{flex: 4.8}}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)} className=".home">
              Home
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)} className="about">
              AboutUs
            </Link>
            <div className="navlinks appoin">
            <Link to={"/appointment"} onClick={() => setShow(!show)} className="appoint">
              Appointment
            </Link>
            </div>
          
          </div>

          <button className="Ask_btn">

            <Link to={"/model"} onClick={() => setShow(!show)} className="symptoms" style={{ textDecoration: "none", fontSize: "18px" }}>
              Diagnose_Disease
            </Link>
            <img
              style={{ marginBottom: "20px" }}
              src="/images/robot-assistant.png" alt="Chatbot Logo" className="chatbot-logo"></img>
          </button>


          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;