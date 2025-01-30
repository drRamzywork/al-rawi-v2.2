
// export default function Challenge() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const [pause, setPause] = useState(false);
//   const [showNewMenu, setShowNewMenu] = useState(false);

//   // Attempt to autoplay the video when the component mounts
//   useEffect(() => {
//     const attemptAutoplay = async () => {
//       if (videoRef.current) {
//         try {
//           await videoRef.current.play();
//           setIsPlaying(true);
//         } catch (error) {
//           console.error("Autoplay with sound failed:", error);
//           // Autoplay with sound was blocked, show a play button
//           setIsPlaying(false);
//         }
//       }
//     };

//     attemptAutoplay();
//   }, []);

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



//   const siteName = '  الراوي |  قصور عروة  ';
//   const imagePath = '/assets/imgs/rawi.png';
//   const siteDescrription = 'استكشف عالم الجمال في المملكة';

//   const siteURL = 'https://alrawi2.suwa.com.sa/';
//   const videoURL = 'https://suwa.com.sa/v/rawai/f.mp4';


//   return (

//     <>
//       <Head>
//         <title>{siteName}</title>
//         <meta charSet="UTF-8" />
//         <link rel="icon" href="/logo.png" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

//         <meta name="title" content={siteName} />
//         <meta name="description" content={siteDescrription} />
//         <meta property="og:type" content="video.other" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:locale" content="ar" />
//         <meta property="og:locale:alternate" content="ar" />
//         <meta property="og:url" content={videoURL} />
//         <meta property="og:title" content={siteName} />
//         <meta property="og:description" content={siteDescrription} />
//         <meta property="og:video" content={videoURL} />
//         <meta property="og:video:secure_url" content={videoURL} />
//         <meta property="og:video:type" content="video/mp4" />
//         <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />

//         <meta name="twitter:card" content="player" />
//         <meta name="twitter:title" content={siteName} />
//         <meta name="twitter:description" content={siteDescrription} />
//         <meta name="twitter:player" content={videoURL} />
//         <meta name="twitter:player:width" content="1280" />
//         <meta name="twitter:player:height" content="720" />
//         <meta name="twitter:image" content={`${siteURL}/video-thumbnail.jpg`} />

//         <link rel="canonical" href={videoURL} />
//       </Head>


//       <div className={styles.videoContainer}>
//         <video
//           ref={videoRef}
//           className={styles.video}
//           loop
//           muted={false} // Ensure the video is unmuted
//           playsInline
//           autoPlay // Attempt to autoplay
//           onClick={handlePlayPause}
//           onLoadedData={() => setIsPlaying(true)} // Update state when video is ready
//         >
//           <source src={'https://suwa.com.sa/v/rawai/f.mp4'} type="video/mp4" />
//         </video>



//         <Menu3 showNewMenu={showNewMenu}
//           setShowNewMenu={setShowNewMenu} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

//         {!isPlaying && !showNewMenu && (
//           <Link href="/cities/2/video" className={styles.openShowMenu}>
//             <IoChevronForwardOutline />
//           </Link>
//         )}

//         {!showNewMenu &&
//           <div className={styles.title}>
//             <h1>قصور عروة</h1>
//           </div>
//         }
//       </div>
//     </>

//   );
// }


// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./index.module.scss";
// import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Head from "next/head";
// import Menu3 from "@/components/DraggableBox/Menu3";


// export default function Challenge() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const attemptAutoplay = async () => {
//       if (videoRef.current) {
//         try {
//           await videoRef.current.play();
//           setIsPlaying(true);
//         } catch (error) {
//           console.error("Autoplay with sound failed:", error);
//           setIsPlaying(false);
//         }
//       }
//     };

//     attemptAutoplay();
//   }, []);

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
//     <>
//       <div className={styles.videoContainer}>
//         <video
//           ref={videoRef}
//           className={styles.video}
//           loop
//           playsInline
//           autoPlay
//           muted={false}
//           onClick={handlePlayPause}
//           onLoadedData={() => setIsPlaying(true)}
//         >
//           <source src={'https://suwa.com.sa/v/rawai/f.mp4'} type="video/mp4" />
//         </video>

//         {/* Show Menu3 only if the video is NOT playing */}
//         {!isPlaying && <Menu3 setIsPlaying={setIsPlaying} videoRef={videoRef} />}

//         {!isPlaying && (
//           <Link href="/cities/2/video" className={styles.openShowMenu}>
//             <IoChevronForwardOutline />
//           </Link>
//         )}

//         {!isPlaying && (
//           <div className={styles.title}>
//             <h1>قصور عروة</h1>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./index.module.scss";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import Head from "next/head";
import Menu3 from "@/components/DraggableBox/Menu3";

export default function Challenge() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMenu, setShowMenu] = useState(true); // State to control menu visibility
  const videoRef = useRef(null);
  const [showNewMenu, setShowNewMenu] = useState(false);

  useEffect(() => {
    const attemptAutoplay = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
          setShowMenu(false); // Hide menu when video starts playing
        } catch (error) {
          console.error("Autoplay with sound failed:", error);
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
        setShowNewMenu(false)
      } else {
        videoRef.current.play();
        setShowNewMenu(true)
      }
      setIsPlaying(!isPlaying);
    }
  };


  const handleCloseAndPlay = () => {
    setShowNewMenu(true);
    handlePlayPause();
  };

  const siteName = '  الراوي | تحدي قصور عروة  ';
  const imagePath = '/assets/imgs/rawi.png';
  const siteDescrription = 'استكشف عالم الجمال في المملكة';

  const siteURL = 'https://alrawi2.suwa.com.sa/';
  const videoURL = 'https://suwa.com.sa/v/rawai/f.mp4';


  return (
    <>



      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href={imagePath} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="title" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <meta property="og:type" content="video.other" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={videoURL} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:video:secure_url" content={videoURL} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescrription} />
        <meta name="twitter:player" content={videoURL} />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        <meta name="twitter:image" content={`${siteURL}/video-thumbnail.jpg`} />

        <link rel="canonical" href={videoURL} />
      </Head>

      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          loop
          playsInline
          autoPlay
          muted={false}
          onClick={handlePlayPause}
          onLoadedData={() => setIsPlaying(true)}
        >
          <source src={'https://suwa.com.sa/v/rawai/f.mp4'} type="video/mp4" />
        </video>

        {/* Show Menu3 only if the video is NOT playing and showMenu is true */}
        {/* {!isPlaying && showMenu && <Menu3 setIsPlaying={setIsPlaying} setShowMenu={setShowMenu} videoRef={videoRef} />} */}

        <Menu3 isVideoPlaying={isPlaying}
          showNewMenu={showNewMenu}
          handleCloseAndPlay={handleCloseAndPlay}
        />

        {!isPlaying && showMenu && (
          <Link href="/cities/2/video" className={styles.openShowMenu}>
            <IoChevronForwardOutline />
          </Link>
        )}

        {!isPlaying && showMenu && (
          <div className={styles.title}>
            <h1>قصور عروة</h1>
          </div>
        )}
      </div>
    </>
  );
}