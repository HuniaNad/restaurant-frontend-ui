import React from 'react';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo( (prevPlayVideo) => !prevPlayVideo )

    let videoOverlay = document.getElementsByClassName("app__video-overlay")[0]

    if(playVideo) {
      videoOverlay.classList.remove("play")
      vidRef.current.pause()
    } else {
      videoOverlay.classList.add("play")
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
      controls={false}
      muted      
    />

    <div className="app__video-overlay flex__center" onClick={handleVideo}>
      <div className="app__video-overlay_circle flex__center">

        {playVideo 
        ? (
          <BsPauseFill color="#fff" fontSize={30} /> 
          ) : <BsPlayFill color="#fff" fontSize={30} />
        }

      </div>
    </div>
  </div>
);}

export default Intro;
