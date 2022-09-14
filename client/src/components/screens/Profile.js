//Client/components/screen/Profile.js
import React from 'react'

function Profile() {
  return (
    <div style={{
      maxWidth: "550px",
      margin: "0px auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "18px 0px",
        borderBottom: "1px solid grey"
      }}>
        <div>
            <img style={{width:"160px", height: "160px", borderRadius:"80px"}}
            src="https://scontent.fbom2-2.fna.fbcdn.net/v/t1.6435-9/144013642_3932523263466298_82468898311729607_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qSB6-mmvzGcAX-nZj-2&_nc_ht=scontent.fbom2-2.fna&oh=00_AT8PRbKq0nhct_yXUimhCenws1ajFO7b5Z6IMIweOCb1AQ&oe=62D5AB31" alt="profile pic" />
        </div>
        <div>
          <h4>Profile Name</h4>
            <div style={{display:"flex",
              justifyContent:"space-between",
              width: "110%"
              }}>
              <h5>40 posts</h5>
              <h5>102M followers</h5>
              <h5>21 following</h5>
            </div>
        </div>
      </div>

      <div className='gallary'>
          <img className= "item" src="https://images.unsplash.com/photo-1661115111521-5d4f24529260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1663108002891-c692911e2c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1659923183026-0721b7b6b053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1660315999670-1d5beab50d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1655114722721-5c75114be5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1663034087336-88cad97e81cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnx2UC1nazdPMVFSTXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1655813710718-00043b177128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwM3xDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="gallarypic" />    
      </div>
    </div>
  )
}

export default Profile