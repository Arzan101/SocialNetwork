//Client/src/compenents/screens/CreatePost.js
import React from "react";

function CreatePost() {
  return (
    <div className="card input-field auth-card">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="body" />

      <div className="file-field input-field">
        <div className="btn">
          <span>UPLOAD IMAGE</span>
          <input type="file" />
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
