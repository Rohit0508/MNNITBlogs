import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogview from './Components/Blogview';
import CreatePost from './Components/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Blogview/>} />
        <Route path='/write' element={<CreatePost/>} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
