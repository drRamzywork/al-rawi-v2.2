// // import React from 'react'


// // import dynamic from "next/dynamic";

// // const DraggableBox = dynamic(() => import("@/components/DraggableBox"), {
// //   ssr: false,
// // });
// // const CityVideo = () => {
// //   return (
// //     <>

// //       <DraggableBox />

// //     </>
// //   )
// // }

// // export default CityVideo



// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play } from "lucide-react";
// import styles from "./FullScreenVideo.module.scss";
// import { GiClick } from "react-icons/gi";
// import Menu from "@/components/DraggableBox/Menu";
// import Menu2 from "@/components/DraggableBox/Menu2";
// import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";

// export default function FullScreenVideo() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const [pause, setPause] = useState(false);
//   const [showNewMenu, setShowNewMenu] = useState(false);

//   const handlePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className={styles.videoContainer}>
//       <video
//         ref={videoRef}
//         className={styles.video}
//         loop
//         muted={false}
//         playsInline
//         onClick={handlePlayPause}

//       >
//         <source src={'https://suwa.com.sa/v/rawai/f.mp4'} type="video/mp4" />
//       </video>

//       <AnimatePresence>

//         {!isPlaying && (
//           <>
//             <motion.div
//               onClick={handlePlayPause}
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.5 }}
//               transition={{ duration: 0.3 }}
//               className={styles.play_btn_container}>

//               {!isPlaying && (
//                 <Link href="/cities/2" className={styles.openShowMenu}>
//                   <IoChevronForwardOutline />
//                 </Link>
//               )}



//               {/* <Menu2
//                 showNewMenu={showNewMenu}
//                 setShowNewMenu={setShowNewMenu}
//                 setIsClosed={setIsClosed}
//                 setCurrentVideo={setCurrentVideo}
//                 setMuted={setMuted}
//                 currentVideo={currentVideo}
//               /> */}



//             </motion.div>


//           </>
//         )}
//       </AnimatePresence>


//       <Menu
//         isVideoPlaying={isPlaying}
//         pause={pause}
//         setPause={setPause}
//         showNewMenu={showNewMenu}
//         setShowNewMenu={setShowNewMenu}
//       />

//       <Menu2 showNewMenu={showNewMenu} setShowNewMenu={setShowNewMenu} />


//       {!isPlaying && (
//         <Link href="/cities/2" className={styles.openShowMenu}>
//           <IoChevronForwardOutline />
//         </Link>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import styles from "./FullScreenVideo.module.scss";
import { GiClick } from "react-icons/gi";
import Menu from "@/components/DraggableBox/Menu";
import Menu2 from "@/components/DraggableBox/Menu2";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function FullScreenVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [pause, setPause] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);

  // Attempt to autoplay the video when the component mounts
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Autoplay with sound failed:", error);
          // Autoplay with sound was blocked, show a play button
          setIsPlaying(false);
        }
      }
    };

    attemptAutoplay();
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        loop
        muted={false} // Ensure the video is unmuted
        playsInline
        autoPlay // Attempt to autoplay
        onClick={handlePlayPause}
        onLoadedData={() => setIsPlaying(true)} // Update state when video is ready
      >
        <source src={'https://suwa.com.sa/v/rawai/f.mp4'} type="video/mp4" />
      </video>

      <AnimatePresence>
        {!isPlaying && (
          <>
            <motion.div
              onClick={handlePlayPause}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className={styles.play_btn_container}
            >
              {!isPlaying && (
                <Link href="/cities/2" className={styles.openShowMenu}>
                  <IoChevronForwardOutline />
                </Link>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Menu
        isVideoPlaying={isPlaying}
        pause={pause}
        setPause={setPause}
        showNewMenu={showNewMenu}
        setShowNewMenu={setShowNewMenu}
      />

      <Menu2 showNewMenu={showNewMenu} setShowNewMenu={setShowNewMenu} />

      {!isPlaying && (
        <Link href="/cities/2" className={styles.openShowMenu}>
          <IoChevronForwardOutline />
        </Link>
      )}
    </div>
  );
}