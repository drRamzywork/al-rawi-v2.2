// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import styles from './index.module.scss';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import { IoClose } from "react-icons/io5";
// import Link from 'next/link';

// const Menu3 = ({ showNewMenu, setShowNewMenu, }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     if (showNewMenu) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, showNewMenu]);







//   return (
//     <>
//       {showNewMenu && (
//         <div className={styles.layer} onClick={() => setShowNewMenu(false)} />
//       )}


//       <motion.div
//         initial="hidden"
//         animate={controls}
//         className={styles.container}
//         transition={{
//           type: 'spring',
//           damping: 40,
//           stiffness: 400,
//         }}
//         variants={{
//           visible: { y: '0%', opacity: 1 },
//           hidden: { y: '-100%', opacity: 0 },
//         }}

//         id="menu"
//         dir="rtl"
//       >


//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 1, type: "tween" }}
//           whileInView={{ opacity: 1, }}
//           className={styles.box_container}>
//           <div className={styles.close_icon} onClick={() => setShowNewMenu(false)}>
//             <IoClose />
//           </div>

//           <div className="title">
//             <p>استكشف معلوماتك حول هذا المعلم؟</p>
//           </div>


//           <div className="btns_container">
//             <Link href='/cities/2/video'>لا</Link>
//             <Link href='/cities/2/video'>لا</Link>
//           </div>

//         </motion.div>

//       </motion.div>
//     </>
//   );
// };

// export default Menu3;


// import React, { useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import styles from './index.module.scss';
// import { IoClose } from "react-icons/io5";
// import Link from 'next/link';

// const Menu3 = ({ isPlaying, setIsPlaying }) => {




//   return (
//     <>

//       {!isPlaying &&

//         <>
//           <div className={styles.layer} onClick={() => setIsPlaying(true)} />


//           <motion.div
//             className={styles.container}
//             transition={{
//               type: 'spring',
//               damping: 40,
//               stiffness: 400,
//             }}
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ opacity: 1, scale: 1, }}

//             id="menu"
//             dir="rtl"
//           >

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0 }}
//               transition={{ duration: 1, type: "tween" }}
//               whileInView={{ opacity: 1, }}
//               className={styles.box_container}>
//               <div onClick={() => setIsPlaying(true)} href={`/cities/2/video`} className={styles.close_icon} >
//                 <IoClose />
//               </div>

//               <div className={styles.title}>
//                 <p>استكشف معلوماتك حول هذا المعلم؟</p>
//               </div>

//               <div className={styles.btns_container}>
//                 <Link href='/cities/2'><p>لا</p></Link>
//                 <Link href='/challenge' ><p>تحدى الآن</p></Link>
//               </div>

//             </motion.div>

//           </motion.div>
//         </>

//       }
//     </>
//   );
// };

// export default Menu3;



import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Menu3 = ({ isVideoPlaying, showNewMenu, handleCloseAndPlay }) => {
  return (
    <>
      {!isVideoPlaying && !showNewMenu && (
        <>
          <motion.div
            className={styles.container}
            transition={{
              type: 'spring',
              damping: 40,
              stiffness: 400,
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            id="menu"
            dir="rtl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className={styles.box_container}
            >
              <div onClick={handleCloseAndPlay} className={styles.close_icon}>
                <IoClose />
              </div>
              <div className={styles.title}>
                <p>استكشف معلوماتك حول هذا المعلم؟</p>
              </div>
              <div className={styles.btns_container}>
                <Link href={`/`} onClick={handleCloseAndPlay}><p>لا</p></Link>
                <Link href='/challenge'><p>نعم</p></Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Menu3;
