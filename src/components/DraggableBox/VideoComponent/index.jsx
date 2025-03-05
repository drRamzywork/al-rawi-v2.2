
import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss';

const VideoComponent = ({ currentVideo, muted
  , setMuted, isClosed, pause, showElements, isVideoPlaying
  , setIsVideoPlaying
  , }) => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.pause();
  };
  const handleUnmute = () => {
    if (videoRef.current) {
      setMuted(false)

      videoRef.current.play();
      if (muted === true) {
        // videoRef.current.muted = false;
      }

    }
  };



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });

      const video = videoRef.current;

      // if (isClosed === false) {
      //   videoRef.current.pause();
      // }

      const handlePlay = () => {
        setIsVideoPlaying(true);
      };

      const handlePause = () => {
        setIsVideoPlaying(false);
      };


      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      if (pause === true) {
        videoRef.current.pause();
      }


      if (showElements === true) {
        videoRef.current.pause();
      }

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };

    }

  }, [currentVideo, muted, isClosed, showElements, pause, setIsVideoPlaying]);






  return (
    <>
      <div className={styles.video_container} onClick={handleUnmute}>
        <video
          key={currentVideo}
          ref={videoRef}
          className={styles.videoElement}
          src={currentVideo}
          controls
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>
    </>
  )
}

export default VideoComponent


