// Login.js

import React, { useState } from "react";
import NavBar from "./NavBar";

function Login(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    setIsLoggedIn(true);
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <h1>Login Page</h1>
      {/* Your login form here, and call handleLogin when the form is submitted */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
