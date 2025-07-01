import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FullScreenVideo.module.scss";
import Menu from "@/components/DraggableBox/Menu";
import Menu2 from "@/components/DraggableBox/Menu2";
import Dialog from "@/components/Challange/Dialog";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

const City = ({ landmark, dataTranslations }) => {
  const router = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  const notFound = !landmark;
  const videoData = landmark?.videos?.[0];
  const videoURL = videoData?.media || "";
  const isValidVideoURL =
    videoURL && !videoURL.endsWith("/storage/") && videoURL.includes(".mp4");

  const gallery = landmark?.media || [];

  useEffect(() => {
    if (videoRef.current && isValidVideoURL) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [videoURL]);

  useEffect(() => {
    const handleSeek = (event) => {
      const seekTime = event.detail;
      if (typeof seekTime !== "number") return;
      if (videoRef.current) {
        videoRef.current.currentTime = seekTime;
        videoRef.current.play();
        setIsPlaying(true);
        setShowNewMenu(false);
      }
    };

    window.addEventListener("seekVideo", handleSeek);
    return () => window.removeEventListener("seekVideo", handleSeek);
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.videoContainer}>
      {notFound ? (
        <div className={styles.error}>المعلم غير موجود</div>
      ) : (
        <>
          {isValidVideoURL ? (
            <video
              ref={videoRef}
              className={styles.video}
              loop
              playsInline
              autoPlay
              muted={false}
              onClick={handlePlayPause}
            >
              <source src={videoURL} type="video/mp4" />
            </video>
          ) : (
            <div className={styles.noVideoContainer}>
              <img
                src="/assets/svgs/not_available.svg"
                alt="Video not available"
                className={styles.noVideoIcon}
              />
            </div>
          )}

          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                className={styles.play_btn_container}
                onClick={handlePlayPause}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={{
                    pathname: `/landmarks/${id}/video/challenge`,
                    query: {
                      questions: JSON.stringify(
                        Array.isArray(landmark?.questions)
                          ? landmark.questions
                          : []
                      ),
                    },
                  }}
                  className={styles.openShowMenu}
                >
                  <IoChevronForwardOutline />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <Menu
            dataTranslations={dataTranslations}
            id={id}
            isVideoPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setPause={() => {}}
            showNewMenu={showNewMenu}
            setShowNewMenu={setShowNewMenu}
            dataAllLandmark={landmark}
            landmark={landmark}
          />

          <Menu2
            showNewMenu={showNewMenu}
            setShowNewMenu={setShowNewMenu}
            media={Array.isArray(gallery) ? gallery : [gallery]}
          />

          {isDialog && (
            <Dialog
              dataTranslations={dataTranslations}
              landmarkId={landmark.id}
              setIsDialog={setIsDialog}
              questions={landmark?.questions}
            />
          )}

          {!isPlaying && !showNewMenu && (
            <div
              className={styles.openShowMenu}
              onClick={() => setIsDialog(true)}
            >
              <IoChevronForwardOutline />
            </div>
          )}

          {!showNewMenu && (
            <div className={styles.title}>
              <h1>{landmark.title}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default City;

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/router";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./FullScreenVideo.module.scss";
// import Menu from "@/components/DraggableBox/Menu";
// import Menu2 from "@/components/DraggableBox/Menu2";
// import Dialog from "@/components/Challange/Dialog";
// import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";

// const City = ({ landmark, dataTranslations }) => {
//   const router = useRouter();
//   const { id } = router.query;
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showNewMenu, setShowNewMenu] = useState(false);
//   const [isDialog, setIsDialog] = useState(false);

//   const notFound = !landmark;
//   const videoData = landmark?.videos?.[0];
//   const videoURL = videoData?.media || "";

//   console.log(videoURL, "videoURL");
//   // const videoURL = "https://suwa.com.sa/v/rawai/vr.mp4";

//   const gallery = landmark?.media || [];
//   const hasVideo = !!videoData?.media;

//   useEffect(() => {
//     if (videoRef.current && videoURL) {
//       videoRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch(() => setIsPlaying(false));
//     }
//   }, [videoURL]);

//   useEffect(() => {
//     const handleSeek = (event) => {
//       const seekTime = event.detail;
//       if (typeof seekTime !== "number") return;
//       if (videoRef.current) {
//         videoRef.current.currentTime = seekTime;
//         videoRef.current.play();
//         setIsPlaying(true);
//         setShowNewMenu(false);
//       }
//     };

//     window.addEventListener("seekVideo", handleSeek);
//     return () => window.removeEventListener("seekVideo", handleSeek);
//   }, []);

//   const handlePlayPause = () => {
//     if (!videoRef.current) return;
//     isPlaying ? videoRef.current.pause() : videoRef.current.play();
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <div className={styles.videoContainer}>
//         {notFound ? (
//           <div className={styles.error}>المعلم غير موجود</div>
//         ) : (
//           <>
//             {/* <video
//               ref={videoRef}
//               className={styles.video}
//               loop
//               playsInline
//               autoPlay
//               muted={false}
//               onClick={handlePlayPause}
//             >
//               <source src={videoURL} type="video/mp4" />
//             </video> */}

//             {hasVideo ? (
//               <video
//                 ref={videoRef}
//                 className={styles.video}
//                 loop
//                 playsInline
//                 autoPlay
//                 muted={false}
//                 onClick={handlePlayPause}
//               >
//                 <source src={videoURL} type="video/mp4" />
//               </video>
//             ) : (
//               <div className={styles.noVideoContainer}>
//                 <img
//                   src="/assets/svgs/not_available.svg"
//                   alt="Video not available"
//                   className={styles.noVideoIcon}
//                 />
//               </div>
//             )}

//             <AnimatePresence>
//               {!isPlaying && (
//                 <motion.div
//                   className={styles.play_btn_container}
//                   onClick={handlePlayPause}
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.5 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Link
//                     href={{
//                       pathname: `/landmarks/${id}/video/challenge`,
//                       query: {
//                         questions: JSON.stringify(
//                           Array.isArray(landmark?.questions)
//                             ? landmark.questions
//                             : []
//                         ),
//                       },
//                     }}
//                     className={styles.openShowMenu}
//                   >
//                     <IoChevronForwardOutline />
//                   </Link>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <Menu
//               dataTranslations={dataTranslations}
//               id={id}
//               isVideoPlaying={isPlaying}
//               setIsPlaying={setIsPlaying}
//               setPause={() => {}}
//               showNewMenu={showNewMenu}
//               setShowNewMenu={setShowNewMenu}
//               dataAllLandmark={landmark}
//               landmark={landmark}
//             />

//             <Menu2
//               showNewMenu={showNewMenu}
//               setShowNewMenu={setShowNewMenu}
//               media={Array.isArray(gallery) ? gallery : [gallery]}
//             />

//             {isDialog && (
//               <Dialog
//                 dataTranslations={dataTranslations}
//                 landmarkId={landmark.id}
//                 setIsDialog={setIsDialog}
//                 questions={landmark?.questions}
//               />
//             )}

//             {!isPlaying && !showNewMenu && (
//               <div
//                 className={styles.openShowMenu}
//                 onClick={() => setIsDialog(true)}
//               >
//                 <IoChevronForwardOutline />
//               </div>
//             )}

//             {!showNewMenu && (
//               <div className={styles.title}>
//                 <h1>{landmark.title}</h1>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default City;
