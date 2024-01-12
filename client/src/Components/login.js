// Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Login({onLogin}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    console.log("In handle login") ;
    setIsLoggedIn(true);
    onLogin(); // Notify the parent component about the login
    //navigate('/'); // Redirect to home after successful login
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>Login Page</h1>
      {/* Your login form here, and call handleLogin when the form is submitted */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
