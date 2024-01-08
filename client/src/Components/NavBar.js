// NavBar.js

import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ isLoggedIn, onLogin }) {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white text-gray-800 fixed top-0 w-full shadow-md">
      <div className="container mx-auto py-2 sm:py-2 md:py-4 lg:py-6 xl:py-8 flex items-center justify-between" style={{ background: 'none' }}>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif">
          <span className="font-bold">MNNIT</span><span className="font-thin">Blogs</span>
        </p>

        <ul className="flex space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 xl:space-x-16">
          <li className="hover:text-gray-600 hover:scale-125"><a href='/'>Home</a></li>

          {isLoggedIn ? (
            <>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/write'>Write</a></li>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/community'>Community</a></li>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/profile'>Profile</a></li>
            </>
          ) : (
            <>
              <li className="hover:text-gray-600 hover:scale-125" onClick={redirectToLogin}>Write</li>
              <li className="hover:text-gray-600 hover:scale-125" onClick={redirectToLogin}>Community</li>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/login'>Login</a></li>
              <li className="ml-4 sm:ml-6 lg:ml-8 hover:text-black hover:scale-125 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-100"><a href='/signup'>Signup</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
