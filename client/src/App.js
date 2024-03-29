import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Blogview from "./Components/Blogview";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/login";
import Signup from './Components/SignUp'
import Blogs from "./Components/Blogs";
import ReadBlog from "./Components/ReadBlog";
import Home from "./Home";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

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
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/readit" element={<ReadBlog />} />
        <Route
          path="/write" element={<CreatePost />} 
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
