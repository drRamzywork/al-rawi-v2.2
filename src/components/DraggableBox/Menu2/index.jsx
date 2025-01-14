import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";

const Menu2 = ({ showNewMenu, setShowNewMenu, }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (showNewMenu) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, showNewMenu]);




  // Swiper Logic

  const data = [
    { img: '/assets/imgs/menu2/1.png' },
    { img: '/assets/imgs/menu2/2.png' },
    { img: '/assets/imgs/menu2/3.png' },
    { img: '/assets/imgs/menu2/4.png' },
  ]

  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };
  return (
    <>
      {showNewMenu && (
        <div className={styles.layer} onClick={() => setShowNewMenu(false)} />
      )}


      <motion.div
        initial="hidden"
        animate={controls}
        className={styles.container}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: '0%', opacity: 1 },
          hidden: { y: '-100%', opacity: 0 },
        }}

        id="menu"
        dir="rtl"
      >





        <div className={styles.swiper_container}>
          <div className={styles.close_icon} onClick={() => setShowNewMenu(false)}>
            <IoClose />
          </div>

          <motion.div
            key={activeSlide}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className={styles.active_swiper}>
            <img src={data[activeSlide].img} alt="" />
          </motion.div>
          <Swiper
            spaceBetween={11}
            slidesPerView={4.1}
            pagination={{ clickable: true }}
            dir="rtl"
            modules={[Navigation, FreeMode, Autoplay]}
            initialSlide={1}
            className={styles.swiper_contain}
            centeredSlides={true}
            style={{ width: '100%' }}
            // autoplay={{
            //   delay: 3000
            // }}
            // loop={true}
            // slidesPerView={3}
            onSwiper={(swiper) => swiperRef.current = swiper}
            onSlideChange={handleSlideChange}

          >
            {data?.map((box, index) => (
              <SwiperSlide key={index} >
                <motion.div
                  onClick={() => handleSlideClick(index)}

                  initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }}

                  className={`${styles.img_container} ${activeSlide === index ? styles.active : ''}`}
                >
                  <Image
                    src={box.img}
                    alt=""
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
            ))}








          </Swiper>
        </div>
      </motion.div>
    </>
  );
};

export default Menu2;

