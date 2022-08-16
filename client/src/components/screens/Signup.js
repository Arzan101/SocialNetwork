import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react';

function Signup() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const PostData=()=>{
    fetch("https://localhost:5000/signup")
  }
  return (
    <div className='mycard'>
      <div className='card auth-card input-field' >
         <h2>InstaBook</h2>
          <input type="text" placeholder="Name" value={name}
           onChange ={ (e)=>{setName(e.target.value)}}/>
         <input type="text" placeholder="email" value={email} 
          onChange={(e)=>{setEmail(e.target.value)}}/>
         <input type="text" placeholder="password" value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}/>
         <button 
         class="btn waves-effect waves-light #2196f3 blue"  onClick={()=>PostData()}>Sign Up
         </button>
         <h6>
         <Link to ='/Signin'>Already have an account ?</Link>
         </h6>
      </div>
    </div>
    )
}

export default Signup