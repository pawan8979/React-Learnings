import { useRef, useState, useEffect } from 'react';
import "./Video.scss";
import { gsap } from "gsap";

const Video = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const playRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoHero = gsap.fromTo(
      videoRef.current,
        {
            opacity: 0,
            scale: 0.8,
            ease: "power4",
        },
        {
            opacity:1,
            scale: 1,
            y: 0,
            delay: 1.3,
            duration:0.5,
            ease: "power4",
        }
    );
    return () => {
        videoHero.kill();
    };
}, []
);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Animation on mouse enter
    gsap.to(playRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out", 
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Animation on mouse leave
    gsap.to(playRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power2.in", 
    });
  };

  const handleMouseMove = (e) => {
    // Animation on mouse move
    gsap.to(playRef.current, {
      left: e.clientX-60,
      top: e.clientY-60
    });
  };
  


  return (
    <div 
      ref={videoRef}
      id='videoContainer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={playRef}
        id="play"
      >
        PLAY
      </div>
      <video autoPlay muted src={children}></video>
    </div>
  );
}

export default Video;
