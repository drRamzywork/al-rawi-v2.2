import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import Questions from "../Questions";
import { getDir } from "@/utils/dir";
import { useRouter } from "next/router";

const Menu = ({
  isVideoPlaying,
  showNewMenu,
  id,
  setPause,
  setIsPlaying,
  setShowNewMenu,
  dataAllLandmark,
  dataTranslations,
  landmark,
  city,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [currentState, setCurrentState] = useState("");
  const [isClient, setIsClient] = useState(false);
  const { locale } = useRouter();
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);
  useEffect(() => {
    controls.start(readMore ? "visible" : "hidden");
  }, [readMore, controls]);

  // const handleShare = async () => {
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: "Check this out!",
  //         url: window.location.href,
  //       });
  //     } catch (error) {
  //       console.error("Error sharing:", error);
  //     }
  //   } else {
  //     // Fallback: Copy the URL to clipboard
  //     navigator.clipboard
  //       .writeText(window.location.href)
  //       .then(() => {
  //         alert("Link copied to clipboard! You can share it manually.");
  //       })
  //       .catch((err) => {
  //         console.error("Could not copy link:", err);
  //       });
  //   }
  // };

  const handleShare = async () => {
    const title = landmark?.title || "Check this out!";
    const text = landmark?.desc || "Amazing landmark video";
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  const links = [
    {
      title: dataTranslations["imgs"],
      img: "/assets/svgs/navbar/gallery.svg",
      onClick: () => {
        setCurrentState("Gallery");
        setShowNewMenu((prev) => !prev);
        setQuestions(false);
        setReadMore(false);
      },
    },
    {
      title: dataTranslations["learn-more"],
      img: "/assets/svgs/navbar/square.svg",
      onClick: () => {
        setCurrentState("LearnMore");
        setReadMore((prev) => !prev);
        setShowNewMenu(false);
        setQuestions(false);
      },
    },
    {
      title: "",
      img: "/assets/svgs/navbar/mark.svg",
      onClick: () => {
        setQuestions((prev) => !prev);
        setShowNewMenu(false);
        setReadMore(false);
      },
    },
    {
      title: dataTranslations["location"],
      img: "/assets/svgs/navbar/location.svg",
      onClick: () => {
        setCurrentState("Location");
        window.open(dataAllLandmark?.location_url, "_blank");
      },
    },
    {
      title: dataTranslations["share"],
      img: "/assets/svgs/navbar/share.svg",
      onClick: handleShare,
    },
  ];

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: "10%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "600px",
          height: "60%",
          maxHeight: "700px",
          overflowY: "auto",
          overflowX: "unset",
          boxShadow:
            "0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)",
          borderRadius: "13px",
          zIndex: 55,
          background: "#00000080",
          padding: "14px",
        }}
        initial="hidden"
        animate={controls}
        className={styles.container}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: "0%", opacity: 1 },
          hidden: { y: "-300%", opacity: 0 },
        }}
        id="menu"
        dir="rtl"
      >
        {readMore && (
          <div className={styles.content} dir={getDir(locale)}>
            <div
              className={styles.close_icon}
              onClick={() => setReadMore(false)}
            >
              <IoClose />
            </div>

            <div className={styles.sec_title}>
              <h1>{dataAllLandmark?.title}</h1>
            </div>
            <div className={styles.imgs_container}>
              <div className={styles.main_img}>
                <img
                  src={
                    Array.isArray(dataAllLandmark?.media)
                      ? dataAllLandmark.media[0]
                      : dataAllLandmark?.media
                  }
                  alt={dataAllLandmark?.title}
                />
              </div>
            </div>

            <div className={styles.title}>
              <p>
                {dataAllLandmark?.long_desc?.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    <br />
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {readMore && (
        <div className={styles.layer} onClick={() => setReadMore(false)} />
      )}

      {/* Navigation links */}
      {!isVideoPlaying && !showNewMenu && (
        <div className={styles.nav_container} dir={getDir(locale)}>
          <div className="container">
            <div className={styles.sec_container}>
              <ul>
                {links.map((link, idx) => (
                  <li key={idx} onClick={link.onClick}>
                    <div className={styles.icon_container}>
                      <img src={link.img} alt={link.title} />
                    </div>
                    <div className={styles.title}>
                      <p>{link.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Questions
        landmark={landmark}
        questions={questions}
        id={id}
        dataTranslations={dataTranslations}
        setQuestions={setQuestions}
        setShowNewMenu={setShowNewMenu}
        setPause={setPause}
        setIsPlaying={setIsPlaying}
      />
    </>
  );
};

export default Menu;
