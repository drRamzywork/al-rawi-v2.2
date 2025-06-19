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

export default function VideoDetails({ dataHistoricalSites, dataSettings }) {
  const router = useRouter();
  const { id } = router.query;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  const city = dataHistoricalSites || [];
  // const videoURL = city?.videos?.media || "";
  const videoURL = "https://suwa.com.sa/v/rawai/vr.mp4";
  const notFound = !city;

  console.log(dataHistoricalSites, "dataHistoricalSites");

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
                media={city?.media}
              />
            )}

            {isDialog && <Dialog setIsDialog={setIsDialog} />}

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

export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  try {
    const res = await fetch(`${apiDomain}/historical-sites`);
    const json = await res.json();

    const paths =
      json?.data?.map((item) => ({
        params: { id: item.id.toString() },
      })) || [];

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Error loading paths", error);
    return { paths: [], fallback: "blocking" };
  }
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

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/router";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./FullScreenVideo.module.scss";
// import Menu from "@/components/DraggableBox/Menu";
// import Menu2 from "@/components/DraggableBox/Menu2";
// import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Head from "next/head";
// import Dialog from "@/components/Challange/Dialog";

// export default function VidoDetails({ dataHistoricalSites }) {
//   console.log(dataHistoricalSites, "dataHistoricalSites");
//   const router = useRouter();
//   const { id } = router.query;
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [pause, setPause] = useState(false);
//   const [showNewMenu, setShowNewMenu] = useState(false);

//   const [isDialog, setIsDialog] = useState(false);

//   const city = dataHistoricalSites;
//   const notFound = !city;

//   useEffect(() => {
//     if (videoRef.current && city) {
//       videoRef.current
//         .play()
//         .then(() => {
//           setIsPlaying(true);
//         })
//         .catch((error) => {
//           console.error("Autoplay blocked:", error);
//           setIsPlaying(false);
//         });
//     }
//   }, [city]); // ✅ التأكد من تشغيل الفيديو عند تغيير `city`

//   // ✅ استمع لحدث `seekVideo` لتغيير وقت الفيديو
//   useEffect(() => {
//     const handleSeek = (event) => {
//       const seekTime = event.detail;
//       if (typeof seekTime !== "number") {
//         console.error("❌ Invalid seek time:", seekTime);
//         return;
//       }
//       console.log("📢 Jumping to:", seekTime);

//       if (videoRef.current) {
//         videoRef.current.currentTime = seekTime;
//         videoRef.current.play(); // ✅ تشغيل الفيديو بعد التغيير
//         setIsPlaying(true); // ✅ تحديث الحالة
//         setShowNewMenu(false); // ✅ إغلاق القوائم
//       }
//     };

//     window.addEventListener("seekVideo", handleSeek);
//     return () => {
//       window.removeEventListener("seekVideo", handleSeek);
//     };
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

//   const siteName = `الراوي | ${city?.name || "غير موجود"}`;
//   const siteDescrription = city
//     ? `استكشف ${city.name} في منطقة ${city.region}`
//     : "لم يتم العثور على الفيديو";
//   const videoURL = city ? city.videos.media : "";
//   const siteURL = "https://alrawi2.suwa.com.sa/";

//   return (
//     <>
//       <Head>
//         <title>{siteName}</title>
//         <meta charSet="UTF-8" />
//         <link rel="icon" href="/assets/imgs/rawi.png" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

//         <meta name="title" content={siteName} />
//         <meta name="description" content={siteDescrription} />
//         <meta property="og:type" content="video.other" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:url" content={videoURL} />
//         <meta property="og:title" content={siteName} />
//         <meta property="og:description" content={siteDescrription} />
//         <meta property="og:video" content={videoURL} />
//         <meta property="og:video:type" content="video/mp4" />
//         <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />
//       </Head>

