import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../App.css"


const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      
      
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p className="continue">Please Login To Continue</p>
        <p className="describe" style={{color: "#1e33f4"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleLogin}>
          <input
            style={{ borderRadius: 10, marginLeft: 25, marginRight: 10 ,backgroundColor:"white"}}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ borderRadius: 10, marginLeft: 25, marginRight: 10 ,backgroundColor:"white"}}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            style={{ borderRadius: 10, marginLeft: 25, marginRight: 10 ,backgroundColor:"white"}}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row", background: "transparent"
            }}
          >
            <p style={{ marginBottom: 0, color: "#1e33f4" , fontSize:"15px",fontWeight:"bold"}}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#1e33f4",fontSize:"15px",fontWeight:"bold"}}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" ,fontSize:"5px"}}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default Login;