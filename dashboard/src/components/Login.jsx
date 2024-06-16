// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [user,setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin"); // default role is Admin

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
console.log(response)
      toast.success(response.data.message);
      setIsAuthenticated(true);
      setUser(response.data.user);

      if (response.data.user.role === "Admin") {
        navigateTo("/");
      } else if (response.data.user.role === "Doctor") {
        navigateTo("/doctor-dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    if (user.role === "Admin") {
      return <Navigate to={"/"} />;
    } else if (user.role === "Doctor") {
      return <Navigate to={"/doctor-dashboard"} />;
    }
  }

  return (
    <div className="container form-component login-form">
      <h2>Login</h2>
      <p>Please Login To Continue</p>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;