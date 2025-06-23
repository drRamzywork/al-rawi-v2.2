import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FullScreenVideo.module.scss";
import Menu from "@/components/DraggableBox/Menu";
import Menu2 from "@/components/DraggableBox/Menu2";
import Dialog from "@/components/Challange/Dialog";
import Link from "next/link";
import Head from "next/head";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function LandmarkVideo({
  landmark,
  dataSettings,
  dataTranslations,
}) {
  const router = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  const notFound = !landmark;
  const videoData = landmark?.videos?.[0];
  const videoURL = videoData?.media || "";
  // const videoURL = "https://suwa.com.sa/v/rawai/vr.mp4";

  const gallery = landmark?.media || [];

  useEffect(() => {
    if (videoRef.current && videoURL) {
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

  const siteName = `${dataSettings?.site_title} | ${
    landmark?.title || "غير موجود"
  }`;
  const siteDescription = landmark
    ? ` ${landmark.desc}   `
    : "لم يتم العثور على الفيديو";

  const siteURL = "https://alrawi2.suwa.com.sa/";
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:video:type" content="video/mp4" />
        <meta
          property="og:image"
          content={landmark?.main_media || `${siteURL}/video-thumbnail.jpg`}
        />
      </Head>

      <div className={styles.videoContainer}>
        {notFound ? (
          <div className={styles.error}>المعلم غير موجود</div>
        ) : (
          <>
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
    </>
  );
}

export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  try {
    const res = await fetch(`${apiDomain}/landmarks`);
    const json = await res.json();
    const paths =
      json?.data?.map((item) => ({
        params: { id: item.id.toString() },
      })) || [];
    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Error in getStaticPaths:", error.message);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params, locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const { id } = params;

  try {
    const res = await fetch(`${apiDomain}/landmarks/${id}`, {
      headers: { locale },
    });
    const json = await res.json();

    const resSettings = await fetch(`${apiDomain}/settings`, {
      headers: { locale: locale },
    });
    const dataSettings = await resSettings.json();

    const resTranslations = await fetch(`${apiDomain}/translations`, {
      headers: { locale: locale },
    });
    const dataTranslations = await resTranslations.json();
    return {
      props: {
        landmark: json?.data || null,
        dataSettings: dataSettings?.data || null,
        dataTranslations: dataTranslations?.data || null,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error loading landmark:", error);
    return {
      props: {
        landmark: null,
        dataSettings: null,
        dataTranslations: null,
      },
      revalidate: 10,
    };
  }
}
