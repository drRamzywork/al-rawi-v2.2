import React, { useEffect, } from 'react'
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';


const Questions = ({ questions,
  id }) => {
  const controls = useAnimation();


  useEffect(() => {
    controls.start(questions ? 'visible' : 'hidden');
  }, [questions, controls]);








  return (
    <>
      {/* {questions && (
        <div className={styles.layer} onClick={() => setQuestions(false)} />
      )} */}

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
          borderRadius: '13px',
          zIndex: 55,
          padding: '14px',

        }}
      >
        {questions &&
          <div className={styles.content}>

            <div className={styles.boxes_container}>
              <Link href={`/cities/${id}/video`} className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {/* <h3>المقدمة</h3> */}
                      <h3>قصة حي الكوت</h3>
                    </div>

                    {/* <div className={styles.desc}>
                      <p>يعود تاريخ قصور عروة بن الزبير إلى العصر الأُمَوي..</p>
                    </div> */}
                  </div>
                </div>

                <div className={styles.link_container}>
                  <p>تعرف</p>
                  <div className={styles.icon_container}>
                    <IoIosArrowBack />

                  </div>
                </div>
              </Link>
              <Link href={`/cities/${id}/video`} className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3>قصة بيعة المؤسس</h3>
                      {/* <h3>إلى أي العصور يعود قصر عروة؟</h3> */}
                    </div>

                    {/* <div className={styles.desc}>
                      <p>
                        يعود تاريخ قصر عروة بن الزبير إلى العصر الأُمَوي..
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className={styles.link_container}>
                  <p>تعرف</p>
                  <div className={styles.icon_container}>
                    <IoIosArrowBack />

                  </div>
                </div>
              </Link>
              <Link href={`/cities/${id}/video`} className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {/* <h3>أين تقع قصور عروة بن الزبير؟</h3> */}
                      <h3>قصة بيت البيعة</h3>
                    </div>

                    {/* <div className={styles.desc}>
                      <p>على بعد حوالي 3.5 كلم من المسجد النبوي الشريف</p>
                    </div> */}
                  </div>
                </div>

                <div className={styles.link_container}>
                  <p>تعرف</p>
                  <div className={styles.icon_container}>
                    <IoIosArrowBack />

                  </div>
                </div>
              </Link>

              {/* <Link href='/cities/2/video' className={styles.box}>
                <div className={styles.info_container}>
                  <div className={styles.img_container}>
                    <img src="/assets/imgs/questions/1.png" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <h3>ماهي أهم المعالم الأثرية في القصور</h3>
                    </div>

                    <div className={styles.desc}>
                      <p>من أهم معالم قصور عروة بن الزبير: القلعة التاريخية والبئر المجاورة لها</p>
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
          
        }

      </motion.div >






    </>
  )
}

export default Questions