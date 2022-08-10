import React from 'react'

function Profile() {
  return (
    <div>
     <div
     style={
      {
       display:'flex',
       justifyContent:"space-around",
       margin:"18px 0px",
       borderBottom:"1px solid grey"
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
          <div style={
            {
            display:"flex",
            justifyContent:"space-between",
            width:"110%"
          }
        }>
           <h5>111 Post</h5>
           <h5>22.5M Followers</h5>
           <h5>5 Following</h5>
          
          </div>
       </div>
     </div>
    </div>
  )
}

export default Profile