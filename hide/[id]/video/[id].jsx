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
import Menu3 from "@/components/DraggableBox/Menu3";
import Dialog from "@/components/Challange/Dialog";

export default function VidoDetails() {
  const router = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pause, setPause] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);

  const [isDialog, setIsDialog] = useState(false);

  const city = cityData.find((c) => c.id.toString() === id);
  const notFound = !city;

  useEffect(() => {
    if (videoRef.current && city) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Autoplay blocked:", error);
          setIsPlaying(false);
        });
    }
  }, [city]); // ✅ التأكد من تشغيل الفيديو عند تغيير `city`

  // ✅ استمع لحدث `seekVideo` لتغيير وقت الفيديو
  useEffect(() => {
    const handleSeek = (event) => {
      const seekTime = event.detail;
      if (typeof seekTime !== "number") {
        console.error("❌ Invalid seek time:", seekTime);
        return;
      }

      if (videoRef.current) {
        videoRef.current.currentTime = seekTime;
        videoRef.current.play();
        setIsPlaying(true);
        setShowNewMenu(false);
      }
    };

    window.addEventListener("seekVideo", handleSeek);
    return () => {
      window.removeEventListener("seekVideo", handleSeek);
    };
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

  const siteName = `الراوي | ${city?.name || "غير موجود"}`;
  const siteDescrription = city
    ? `استكشف ${city.name} في منطقة ${city.region}`
    : "لم يتم العثور على الفيديو";
  const videoURL = city ? city.videoURL : "";
  const siteURL = "https://alrawi2.suwa.com.sa/";
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/assets/imgs/rawi.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
                    <Link
                      href={`/cities/${id}/video/challenge`}
                      className={styles.openShowMenu}
                    >
                      <IoChevronForwardOutline />
                    </Link>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <Menu
              setIsPlaying={setIsPlaying}
              id={id}
              isVideoPlaying={isPlaying}
              setPause={setPause}
              showNewMenu={showNewMenu}
              setShowNewMenu={setShowNewMenu}
            />
            <Menu2 showNewMenu={showNewMenu} setShowNewMenu={setShowNewMenu} />

            {isDialog && (
              <Dialog
                setIsDialog={setIsDialog}
                questions={landmark.questions || []}
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
                <h1>{city.name}</h1>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