//       <div className={styles.videoContainer}>
//         {notFound ? (
//           <div className={styles.error}>المدينة غير موجودة</div>
//         ) : (
//           <>
//             <video
//               ref={videoRef}
//               className={styles.video}
//               loop
//               muted={false}
//               playsInline
//               autoPlay
//               onClick={handlePlayPause}
//             >
//               <source src={videoURL} type="video/mp4" />
//             </video>

//             <AnimatePresence>
//               {!isPlaying && (
//                 <motion.div
//                   onClick={handlePlayPause}
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.5 }}
//                   transition={{ duration: 0.3 }}
//                   className={styles.play_btn_container}
//                 >
//                   {!isPlaying && (
//                     <Link
//                       href={`/cities/${id}/video/challenge`}
//                       className={styles.openShowMenu}
//                     >
//                       <IoChevronForwardOutline />
//                     </Link>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <Menu
//               setIsPlaying={setIsPlaying}
//               id={id}
//               isVideoPlaying={isPlaying}
//               setPause={setPause}
//               showNewMenu={showNewMenu}
//               setShowNewMenu={setShowNewMenu}
//               dataAllLandmark={dataHistoricalSites}
//             />
//             <Menu2
//               showNewMenu={showNewMenu}
//               setShowNewMenu={setShowNewMenu}
//               media={dataHistoricalSites?.media}
//             />

//             {isDialog && <Dialog setIsDialog={setIsDialog} />}

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
//                 <h1>{city.name}</h1>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

//   try {
//     const resAllLandmarks = await fetch(`${apiDomain}/historical-sites`, {
//       method: "GET",
//       headers: { " locale": locale },
//     });

//     if (!resAllLandmarks.ok) {
//       throw new Error(
//         `Failed to fetch slugs: ${resAllLandmarks.status} ${resAllLandmarks.statusText}`
//       );
//     }

//     const dataAllLandmarks = await resAllLandmarks.json();

//     if (
//       !dataAllLandmarks ||
//       !dataAllLandmarks.dataAllLandmarks ||
//       !Array.isArray(dataAllLandmarks.dataAllLandmarks)
//     ) {
//       throw new Error("Invalid API response format");
//     }

//     const paths = dataAllLandmarks.data.map((item) => {
//       if (!item.slug || typeof item.slug !== "string") {
//         console.error("Invalid slug item:", item);
//         throw new Error(`Invalid slug in response: ${JSON.stringify(item)}`);
//       }
//       return {
//         params: { id: item.id },
//       };
//     });

//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (error) {
//     console.error("Error in getStaticPaths:", error.message);
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }
// }

// // export async function getStaticProps({ params, locale }) {
// //   const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
// //   const { id } = params;

// //   const resAllLandmark = await fetch(`${apiDomain}/historical-sites/${id}`, {
// //     headers: { locale: locale },
// //   });
// //   const dataAllLandmark = await resAllLandmark.json();

// //   return {
// //     props: {
// //       dataAllLandmark: dataAllLandmark?.data || null,
// //     },
// //     revalidate: 10,
// //   };
// // }

// export async function getStaticProps({ params, locale }) {
//   const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
//   const { id } = params;

//   const resHistoricalSites = await fetch(
//     `${apiDomain}/historical-sites/${id}`,
//     {
//       headers: { locale: locale },
//     }
//   );
//   const dataHistoricalSites = await resHistoricalSites.json();

//   const resTranslations = await fetch(`${apiDomain}/translations`, {
//     headers: { locale: locale },
//   });
//   const dataTranslations = await resTranslations.json();

//   const resSettings = await fetch(`${apiDomain}/settings`, {
//     headers: { locale: locale },
//   });
//   const dataSettings = await resSettings.json();

//   return {
//     props: {
//       dataAllLandmarks: dataAllLandmarks?.data || null,
//       dataTranslations: dataTranslations?.data || null,
//       dataSettings: dataSettings?.data || null,
//       dataHistoricalSites: dataHistoricalSites?.data || null,
//     },
//     revalidate: 10,
//   };
// }
