import Image from "next/image";
import React, { useState } from "react";
import styles from "./index.module.scss";
import homeStyles from "@/styles/Home.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { CiGrid32, CiGrid2V } from "react-icons/ci";
import { getDir } from "@/utils/dir";
import Link from "next/link";
import { useRouter } from "next/router";

const getRandomWidth = (min, max) =>
  Math.floor(Math.random() * (max - min + 40)) + min;

const Cities = ({
  dataTranslations,

  dataAllLandmarks,
}) => {
  const [changeShapes, setChangeShapes] = useState(true);
  const { locale } = useRouter();

  return (
    <section id="cities" className={styles.cities} dir={getDir(locale)}>
      <div className={homeStyles.shape_container3}>
        <Image
          src="/assets/svgs/shape.svg"
          alt="Shape"
          width={100}
          height={100}
        />
      </div>

      <div className={styles.sec_container}>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, type: "tween" }}
          className={styles.sec_title}
        >
          <h3>{dataTranslations["the-most-important-historical-sites"]}</h3>
        </motion.div>

        <div className={styles.icons_container}>
          <div
            className={`${styles.icon} ${changeShapes ? styles.active : ""}`}
            onClick={() => setChangeShapes(true)}
          >
            <CiGrid32 />
          </div>
          <div
            className={`${styles.icon} ${!changeShapes ? styles.active : ""}`}
            onClick={() => setChangeShapes(false)}
          >
            <CiGrid2V />
          </div>
        </div>

        <div className="container">
          {changeShapes ? (
            <div className={styles.boxes_container_mobile}>
              {dataAllLandmarks?.map((city) => (
                <Link
                  key={city?.id}
                  locale={locale}
                  href={`/landmarks/video/${city?.id}`}
                >
                  <motion.div
                    className={styles.box}
                    style={{
                      width: `100%`,
                      height: `${getRandomWidth(144, 340)}px`,
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, type: "tween" }}
                  >
                    <div className={styles.img_container}>
                      <Image
                        src={city?.main_media}
                        alt={city?.title}
                        width={205}
                        height={`${getRandomWidth(144, 340)}`}
                      />
                    </div>
                    <div className={styles.card_top}>
                      <p>{city?.location?.title}</p>
                    </div>
                    <div className={styles.title}>
                      <h5>{city?.title}</h5>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.boxes_container}>
              {dataAllLandmarks?.map((city) => (
                <Link
                  key={city?.id}
                  locale={locale}
                  href={`/landmarks/video/${city?.id}`}
                >
                  <motion.div
                    key={city?.id}
                    locale={locale}
                    className={styles.card}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <div className={styles.img_container}>
                      <div className={styles.card_top}>
                        <p>{city?.location.title}</p>
                      </div>
                      <Image
                        src={city?.main_media}
                        alt={city?.name}
                        width={271.91}
                        height={384.14}
                      />
                    </div>
                    <div className={styles.card_bottom}>
                      <div className={styles.title}>
                        <h6>
                          <strong>{city?.title}</strong>
                        </h6>
                      </div>
                      <div className={styles.explore}>
                        <div className={styles.icon_container}>
                          <IoIosArrowBack />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, translateX: 40 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
        className={styles.swiper_container}
      >
        <div className={`container ${styles.container}`}>
          <Swiper
            spaceBetween={13}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              1: {
                slidesPerView: 1.1,
              },
              400: {
                slidesPerView: 1.1,
              },
            }}
            pagination={{ clickable: true }}
            dir={getDir(locale)}
            modules={[Navigation, FreeMode, Autoplay]}
            className={styles.swiper_contain}
            centeredSlides={false}
            style={{ width: "100%" }}
          >
            {dataAllLandmarks?.map((land, idx) => (
              <SwiperSlide key={land?.id}>
                <Link locale={locale} href={`/landmarks/video/${land.id}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, type: "tween" }}
                    className={styles.card}
                  >
                    <div className={styles.img_container}>
                      <div className={styles.card_top}>
                        <p>معالم</p>
                      </div>
                      <Image
                        src={land?.main_media}
                        alt="Vercel logomark"
                        width={271.91}
                        height={384.14}
                      />
                    </div>

                    <div className={styles.card_bottom}>
                      <div className={styles.title}>
                        <h6>{land?.title}</h6>
                      </div>
                      <div className={styles.desc}>
                        <p>{land?.title2}</p>
                      </div>

                      <div className={styles.explore}>
                        <p>استكشف</p>

                        <div className={styles.icon_container}>
                          <IoIosArrowBack />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Cities;
