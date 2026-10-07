

 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API_URL =
  import.meta.env.VITE_API_URL || "https://stock-verse-backend-1.onrender.com";

export default function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/login`, { ...inputValue });
      const { success, message, token } = data;

      if (success && token) {
        localStorage.setItem("token", token);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      } else {
        handleError(message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      handleError("Could not reach the server. Try again in a moment.");
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="p-3" style={{ maxWidth: "400px", margin: "auto" }}>
      <h2 className="mb-3 text-center text-muted">Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
        <span className="d-block text-center mt-2">
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}