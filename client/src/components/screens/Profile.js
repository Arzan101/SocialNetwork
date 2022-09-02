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
              <h5>500 followers</h5>
              <h5>21 following</h5>
            </div>
        </div>
      </div>

      <div className='gallary'>
          <img className= "item" src="https://source.unsplash.com/random/11" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/12" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/13" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/14" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/15" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/16" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/17" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/18" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/19" alt="gallarypic" />    
      </div>
    </div>
  )
}

export default Profile