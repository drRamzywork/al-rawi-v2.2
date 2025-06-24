// pages/cities/video/[id].js
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

export default function VideoDetails({
  dataHistoricalSites,
  dataSettings,
  dataTranslations,
}) {
  const router = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  const city = dataHistoricalSites || [];
  const videoURL = city?.video || "";
  // const videoURL = "https://suwa.com.sa/v/rawai/vr.mp4";
  const notFound = !city;

  useEffect(() => {
    if (videoRef.current && city) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [city]);

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
    city?.title || "غير موجود"
  }`;
  const siteDescription = city
    ? ` ${city.desc}   `
    : "لم يتم العثور على الفيديو";

  const siteURL = "https://alrawi2.suwa.com.sa/";

  console.log(city, "city");
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
                  <Link href={`/cities/${id}/video/challenge`}>
                    <IoChevronForwardOutline />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <Menu
              city={city}
              dataTranslations={dataTranslations}
              id={id}
              isVideoPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setPause={() => {}}
              showNewMenu={showNewMenu}
              setShowNewMenu={setShowNewMenu}
              dataAllLandmark={city}
            />

            {city?.media && (
              <Menu2
                showNewMenu={showNewMenu}
                setShowNewMenu={setShowNewMenu}
                // media={city?.media}

                media={Array.isArray(city?.media) ? city.media : []}
              />
            )}

            {isDialog && (
              <Dialog
                dataTranslations={dataTranslations}
                setIsDialog={setIsDialog}
                questions={
                  Array.isArray(dataHistoricalSites?.questions)
                    ? dataHistoricalSites.questions
                    : []
                }
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

// export async function getStaticPaths() {
//   const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

//   try {
//     const res = await fetch(`${apiDomain}/historical-sites`);
//     const json = await res.json();

//     const paths =
//       json?.data?.map((item) => ({
//         params: { id: item.id.toString() },
//       })) || [];

//     return { paths, fallback: "blocking" };
//   } catch (error) {
//     console.error("Error loading paths", error);
//     return { paths: [], fallback: "blocking" };
//   }
// }

export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const [langsRes, citiesRes] = await Promise.all([
    fetch(`${apiDomain}/languages`),
    fetch(`${apiDomain}/historical-sites`),
  ]);

  const langsJson = await langsRes.json();
  const citiesJson = await citiesRes.json();

  const langs = langsJson?.data || [];
  const cities = citiesJson?.data || [];

  const paths = [];

  langs.forEach((lang) => {
    cities.forEach((city) => {
      paths.push({
        params: {
          locale: lang.code,
          id: city.id.toString(),
        },
      });
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const { id } = params;

  try {
    const [resData, resTranslations, resSettings] = await Promise.all([
      fetch(`${apiDomain}/historical-sites/${id}`, {
        headers: { locale },
      }),
      fetch(`${apiDomain}/translations`, {
        headers: { locale },
      }),
      fetch(`${apiDomain}/settings`, {
        headers: { locale },
      }),
    ]);

    const [dataHistoricalSites, dataTranslations, dataSettings] =
      await Promise.all([
        resData.json(),
        resTranslations.json(),
        resSettings.json(),
      ]);

    return {
      props: {
        dataHistoricalSites: dataHistoricalSites?.data || null,
        dataTranslations: dataTranslations?.data || null,
        dataSettings: dataSettings?.data || null,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error loading props:", error);
    return {
      props: {
        dataHistoricalSites: null,
        dataTranslations: null,
        dataSettings: null,
      },
      revalidate: 10,
    };
  }
}
