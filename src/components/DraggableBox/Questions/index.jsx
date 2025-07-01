import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./index.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Questions = ({
  questions,
  id,
  landmark,
  setQuestions,
  setShowNewMenu,
  setPause,
  setIsPlaying,
  dataTranslations,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(questions ? "visible" : "hidden");
  }, [questions, controls]);

  const handleClick = (time) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("seekVideo", { detail: time }));
      console.log(window, "time");
    }
    setQuestions(false); // ✅ إغلاق الأسئلة
    setShowNewMenu(false); // ✅ إغلاق القوائم الأخرى
    setPause(false); // ✅ التأكد من أن الفيديو سيعمل
    setIsPlaying(true); // ✅ تحديث حالة الفيديو إلى "تشغيل"
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={controls}
        className={styles.container}
        transition={{
          type: "spring",
          damping: 60,
          stiffness: 400,
          duration: 4.5,
        }}
        variants={{
          visible: { y: "0%", opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        id="menu2"
        dir="rtl"
        style={{
          position: "fixed",
          top: "10%",
          left: "6%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "600px",
          height: "60%",
          maxHeight: "700px",
          overflowY: "auto",
          overflowX: "unset",
          borderRadius: "13px",
          zIndex: 55,
          padding: "14px",
        }}
      >
        {questions && (
          <div className={styles.content}>
            <div className={styles.boxes_container}>
              <Link
                href={`/cities/${id}/video`}
                className={styles.box}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(0); // ✅ Jump to 00:00
                }}
              >
                {console.log(landmark, "landmark 2")}
                {landmark?.videos?.map((video, vIndex) =>
                  video.video_attrs?.map((vid, index) => {
                    const [min, sec] = vid.time.split(":").map(Number);
                    const timeInSeconds = (min || 0) * 60 + (sec || 0);

                    return (
                      <Link
                        key={`${vIndex}-${index}`}
                        href={`/cities/${id}/video`}
                        className={styles.box}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(timeInSeconds);
                        }}
                      >
                        <div className={styles.info_container}>
                          <div className={styles.img_container}>
                            <img
                              src={
                                video?.icon || "/assets/imgs/questions/1.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className={styles.text_container}>
                            <div className={styles.title}>
                              <h3>
                                {vid.title} ({vid.time})
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className={styles.link_container}>
                          <p>{dataTranslations?.skip_to_time}</p>
                          <div className={styles.icon_container}>
                            <IoIosArrowBack />
                          </div>
                        </div>
                      </Link>
                    );
                  })
                )}
              </Link>

              {/* <Link
                href={`/cities/${id}/video`}
                className={styles.box}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(20); // ✅ Jump to 00:20
                }}
              >
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3> حدث تاريخي (00:20)</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.link_container}>
                  <p>تعرف</p>
                  <div className={styles.icon_container}>
                    <IoIosArrowBack />
                  </div>
                </div>
              </Link>

              <Link
                href={`/cities/${id}/video`}
                className={styles.box}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(108); // ✅ Jump to 01:48
                }}
              >
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3> 1203هـ.. البداية (01:48)</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.link_container}>
                  <p>تعرف</p>
                  <div className={styles.icon_container}>
                    <IoIosArrowBack />
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Questions;
