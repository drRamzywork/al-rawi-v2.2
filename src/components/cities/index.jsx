// import Image from 'next/image'
// import React from 'react'
// import { IoLocationOutline } from "react-icons/io5";
// import styles from './index.module.scss'
// import homeStyles from '@/styles/Home.module.scss'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, FreeMode } from 'swiper/modules';
// import { IoIosArrowBack } from "react-icons/io";
// import { motion } from "framer-motion";
// import Link from 'next/link';
// const cityData = [
//   {
//     id: 1,
//     name: "المدينة المنورة",
//     location: "الجوف",
//     imgSrc: "/assets/imgs/cities/9.png",
//     link: "/cities/2/video"
//   },
//   {
//     id: 2,
//     name: "الرياض",
//     location: "بئر الفقير",
//     imgSrc: "/assets/imgs/6.jpeg",
//     link: "/cities/2/video"
//   },
//   {
//     id: 3,
//     name: "تبوك",
//     location: "قصر عروة",
//     imgSrc: "/assets/imgs/bg1.png",
//     link: "/cities/2/video"
//   },
//   {
//     id: 4,
//     name: "حائل",
//     location: "جبل جبة",
//     imgSrc: "/assets/imgs/bg1.png",
//     link: "/cities/2/video"
//   }
// ];


// const Cities = () => {
//   const getRandomWidth = (min, max) => Math.floor(Math.random() * (max - min + 40)) + min;

//   return (
//     <>
//       <section id='cities' className={styles.cities}>
//         <div className={homeStyles.shape_container3}>
//           <Image
//             src="/assets/svgs/shape.svg"
//             alt="Vercel logomark"
//             width={100}
//             height={100}
//           />
//         </div>
//         <div className={styles.sec_container}>
//           <motion.div
//             initial={{ opacity: 0, translateY: -10 }}
//             whileInView={{ opacity: 1, translateY: 0 }}
//             transition={{ duration: 0.7, type: "tween" }} className={styles.sec_title}>
//             <h3>أهم المواقع التاريخية </h3>

//           </motion.div>


//           <div className="container">
//             <div className={styles.boxes_container}>



//               <motion.a href='/cities/2/video' initial={{ opacity: 0, translateY: -10 }}
//                 whileInView={{ opacity: 1, translateY: 0 }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>المدينة المنورة</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/cities/9.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>

//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>الجوف</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>



//               </motion.a>


//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p> الرياض</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/6.jpeg"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>




//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>بئر الفقير </strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>

//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>

//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>تبوك</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/bg1.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>





//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>قصر عروة</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>

//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>حائل</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/bg1.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>





//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>جبل جبة</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>


//               <motion.a href='/cities/2/video' initial={{ opacity: 0, translateY: -10 }}
//                 whileInView={{ opacity: 1, translateY: 0 }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>المدينة المنورة</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/cities/9.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>

//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>الجوف</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>



//               </motion.a>


//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p> الرياض</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/6.jpeg"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>




//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>بئر الفقير </strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>

//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>

//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>تبوك</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/bg1.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>





//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>قصر عروة</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>

//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>حائل</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/bg1.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>





//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>جبل جبة</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>


//               <motion.a href='/cities/2/video' initial={{ opacity: 0, translateY: -10 }}
//                 whileInView={{ opacity: 1, translateY: 0 }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>المدينة المنورة</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/cities/9.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>

//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>الجوف</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>



//               </motion.a>


//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p> الرياض</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/6.jpeg"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>




//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>بئر الفقير </strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>

//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>

//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>تبوك</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/bg1.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>





//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>قصر عروة</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>

//               <motion.a href='/cities/2/video' initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//                 <div className={styles.img_container}>
//                   <div className={styles.card_top}>
//                     <p>حائل</p>
//                   </div>
//                   <Image
//                     src="/assets/imgs/bg1.png"
//                     alt="Vercel logomark"
//                     width={271.91}
//                     height={384.14}
//                   />
//                 </div>





//                 <div className={styles.card_bottom}>
//                   <div className={styles.title}>

//                     <h6>
//                       <strong>جبل جبة</strong>


//                     </h6>
//                   </div>

//                   <div className={styles.explore}>
//                     <div className={styles.icon_container}>
//                       <IoIosArrowBack />
//                     </div>

//                   </div>
//                 </div>

//               </motion.a>







//             </div>


//             <div className={styles.boxes_container_mobile}>
//               <Link href={'/cities/2/video'}
//                 className={styles.box}
//                 style={{
//                   width: `100%`,
//                   height: `${getRandomWidth(144, 340)}px`,
//                 }}>

