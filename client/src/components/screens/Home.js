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
        <i class="material-icons " style={{color:"red"}}>favorite</i>
        <h6>Image Title</h6>
        <p>This is amazing post</p>
        <input type="text" placeholder='add a comment' />
      </div>
     </div>

     <div className='card home-card'>
      <h5>Arzan</h5>
      <div className='card-image'>
        <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="post-pic"/>
      </div>
      <div className='card-content'>
        <i class="material-icons " style={{color:"red"}}>favorite</i>
        <h6>Image Title</h6>
        <p>This is amazing post</p>
        <input type="text" placeholder='add a comment' />
      </div>
     </div>

     <div className='card home-card'>
      <h5>Arzan</h5>
      <div className='card-image'>
        <img src="https://images.unsplash.com/photo-1635373670332-43ea883bb081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="post-pic"/>
      </div>

      <div className='card-content'>
        <i class="material-icons " style={{color:"red"}}>favorite</i>
        <h6>Image Title</h6>
        <p>This is amazing post</p>
        <input type="text" placeholder='add a comment' />
      </div>
     </div>

     <div className='card home-card'>
      <h5>Arzan</h5>
      <div className='card-image'>
        <img src="https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="post-pic"/>
      </div>

      <div className='card-content'>
        <i class="material-icons " style={{color:"red"}}>favorite</i>
        <h6>Image Title</h6>
        <p>This is amazing post</p>
        <input type="text" placeholder='add a comment' />
      </div>
     </div>
    
  </div>
  )
}

export default Home