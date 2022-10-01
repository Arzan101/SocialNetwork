import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    const navigate = useNavigate();
   
    useEffect(()=>{
        fetch("/createpost",{
            method:"post",
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title:title,
                body:body,
                pic:url
            })
        }).then(res=>res.json)
        .then(data=>{ 
            console.log(data);
            if(data.error){
              M.toast({html: data.error, classes:"#b71c1c red darken-4"})
            }
            else{
              M.toast({html:"Successully Post Created", classes:"#43a047 green darken-1"})
            }
          }).catch(err=>{
            console.log(err)
          })
    },[body, navigate, title, url])

    const postDetails= ()=>{
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","instabooksite");
        
        fetch("https://api.cloudinary.com/v1_1/instabookcloud101/image/upload/",{
        method:"post",
        body:data })
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             //setUrl(data.url);
        })
        .catch(err=>{
            console.log(data);
        })
    }

  return (
    <div className='card input-field'
    style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center"
    }}
    >
        <input 
        type="text" 
        placeholder='title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input 
        type="text" 
        placeholder='body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        <div className="file-field input-field">
            <div className="btn">
                <span>Upload Image</span>
                <input 
                type="file" 
                onChange={(e)=>setImage(e.target.files[0])}
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>
        
        <button className="btn waves-effect waves-light #2196f3 blue darken-1"
         onClick={()=>postDetails()}>Submit Post</button>
    </div>
  )
}

export default CreatePost