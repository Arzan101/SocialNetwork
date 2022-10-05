import React, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import { initialState,reducer } from './reducers/userReducer';


const UserContext = createContext();

const Routing =() =>{
  return(
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/signin" element={<Signin />} /> 
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/profile" element={<Profile />} /> 
    <Route path="/create" element={<CreatePost />} />
  </Routes>
  )
};

function App() {
  const [state,dispatch]= useReducer(reducer,initialState);
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
       
    </BrowserRouter>
  );
}

export default App;