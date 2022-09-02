//[] client: srcc/components/screens/Signup.js
import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import M from 'materialize-css'

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    fetch("/signup",{
      method:"post",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
        
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"#f44336 red"})
       
      }
      else{
        M.toast({html: data.message,classes:"#4caf50 green"})
        navigate('/signin');
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaBook</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn waves-effect waves-light" onClick={()=>PostData()} >Sign Up</button>
        <h5>
          <Link to="/signin">Already have an account</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;
