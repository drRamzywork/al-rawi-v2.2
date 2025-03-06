// import React, { useRef, useState } from 'react';
// import styles from './index.module.scss';
// import Image from 'next/image';
// import { IoIosArrowDown } from "react-icons/io";
// import Link from 'next/link';
// import { motion } from "framer-motion";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';

// const sliders = [
//   {
//     type: 'video', // ✅ Mark this as a video
//     videoUrl: 'https://suwa.com.sa/v/rawai/h1.mp4'
//   },
//   { title: '', img: '/assets/imgs/cities/qassim_shanana.jpg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
//   { title: '', img: '/assets/imgs/cities/baha_dhee_ain.jpeg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
//   { title: '', img: '/assets/imgs/menu2/1.jpg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
//   { title: '', img: '/assets/imgs/bg3.jpeg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
//   { title: '', img: '/assets/imgs/bg4.png', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
// ];

// const Hero = () => {
//   const swiperRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setCurrentIndex(swiper.realIndex);
//   };

//   const pagination = {
//     clickable: true,
//     type: 'bullets',
//     renderBullet: (index, className) => `<span class="${className}"></span>`,
//   };

//   return (
//     <section id='hero' className={styles.hero}>
//       <div className={styles.main_image_slider}>
//         {sliders[currentIndex].type === 'video' ? (
//           <motion.video
//             src={sliders[0].videoUrl}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             width="100%"
//             height="100%"
//             key="video"
//             className={styles.videoBackground}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, type: 'tween' }}
//           />
//         ) : (
//           <motion.img
//             src={sliders[currentIndex].img}
//             alt={'slide.title'}
//             width={1200}
//             height={800}
//             key={currentIndex}
//             initial={{ scale: 1.5, opacity: 0.8 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             exit={{ scale: 0 }}
//             transition={{ duration: 2, type: 'tween' }}
//           />
//         )}
//         <div className={styles.overlay} />
//       </div>

//       <div className="container mt-5 pt-5">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={0}
//           autoplay={{ delay: 8000, disableOnInteraction: false }}
//           pagination={pagination}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//           ref={swiperRef}
//           onSlideChange={handleSlideChange}
//         >
//           {sliders.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div className={styles.sec_container}>
//                 <div className={styles.title}>
//                   <motion.h1
//                     initial={{ opacity: 0, translateY: 10 }}
//                     whileInView={{ opacity: 1, translateY: 0 }}
//                     transition={{ duration: 1.7, type: "tween" }}
//                   >
//                     استكشف عالم <br /> الجمال في المملكة
//                   </motion.h1>

//                   <motion.div
//                     initial={{ opacity: 0, translateY: -10 }}
//                     whileInView={{ opacity: 1, translateY: 0 }}
//                     transition={{ duration: 1.7, type: "tween" }}
//                     className={styles.shape}
//                   >
//                     <Image
//                       src="/assets/svgs/text_shape.svg"
//                       alt="Vercel logomark"
//                       width={100}
//                       height={100}
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <motion.div
//           initial={{ opacity: 0, translateY: -50 }}
//           whileInView={{ opacity: 1, translateY: 0 }}
//           transition={{ duration: 0.7, type: "tween" }}
//           className={styles.btn_container}
//         >
//           <Link href={'#cities'}>
//             <p>تعرف الآن</p>
//             <div className={styles.icon_container}>
//               <IoIosArrowDown />
//             </div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const sliders = [
  {
    type: 'video', // ✅ Mark this as a video
    videoUrl: 'https://suwa.com.sa/v/rawai/h1.mp4'
  },
  { title: '', img: '/assets/imgs/cities/qassim_shanana.jpg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
  { title: '', img: '/assets/imgs/cities/baha_dhee_ain.jpeg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
  { title: '', img: '/assets/imgs/menu2/1.jpg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
  { title: '', img: '/assets/imgs/bg3.jpeg', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
  { title: '', img: '/assets/imgs/bg4.png', desc: 'من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا' },
];

const Hero = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };


  const pagination = {
    clickable: true,
    type: 'bullets',
    renderBullet: (index, className) => `<span class="${className}"></span>`,
  };

  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.main_image_slider}>
        {sliders[currentIndex].type === 'video' ? (
          <motion.video
            src={sliders[0].videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
            height="100%"
            key="video"
            className={styles.videoBackground}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: 'tween' }}
          />
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ scale: 1.5, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 2, type: 'tween' }}
            style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
          >
            <Image
              src={sliders[currentIndex].img}
              alt={sliders[currentIndex].title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        )}
        <div className={styles.overlay} />
      </div>

      <div className="container mt-5 pt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          ref={swiperRef}
          onSlideChange={handleSlideChange}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.sec_container}>
                <div className={styles.title}>
                  <motion.h1
                    initial={{ opacity: 0, translateY: 10 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.7, type: "tween" }}
                  >
                    استكشف عالم <br /> الجمال في المملكة
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, translateY: -10 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.7, type: "tween" }}
                    className={styles.shape}
                  >
                    <Image
                      src="/assets/svgs/text_shape.svg"
                      alt="Vercel logomark"
                      width={100}
                      height={100}
                    />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, type: "tween" }}
          className={styles.btn_container}
        >
          <Link href={'#cities'}>
            <p>تعرف الآن</p>
            <div className={styles.icon_container}>
              <IoIosArrowDown />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;