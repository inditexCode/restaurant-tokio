import React, { useRef } from 'react';
import './Header.css'; 
import bgVideo from './video/bg_video.mp4';  

const Header = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;  // Reinicia al inicio del video
    videoRef.current.play();  // Vuelve a reproducir automáticamente
  };

  return (
    <div className="contenedor-header">
      <div className="video-container">
        <video ref={videoRef} className="fullscreen-video" controls autoPlay muted loop onEnded={handleVideoEnded}>
          <source src={bgVideo} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
}

export default Header;


