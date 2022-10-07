  //PATH [] = Client/src/components/Signin.js
  import React from 'react';
  import { Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import { useState,useContext } from 'react';
  import { UserContext } from '../../App';
  import M from 'materialize-css';

  function Signin() {
    const {state,dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    //creating network request
    const PostData=()=>{//eslint-disable-next-line
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "Invalid Email Id", classes:"#b71c1c red darken-4"});
        return;
      }
        fetch("/signin",{   //fetch(para1,para2)
        method: "post",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          password,
          email
        })
      }).then(res=>res.json())
      .then(data=>{ 
        console.log(data);
        if(data.error){
          M.toast({html: data.error, classes:"#b71c1c red darken-4"})
        }
        else{
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          dispatch({type:"USER" ,payload:data.user})
          M.toast({html:"Successully Signed In", classes:"#43a047 green darken-1"})
          navigate('/')
        }
      }).catch(err=>{
        console.log(err)
      })
    }

    return (
      <div className='mycard'>
        <div className='card auth-card input-field'>
            <h2>InstaBook</h2>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input  type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn waves-effect waves-light #2196f3 blue" 
            onClick={()=>PostData()}>Sign In</button>
            <h6>
              <Link to='/signup'> Already have account ? </Link>
            </h6>
        </div>
      </div>
    )
  }

  export default Signin