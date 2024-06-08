import React from 'react';
import './home.css';
import video1 from '../../Assets/video1.mp4';

function Home() {
  return (
    <section className='home'>
        <div className='overlay'></div>
        <video src={video1} muted autoPlay loop type='video/mp4'></video>

        <div className='homeContent container'>
          <div className='textDiv'>
            <span className='smallText'>Our Packages</span>
            <h1 className='homeTitle'>Search your Holiday</h1>
          </div>
        </div>
    </section>
  )
}

export default Home;