import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react';

function Signup() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,SetPassword]=useState("");
  return (
    <div className='mycard'>
      <div className='card auth-card input-field' >
         <h2>InstaBook</h2>
         <input type="text" placeholder="Name" value={name} />
         <input type="text" placeholder="email" value={email}/>
         <input type="text" placeholder="password" value={password}/>
         <button class="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">Sign Up</button>
         <h6>
         <Link to ='/Signin'>Already have an account ?</Link>
         </h6>
      </div>
    </div>
    )
}

export default Signup