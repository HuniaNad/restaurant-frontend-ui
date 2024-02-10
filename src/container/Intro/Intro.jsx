import React from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo( (prevPlayVideo) => !prevPlayVideo )

    if(playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  
  return (
  <div className='app__video'>
    <video 
      src={meal} 
      ref={vidRef}
      typeof='video/mp4'
      loop
      controls="false"
      muted      
    />

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>

        {playVideo 
        ? (
          <BsPauseCircle color="#fff" fontSize={30} /> 
          ) : <BsPlayCircle color="#fff" fontSize={30} />
        }

      </div>
    </div>
  </div>
);}

export default Intro;
