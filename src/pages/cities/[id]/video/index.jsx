"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FullScreenVideo.module.scss";
import Menu from "@/components/DraggableBox/Menu";
import Menu2 from "@/components/DraggableBox/Menu2";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import Head from "next/head";
import cityData from "@/data/cities";

export default function FullScreenVideo() {
  const router = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pause, setPause] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);



  const city = cityData.find((c) => c.id.toString() === id);

  const notFound = !city;

  useEffect(() => {
    if (videoRef.current && city) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Autoplay blocked:", error);
        setIsPlaying(false);
      });
    }
  }, [videoRef, city]); // ✅ تشغيل التأثير فقط عندما تتغير `city`

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

  const siteName = `الراوي | ${city?.name || "غير موجود"}`;
  const siteDescrription = city ? `استكشف ${city.name} في منطقة ${city.region}` : "لم يتم العثور على الفيديو";
  const videoURL = city ? city.videoURL : "";
  const siteURL = "https://alrawi2.suwa.com.sa/";

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/assets/imgs/rawi.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="title" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <meta property="og:type" content="video.other" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={videoURL} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />
      </Head>

      <div className={styles.videoContainer}>
        {notFound ? (
          <div className={styles.error}>المدينة غير موجودة</div>
        ) : (
          <>
            <video
              ref={videoRef}
              className={styles.video}
              loop
              muted={false}
              playsInline
              autoPlay
              onClick={handlePlayPause}
            >
              <source src={videoURL} type="video/mp4" />
            </video>

            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  onClick={handlePlayPause}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className={styles.play_btn_container}
                >
                  {!isPlaying && (
                    <Link href={`/cities/${id}/video/challenge`} className={styles.openShowMenu}>
                      <IoChevronForwardOutline />
                    </Link>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <Menu id={id} isVideoPlaying={isPlaying} setPause={setPause} showNewMenu={showNewMenu} setShowNewMenu={setShowNewMenu} />
            <Menu2 showNewMenu={showNewMenu} setShowNewMenu={setShowNewMenu} />

            {!isPlaying && !showNewMenu && (
              <Link href={`/cities/${id}/video/challenge`} className={styles.openShowMenu}>
                <IoChevronForwardOutline />
              </Link>
            )}

            {!showNewMenu && (
              <div className={styles.title}>
                <h1>{city.name}</h1>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play } from "lucide-react";
// import styles from "./FullScreenVideo.module.scss";
// import { GiClick } from "react-icons/gi";
// import Menu from "@/components/DraggableBox/Menu";
// import Menu2 from "@/components/DraggableBox/Menu2";
// import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Head from "next/head";

// export default function FullScreenVideo() {
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
//         <link rel="icon" href={imagePath} />
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

//         <AnimatePresence>
//           {!isPlaying && (
//             <>
//               <motion.div
//                 onClick={handlePlayPause}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.5 }}
//                 transition={{ duration: 0.3 }}
//                 className={styles.play_btn_container}
//               >
//                 {!isPlaying && (
//                   <Link href="/cities/2/video/challenge" className={styles.openShowMenu}>
//                     <IoChevronForwardOutline />
//                   </Link>
//                 )}
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>

//         <Menu
//           isVideoPlaying={isPlaying}
//           setPause={setPause}
//           showNewMenu={showNewMenu}
//           setShowNewMenu={setShowNewMenu}
//         />

//         <Menu2 showNewMenu={showNewMenu} setShowNewMenu={setShowNewMenu} />

//         {!isPlaying && !showNewMenu && (
//           <Link href="/cities/2/video/challenge" className={styles.openShowMenu}>
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



