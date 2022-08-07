import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home.js';
import Signin from './components/screens/Signin.js'
import Signup from './components/screens/Signup.js'
import Profile from './components/screens/Profile.js'


function App() {
  return (
    <BrowserRouter>
        <Navbar />
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/profile" element={<Profile/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
