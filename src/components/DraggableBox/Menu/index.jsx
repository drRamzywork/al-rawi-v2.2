
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';
import { IoClose } from 'react-icons/io5';
import Questions from '../Questions';

const Menu = ({ isVideoPlaying, showNewMenu,
  setShowNewMenu }) => {
  const [readMore, setReadMore] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [currentState, setCurrentState] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    controls.start(readMore ? 'visible' : 'hidden');
  }, [readMore, controls]);



  const links = [
    {
      title: 'الصور',
      img: '/assets/svgs/navbar/gallery.svg',
      onClick: () => {
        setCurrentState('Gallery');
        setShowNewMenu((prev) => !prev);
        setQuestions(false);
        setReadMore(false);
      },
    },
    {
      title: 'تعرف أكثر',
      img: '/assets/svgs/navbar/square.svg',
      onClick: () => {
        setCurrentState('LearnMore');
        setReadMore((prev) => !prev);
        setShowNewMenu(false);
        setQuestions(false);

      },
    },
    {
      title: '',
      img: '/assets/svgs/navbar/mark.svg',
      onClick: () => {
        setQuestions((prev) => !prev);
        setShowNewMenu(false);
        setReadMore(false);

      },
    },
    {
      title: 'الموقع',
      img: '/assets/svgs/navbar/location.svg',
      onClick: () => {
        setCurrentState('Location');
      },
    },
    {
      title: 'المشاركة',
      img: '/assets/svgs/navbar/share.svg',
      onClick: () => {
        setCurrentState('Share');
      },
    },
  ];

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: '10%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '600px',
          height: '60%',
          maxHeight: '700px',
          overflowY: 'auto',
          overflowX: 'unset',
          border: '1px solid #E0E0E0',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)',
          borderRadius: '13px',
          zIndex: 55,
          background: '#00000080',
          padding: '14px'
        }}

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
          hidden: { y: '-300%', opacity: 0 },
        }}

        id="menu"
        dir="rtl"
      >
        {readMore &&
          <div className={styles.content}>
            <div className={styles.close_icon} onClick={() => setReadMore(false)}>

              <IoClose />

            </div>

            <div className={styles.sec_title}>
              <h1>قصور عروة</h1>
            </div>
            <div className={styles.imgs_container}>
              <div className={styles.main_img}>
                <img src="/assets/imgs/menu2/2.png" alt="" />
              </div>

            </div>

            <div className={styles.title}>
              <h3>إلى أي العصور يعود قصر عروة؟</h3>
            </div>


            <div className={styles.desc}>
              <p>يعود تاريخ قصر عروة بن الزبير إلى العصر الأُمَوي، وكان هذا القصر أحسنَ القصور وأجملها في ذلك العهد، وتذكر المصادر أن الذي بناهُ هو الزبير بن العوام رضي الله عنه، ثم سكن فيه ابنُه عروة.</p>
            </div>


            <div className={styles.title}>
              <h3> أين تقع قصور عروة بن الزبير؟</h3>
            </div>

            <div className={styles.desc}>
              <p>تقع قصور عُروة بن الزبير على بعد حوالي 3.5 كلم من المسجد النبوي الشريف، على امتداد الطريق المؤدية إلى مسجد ذي الحُلَيفة وهو ميقات أهل المدينة، وهذه القصور جزءٌ من التاريخ الحافل للمدينة المنورة، وقد ذُكرت في العديد من المصادر التاريخية.</p>
            </div>


            <div className={styles.title}>
              <h3>
                ما هي أهم المعالم الأثرية في قصور عروة بن الزبير؟
              </h3>
            </div>

          </div>

        }

      </motion.div >

      {readMore && (
        <div className={styles.layer} onClick={() => setReadMore(false)} />
      )}




      {/* Navigation links */}
      {!isVideoPlaying && !showNewMenu &&

        <div className={styles.nav_container} >
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
        </div >
      }

      <Questions questions={questions}
        setQuestions={setQuestions} />

    </>
  );
};

export default Menu;