//                 <div className={styles.img_container}>
//                   <img src={'/assets/imgs/bg1.png'} alt={`حائل`} />
//                 </div>

//                 <div className={styles.title}>
//                   <h5>حائل </h5>
//                 </div>

//               </Link>


//               <Link href={'/cities/2/video'}
//                 className={styles.box}
//                 style={{
//                   width: `100%`,
//                   height: `${getRandomWidth(144, 340)}px`,
//                 }}>

//                 <div className={styles.img_container}>
//                   <img src={'/assets/imgs/bg1.png'} alt={`حائل`} />
//                 </div>

//                 <div className={styles.title}>
//                   <h5>حائل </h5>
//                 </div>

//               </Link>
//               <Link href={'/cities/2/video'}
//                 className={styles.box}
//                 style={{
//                   width: `100%`,
//                   height: `${getRandomWidth(144, 340)}px`,
//                 }}>

//                 <div className={styles.img_container}>
//                   <img src={'/assets/imgs/bg1.png'} alt={`حائل`} />
//                 </div>

//                 <div className={styles.title}>
//                   <h5>حائل </h5>
//                 </div>

//               </Link>        <Link href={'/cities/2/video'}
//                 className={styles.box}
//                 style={{
//                   width: `100%`,
//                   height: `${getRandomWidth(144, 340)}px`,
//                 }}>

//                 <div className={styles.img_container}>
//                   <img src={'/assets/imgs/bg1.png'} alt={`حائل`} />
//                 </div>

//                 <div className={styles.title}>
//                   <h5>حائل </h5>
//                 </div>

//               </Link>        <Link href={'/cities/2/video'}
//                 className={styles.box}
//                 style={{
//                   width: `100%`,
//                   height: `${getRandomWidth(144, 340)}px`,
//                 }}>

//                 <div className={styles.img_container}>
//                   <img src={'/assets/imgs/bg1.png'} alt={`حائل`} />
//                 </div>

//                 <div className={styles.title}>
//                   <h5>حائل </h5>
//                 </div>

//               </Link>

//             </div>

//           </div>




//         </div>


// <motion.div initial={{ opacity: 0, translateX: 40 }}
//   whileInView={{ opacity: 1, translateX: 0 }}
//   transition={{ duration: 0.7, type: "tween" }} className={styles.swiper_container}>



//   <div className={`container ${styles.container}`}>

//     <Swiper
//       spaceBetween={13}

//       breakpoints={{
//         1: {
//           slidesPerView: 1.3
//         },
//         400: {
//           slidesPerView: 1.4

//         }
//       }}
//       pagination={{ clickable: true }}
//       dir="rtl"
//       modules={[Navigation, FreeMode]}
//       className={styles.swiper_contain}
//       centeredSlides={false}
//       style={{ width: '100%' }}

//     >
//       <SwiperSlide>
//         <motion.a href='/cities/2' initial={{ opacity: 0, }}
//           whileInView={{ opacity: 1, }}
//           transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//           <div className={styles.img_container}>
//             <div className={styles.card_top}>
//               <p>معالم</p>
//             </div>
//             <Image
//               src="/assets/imgs/cities/9.png"
//               alt="Vercel logomark"
//               width={271.91}
//               height={384.14}
//             />
//           </div>

//           <div className={styles.card_bottom}>
//             <div className={styles.title}>

//               <h6>
//                 <strong>قصر عروة</strong>
//                 <br />

//                 <span>
//                   المدينة المنورة
//                   <IoLocationOutline />

//                 </span>

//               </h6>
//             </div>

//             <div className={styles.explore}>
//               <p>استكشف</p>

//               <div className={styles.icon_container}>
//                 <IoIosArrowBack />
//               </div>

//             </div>
//           </div>



//         </motion.a>

//       </SwiperSlide>

//       <SwiperSlide>
//         <motion.a href='/cities/2' initial={{ opacity: 0, }}
//           whileInView={{ opacity: 1, }}
//           transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//           <div className={styles.img_container}>
//             <div className={styles.card_top}>
//               <p> معالم</p>
//             </div>
//             <Image
//               src="/assets/imgs/6.jpeg"
//               alt="Vercel logomark"
//               width={271.91}
//               height={384.14}
//             />
//           </div>




//           <div className={styles.card_bottom}>
//             <div className={styles.title}>

//               <h6>
//                 <strong>بئر الفقير </strong>
//                 <br />

//                 <span>
//                   المدينة المنورة
//                   <IoLocationOutline />

//                 </span>

//               </h6>
//             </div>

//             <div className={styles.explore}>
//               <p>استكشف</p>

