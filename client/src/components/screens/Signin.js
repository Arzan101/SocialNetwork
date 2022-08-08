import React from 'react'

function Signin() {
  return (
  <div className='mycard'>
    <div className='card auth-card'>
       <h2>InstaBook</h2>
       <input type="text" placeholder="email"/>
       <input type="text" placeholder="password"/>
       <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
    </div>
  </div>
  )
}

export default Signin