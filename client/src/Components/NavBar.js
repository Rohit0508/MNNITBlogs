import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  const redirectToHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    // Perform logout logic (clear authentication state, etc.)
    onLogout();
    navigate('/');
  };

  console.log(isLoggedIn) ;

  return (
    <nav className="bg-white text-gray-800 fixed top-0 w-full shadow-md">
      <div className="mx-auto py-2 sm:py-2 md:py-4 lg:py-6 xl:py-8 flex flex-col sm:flex-row items-center justify-between" style={{ background: 'none' }}>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif mb-2 sm:mb-0">
          <span className="font-bold">MNNIT</span><span className="font-thin">Blogs</span>
        </p>

        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-16">
          <li className="hover:text-gray-600 hover:scale-125"><a href='/'>Home</a></li>

          {isLoggedIn ? (
            <>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/write'>Write</a></li>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/community'>Community</a></li>
              <li className="hover:text-gray-600 hover:scale-125" onClick={redirectToHome}>Profile</li>
              <li className="hover:text-gray-600 hover:scale-125" onClick={handleLogout}>Logout</li>
            </>
          ) : (
            <>
              <li className="hover:text-gray-600 hover:scale-125" onClick={redirectToLogin}>Write</li>
              <li className="hover:text-gray-600 hover:scale-125" onClick={redirectToLogin}>Community</li>
              <li className="hover:text-gray-600 hover:scale-125"><a href='/login'>Login</a></li>
              <li className="mt-2 sm:mt-0 sm:ml-4 lg:ml-6 hover:text-black hover:scale-125 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-100" style={{ display: isLoggedIn ? 'none' : 'block' }}><a href='/signup'>Signup</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
