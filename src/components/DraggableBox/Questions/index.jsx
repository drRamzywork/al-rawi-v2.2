import React, { useEffect, useRef, } from 'react'
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';


const Questions = ({ questions,
  setQuestions }) => {
  const controls = useAnimation();


  useEffect(() => {
    controls.start(questions ? 'visible' : 'hidden');
  }, [questions, controls]);







  const links = [
    {
      title: 'الصور',
      img: '/assets/svgs/navbar/gallery.svg',
      onClick: () => {
        setCurrentState('Gallery');
        setShowNewMenu(true);
        setPause(true);
      },
    },
    {
      title: 'تعرف أكثر',
      img: '/assets/svgs/navbar/square.svg',
      onClick: () => {
        setCurrentState('LearnMore');
        setReadMore((prev) => !prev);
      },
    },
    {
      title: '',
      img: '/assets/svgs/navbar/mark.svg',
      onClick: () => {
        setCurrentState('Mark');
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
      {questions && (
        <div className={styles.layer} onClick={() => setQuestions(false)} />
      )}

      <motion.div
        initial="hidden"
        animate={controls}
        className={styles.container}
        transition={{
          type: 'spring',
          damping: 60,
          stiffness: 400,
          duration: 4.5,
        }}
        variants={{
          visible: { y: '0%', opacity: 1 },
          hidden: { y: '-150%', opacity: 0 },
        }}

        id="menu2"
        dir="rtl"
        style={{
          position: 'fixed',
          top: '10%',
          left: '6%',
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
          padding: '14px',

        }}
      >
        {questions &&
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>قصور عروة</h1>
            </div>
            <div className={styles.boxes_container}>
              <Link href='/cities/2/video' className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3>المقدمة</h3>
                    </div>

                    <div className={styles.desc}>
                      <p>يعود تاريخ قصور عروة بن الزبير إلى العصر الأُمَوي..</p>
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
              <Link href='/cities/2/video' className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3>المقدمة</h3>
                    </div>

                    <div className={styles.desc}>
                      <p>يعود تاريخ قصور عروة بن الزبير إلى العصر الأُمَوي..</p>
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
              <Link href='/cities/2/video' className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3>المقدمة</h3>
                    </div>

                    <div className={styles.desc}>
                      <p>يعود تاريخ قصور عروة بن الزبير إلى العصر الأُمَوي..</p>
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
              <Link href='/cities/2/video' className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3>المقدمة</h3>
                    </div>

                    <div className={styles.desc}>
                      <p>يعود تاريخ قصور عروة بن الزبير إلى العصر الأُمَوي..</p>
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
            </div>
          </div>

        }

      </motion.div >






    </>
  )
}

export default Questions