
import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaBook</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="btn waves-effect waves-light" type="submit">
          Sign In </button>
          <h5><Link to="/signup">Register to create an account</Link></h5>
      </div>
    </div>
  );
}

export default Signin;
