import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Home/>} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
