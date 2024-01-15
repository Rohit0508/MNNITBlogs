import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    console.log("In handle login");
    setIsLoggedIn(true);
    onLogin(); // Notify the parent component about the login
    //navigate('/'); // Redirect to home after successful login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <NavBar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />

      <div className="bg-white p-8 rounded shadow-md w-96 mt-8">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login Page</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