//               <div className={styles.icon_container}>
//                 <IoIosArrowBack />
//               </div>

//             </div>
//           </div>

//         </motion.a>

//       </SwiperSlide>

//       <SwiperSlide>
//         <motion.a href='/cities/2' initial={{ opacity: 0, }}
//           whileInView={{ opacity: 1, }}
//           transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
//           <div className={styles.img_container}>
//             <div className={styles.card_top}>
//               <p>معالم</p>
//             </div>
//             <Image
//               src="/assets/imgs/bg1.png"
//               alt="Vercel logomark"
//               width={271.91}
//               height={384.14}
//             />
//           </div>





//           <div className={styles.card_bottom}>
//             <div className={styles.title}>

//               <h6>
//                 <strong>قصر عروة</strong>
//                 <br />

//                 <span>
//                   المدينة المنورة
//                   <IoLocationOutline />

//                 </span>

//               </h6>
//             </div>

//             <div className={styles.explore}>
//               <p>استكشف</p>

//               <div className={styles.icon_container}>
//                 <IoIosArrowBack />
//               </div>

//             </div>
//           </div>

//         </motion.a>

//       </SwiperSlide>



//     </Swiper>

//   </div>
// </motion.div>
//       </section>
//     </>
//   )
// }

// export default Cities



import Image from 'next/image';
import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import styles from './index.module.scss';
import homeStyles from '@/styles/Home.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import Link from 'next/link';
import { CiGrid32, CiGrid2V } from "react-icons/ci";

const cityData = [
  {
    id: 1,
    name: "المدينة المنورة",
    location: "الجوف",
    imgSrc: "/assets/imgs/cities/9.png",
    link: "/cities/2/video"
  },
  {
    id: 2,
    name: "الرياض",
    location: "بئر الفقير",
    imgSrc: "/assets/imgs/6.jpeg",
    link: "/cities/2/video"
  },
  {
    id: 3,
    name: "تبوك",
    location: "قصر عروة",
    imgSrc: "/assets/imgs/bg1.png",
    link: "/cities/2/video"
  },
  {
    id: 4,
    name: "حائل",
    location: "جبل جبة",
    imgSrc: "/assets/imgs/bg1.png",
    link: "/cities/2/video"
  },
  {
    id: 1,
    name: "المدينة المنورة",
    location: "الجوف",
    imgSrc: "/assets/imgs/cities/9.png",
    link: "/cities/2/video"
  },
  {
    id: 2,
    name: "الرياض",
    location: "بئر الفقير",
    imgSrc: "/assets/imgs/6.jpeg",
    link: "/cities/2/video"
  },
  {
    id: 3,
    name: "تبوك",
    location: "قصر عروة",
    imgSrc: "/assets/imgs/bg1.png",
    link: "/cities/2/video"
  },
  {
    id: 4,
    name: "حائل",
    location: "جبل جبة",
    imgSrc: "/assets/imgs/bg1.png",
    link: "/cities/2/video"
  }, {
    id: 1,
    name: "المدينة المنورة",
    location: "الجوف",
    imgSrc: "/assets/imgs/cities/9.png",
    link: "/cities/2/video"
  },
  {
    id: 2,
    name: "الرياض",
    location: "بئر الفقير",
    imgSrc: "/assets/imgs/6.jpeg",
    link: "/cities/2/video"
  },
  {
    id: 3,
    name: "تبوك",
    location: "قصر عروة",
    imgSrc: "/assets/imgs/bg1.png",
    link: "/cities/2/video"
  },
  {
    id: 4,
    name: "حائل",
    location: "جبل جبة",
    imgSrc: "/assets/imgs/bg1.png",
    link: "/cities/2/video"
  }
];


const getRandomWidth = (min, max) => Math.floor(Math.random() * (max - min + 40)) + min;

