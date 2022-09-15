//Client/src/compenents/screens/CreatePost.js
import React, { useState } from "react";

function CreatePost() {
      const[title,setTitle]=useState("");
      const[body,setBody]=useState("");
      const[image,setImage]=useState("");
  return (
    <div className="card input-field auth-card">

      <input 
       type="text" 
       placeholder="Title" 
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
      />
      <input
       type="text" 
       placeholder="body" 
       value={body}
       onChange={(e)=>setBody(e.target.value)}
       />

      <div className="file-field input-field">
        <div className="btn">
          <span>UPLOAD IMAGE</span>
          <input
           type="file"
           onChange={(e)=> setImage(e.target.files)[0]}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button class="btn waves-effect waves-light blue" type="submit">Submit Post</button>

    </div>
  );
}

export default CreatePost;
