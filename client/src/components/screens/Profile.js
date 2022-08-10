import React from 'react'

function Profile() {
  return (
    <div>
     <div
     style={
      {
       display:'flex',
       justifyContent:"space-around",
       margin:"15px 0px"
      }
     }
     >
       <div>

        <img
        
        style={
          {
            width:"160px",
            height:"160px",
            borderRadius:"80px",

          }

        }
        src="https://images.unsplash.com/photo-1655114722721-5c75114be5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profile"/>
       </div>

       <div>
        <h4>Arzan Khan</h4>
       </div>
     </div>
    </div>
  )
}

export default Profile