const Cities = () => {
  const [changeShapes, setChangeShapes] = useState(false);

  return (
    <section id='cities' className={styles.cities}>
      <div className={homeStyles.shape_container3}>
        <Image src="/assets/svgs/shape.svg" alt="Shape" width={100} height={100} />
      </div>

      <div className={styles.sec_container}>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, type: "tween" }}
          className={styles.sec_title}
        >
          <h3>أهم المواقع التاريخية</h3>
        </motion.div>


        <div className={styles.icons_container}>
          <div className={`${styles.icon} ${changeShapes === true ? styles.active : ''}`} onClick={() => setChangeShapes(true)} >
            <CiGrid32 />
          </div>

          <div className={`${styles.icon} ${changeShapes === false ? styles.active : ''}`} onClick={() => setChangeShapes(false)} >
            <CiGrid2V />

          </div>
        </div>

        <div className="container">


          {changeShapes === true ?

            <div className={styles.boxes_container_mobile}>
              {cityData.map((city) => (
                <motion.a
                  key={city.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "tween" }}
                  href={city.link}
                  className={styles.box}
                  style={{
                    width: `100%`,
                    height: `${getRandomWidth(144, 340)}px`,
                  }}
                >
                  <div className={styles.img_container}>
                    <img src={city.imgSrc} alt={city.name} />
                  </div>
                  <div className={styles.title}>
                    <h5>{city.location}</h5>
                  </div>
                </motion.a>
              ))}
            </div>
            :

            <div className={styles.boxes_container}>
              {cityData.map((city) => (
                <motion.a
                  key={city.id}
                  href={city.link}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "tween" }}
                  className={styles.card}
                >
                  <div className={styles.img_container}>
                    <div className={styles.card_top}>
                      <p>{city.name}</p>
                    </div>
                    <Image src={city.imgSrc} alt={city.name} width={271.91} height={384.14} />
                  </div>

                  <div className={styles.card_bottom}>
                    <div className={styles.title}>
                      <h6><strong>{city.location}</strong></h6>
                    </div>
                    <div className={styles.explore}>
                      <div className={styles.icon_container}>
                        <IoIosArrowBack />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>



          }


        </div>
      </div>




      <motion.div initial={{ opacity: 0, translateX: 40 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.7, type: "tween" }} className={styles.swiper_container}>



        <div className={`container ${styles.container}`}>

          <Swiper
            spaceBetween={13}

            breakpoints={{
              1: {
                slidesPerView: 1.3
              },
              400: {
                slidesPerView: 1.4

              }
            }}
            pagination={{ clickable: true }}
            dir="rtl"
            modules={[Navigation, FreeMode]}
            className={styles.swiper_contain}
            centeredSlides={false}
            style={{ width: '100%' }}

          >
            <SwiperSlide>
              <motion.a href='/cities/2' initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
                <div className={styles.img_container}>
                  <div className={styles.card_top}>
                    <p>معالم</p>
                  </div>
                  <Image
                    src="/assets/imgs/cities/9.png"
                    alt="Vercel logomark"
                    width={271.91}
                    height={384.14}
                  />
                </div>

                <div className={styles.card_bottom}>
                  <div className={styles.title}>

                    <h6>
                      <strong>قصر عروة</strong>
                      <br />

                      <span>
                        المدينة المنورة
                        <IoLocationOutline />

                      </span>

                    </h6>
                  </div>

                  <div className={styles.explore}>
                    <p>استكشف</p>

                    <div className={styles.icon_container}>
                      <IoIosArrowBack />
                    </div>

                  </div>
                </div>



              </motion.a>

            </SwiperSlide>

            <SwiperSlide>
              <motion.a href='/cities/2' initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
                <div className={styles.img_container}>
                  <div className={styles.card_top}>
                    <p> معالم</p>
                  </div>
                  <Image
                    src="/assets/imgs/6.jpeg"
                    alt="Vercel logomark"
                    width={271.91}
                    height={384.14}
                  />
                </div>




                <div className={styles.card_bottom}>
                  <div className={styles.title}>

                    <h6>
                      <strong>بئر الفقير </strong>
                      <br />

                      <span>
                        المدينة المنورة
                        <IoLocationOutline />

                      </span>

                    </h6>
                  </div>

                  <div className={styles.explore}>
                    <p>استكشف</p>

                    <div className={styles.icon_container}>
                      <IoIosArrowBack />
                    </div>

                  </div>
                </div>

              </motion.a>

            </SwiperSlide>

            <SwiperSlide>
              <motion.a href='/cities/2' initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 0.7, type: "tween" }} className={styles.card}>
                <div className={styles.img_container}>
                  <div className={styles.card_top}>
                    <p>معالم</p>
                  </div>
                  <Image
                    src="/assets/imgs/bg1.png"
                    alt="Vercel logomark"
                    width={271.91}
                    height={384.14}
                  />
                </div>





                <div className={styles.card_bottom}>
                  <div className={styles.title}>

                    <h6>
                      <strong>قصر عروة</strong>
                      <br />

                      <span>
                        المدينة المنورة
                        <IoLocationOutline />

                      </span>

                    </h6>
                  </div>

                  <div className={styles.explore}>
                    <p>استكشف</p>

                    <div className={styles.icon_container}>
                      <IoIosArrowBack />
                    </div>

                  </div>
                </div>

              </motion.a>

            </SwiperSlide>



          </Swiper>

        </div>
      </motion.div>
    </section >
  );
};

export default Cities;
