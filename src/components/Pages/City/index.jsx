import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FullScreenVideo.module.scss";
import Menu from "@/components/DraggableBox/Menu";
import Menu2 from "@/components/DraggableBox/Menu2";
import Dialog from "@/components/Challange/Dialog";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { getDir } from "@/utils/dir";

const City = ({ landmark, dataTranslations }) => {
  const router = useRouter();
  const { locale } = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);

  // حالات التشغيل والوقت
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const videoData = landmark?.videos?.[0];
  const videoURL = videoData?.media || "";
  const isValidVideoURL =
    videoURL && !videoURL.endsWith("/storage/") && videoURL.includes(".mp4");

  const formatTime = (t) => {
    const m = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (videoRef.current && isValidVideoURL) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [videoURL, isValidVideoURL]);

  // استماع لتحديث الوقت لعرض التايمر
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onTimeUpdate = () => setCurrentTime(vid.currentTime);
    vid.addEventListener("timeupdate", onTimeUpdate);
    return () => vid.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  // باقي الحالات للقوائم والديايولوج
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  //  التشغيل/الإيقاف
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // استماع لأحداث التنقل داخل الفيديو
  useEffect(() => {
    const handleSeek = (event) => {
      const t = event.detail;
      if (typeof t === "number" && videoRef.current) {
        videoRef.current.currentTime = t;
        videoRef.current.play();
        setIsPlaying(true);
        setShowNewMenu(false);
      }
    };
    window.addEventListener("seekVideo", handleSeek);
    return () => window.removeEventListener("seekVideo", handleSeek);
  }, []);

  // عرض المكوّن
  if (!landmark) {
    return <div className={styles.error}>المعلم غير موجود</div>;
  }

  return (
    <div className={styles.videoContainer} dir={getDir(locale)}>
      {/* تايمر الفيديو */}

      {isValidVideoURL ? (
        <>
          <div className={styles.timer}>{formatTime(currentTime)}</div>

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
        </>
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
                    Array.isArray(landmark?.questions) ? landmark.questions : []
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

      {/* القوائم الأخرى */}
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
        media={
          Array.isArray(landmark?.media) ? landmark.media : [landmark.media]
        }
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
        <div className={styles.openShowMenu} onClick={() => setIsDialog(true)}>
          <IoChevronForwardOutline />
        </div>
      )}

      {!showNewMenu && (
        <div className={styles.title}>
          <h1>{landmark.title}</h1>
        </div>
      )}
    </div>
  );
};

export default City;
