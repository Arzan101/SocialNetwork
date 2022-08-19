import React,{useState} from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

function Signup() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const PostData=()=>{
    fetch("/signup",{
      method:"post",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:"",
        email:"",
        password:""
      })
    }).then(res=>res.json())
      .then(data=> {
        if(data.error){
          M.toast({html: data.error,classes:"#f44336 red"})
        }
        else{
          M.toast({html: data.message,classes:"#4caf50 green"})
        }
      })
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
         className="btn waves-effect waves-light #2196f3 blue"  onClick={()=>PostData()}>Sign Up
         </button>
         <h6>
         <Link to ='/Signin'>Already have an account ?</Link>
         </h6>
      </div>
    </div>
    )
}

export default Signup