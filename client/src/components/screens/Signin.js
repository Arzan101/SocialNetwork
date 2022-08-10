import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
  <div className='mycard'>
    <div className='card auth-card input-field' >
       <h2>InstaBook</h2>
       <input type="text" placeholder="email"/>
       <input type="text" placeholder="password"/>
       <button class="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">
        Sign In</button>
        <h6>
        <Link to ='/signup'> Register to create account</Link>
         </h6>
    </div>
  </div>
  )
}

export default Signin