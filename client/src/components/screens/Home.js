import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='card home-card'>
            <h5>Jone James</h5>
            <div className='card-image'>
                <img src="https://source.unsplash.com/random/10" alt="post" />
            </div>
            <div className='card-content'>
              <i className="material-icons" style={{color:"red"}}>favorite</i>
              <h6>Title</h6>
              <p>this is amazing post</p>
              <input type="text" placeholder='add a comment' />
            </div>
      </div>
      <div className='card home-card'>
            <h5>Jone James</h5>
            <div className='card-image'>
                <img src="https://source.unsplash.com/random/11" alt="post" />
            </div>
            <div className='card-content'>
              <i className="material-icons" style={{color:"red"}}>favorite</i>
              <h6>Title</h6>
              <p>this is amazing post</p>
              <input type="text" placeholder='add a comment' />
            </div>
      </div>
      <div className='card home-card'>
            <h5>Jone James</h5>
            <div className='card-image'>
                <img src="https://source.unsplash.com/random/12" alt="post" />
            </div>
            <div className='card-content'>
              <i className="material-icons" style={{color:"red"}}>favorite</i>
              <h6>Title</h6>
              <p>this is amazing post</p>
              <input type="text" placeholder='add a comment' />
            </div>
      </div>
    </div>
  )
}

export default Home