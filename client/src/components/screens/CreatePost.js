import React from 'react'

function CreatePost() {
  return (
    <div className='card input-field'>
       <input type="text" placeholder='title' />
       <input type="text" placeholder='body' />
       <form action="#">
       <div classclassName="file-field input-field">
         <div classclassName="btn">
           <span>File</span>
           <input type="file"/>
          </div>
         <div classclassName="file-path-wrapper">
           <input classclassName="file-path validate" type="text"/>
         </div>
       </div>
     </form>
    </div>
  )
}

export default CreatePost