import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Blogview from "./Components/Blogview";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your login logic here
    console.log("In app.js handlelogin") ;
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Your logout logic here
    setLoggedIn(false);
  };

  const PrivateRoute = ({ element, isLoggedIn, path }) => {
    console.log("In private route value of" + isLoggedIn) ;
    return isLoggedIn ? (
      React.cloneElement(element, { isLoggedIn }) // Pass isLoggedIn as a prop to the element
    ) : (
      <Navigate to="/login" state={{ from: path }} replace={true} />
    );
  };
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogview />} />
        <Route
          path="/write"
          element={<PrivateRoute path="/write" element={<CreatePost />} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
