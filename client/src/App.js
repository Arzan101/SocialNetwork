import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home.js';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
         <Routes>
           <Route path="/" element={<Home/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
