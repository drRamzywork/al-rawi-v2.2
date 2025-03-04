import React, { useState } from 'react';
import styles from './index.module.scss';
import VideoComponent from './VideoComponent';
import Menu from './Menu';
import Menu2 from './Menu2';
import { IoChevronForwardOutline } from 'react-icons/io5';
import Link from 'next/link';

const DraggableBox = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [currentVideo, setCurrentVideo] = useState('https://suwa.com.sa/v/rawai/f.mp4');
  const [muted, setMuted] = useState(true);
  const [showElements, setShowElements] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [pause, setPause] = useState(false);
  const [isMenu, setIsMenu] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // New state to track video play/pause

  return (
    <div className={styles.main_container}>
      {showNewMenu !== true && showElements !== true && !isVideoPlaying && (
        <Link href="/" className={styles.openShowMenu}>
          <IoChevronForwardOutline />

        </Link>
      )}

      <VideoComponent
        muted={muted}
        setMuted={setMuted}
        isClosed={isClosed}
        currentVideo={currentVideo}
        setIsClosed={setIsClosed}
        showNewMenu={showNewMenu}
        setShowNewMenu={setShowNewMenu}
        pause={pause}
        setPause={setPause}
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        isVideoPlaying={isVideoPlaying} // Pass the play state
        setIsVideoPlaying={setIsVideoPlaying} // Pass the setter function to update it
      />

      <Menu
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        showElements={showElements}
        setShowElements={setShowElements}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}
        setShowNewMenu={setShowNewMenu}
        setPause={setPause}
        isVideoPlaying={isVideoPlaying}
      />

      <Menu2
        showNewMenu={showNewMenu}
        setShowNewMenu={setShowNewMenu}
        setIsClosed={setIsClosed}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}
        currentVideo={currentVideo}
      />
    </div>
  );
};

export default DraggableBox;
