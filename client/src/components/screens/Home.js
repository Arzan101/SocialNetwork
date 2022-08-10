import React from 'react'

function Home() {
  return (
  <div className='home'>
     <div className='card home-card'>
      <h5>Arzan</h5>
      <div className='card-image'>
        <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="post-pic"/>
      </div>

      <div className='card-content'>
        <h6>Image Title</h6>
        <p>This is amazing post</p>
        <input type="text" placeholder='add a comment' />
      </div>
     </div>
    
  </div>
  )
}

export default Home