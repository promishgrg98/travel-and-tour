import React from 'react';
import './home.css';
import video1 from '../../Assets/video1.mp4';

function Home() {
  return (
    <section className='home'>
        <div className='overlay'></div>
        <video src={video1} muted autoPlay loop type='video/mp4'></video>
    </section>
  )
}

export default Home;