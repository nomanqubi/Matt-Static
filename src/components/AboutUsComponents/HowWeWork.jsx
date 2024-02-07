import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "../../styles/AboutUs.css";
import pic from "../../images/How We Work.png";
import playButtonIcon from "../../images/orange orange.png";

const HowWeWork = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <div className='how-we-work-main'>
      <h1 className='pt-4'>How We Work</h1>
      <p>You offer a good product, make advertising, analyze the market but still have no improvement? </p>
      <div className="image-container">
        {!isVideoPlaying ? (
          <>
            <img src={pic} alt='how we work' onClick={handlePlayVideo} style={{ cursor: 'pointer' }} />
            <div className="play-button" onClick={handlePlayVideo} style={{ cursor: 'pointer' }}>
              <img src={playButtonIcon} alt='play' color='orange' style={{ borderRadius: '50%' }} />
            </div>
          </>
        ) : (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-v2uwpK5yCA"
            playing
            controls
            width="800px"
            height="400px"
          />
        )}
      </div>
    </div>
  );
}

export default HowWeWork;

