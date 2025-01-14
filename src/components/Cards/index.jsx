import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import styles from './index.module.scss';
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      <section id='cards' className={styles.cards}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.title}>
              <h1>أهم المعالم التراثية</h1>
            </div>

            <div className={styles.boxes_container}>

              <a href="/cities/2/video">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.box}>
                  <div className={styles.details}>
                    <div className={styles.img_container}>
                      <img src="/assets/imgs/bg4.png" alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <h6>قصر عروة</h6>

                      <div className={styles.icon_container}>
                        <IoLocationOutline />
                        <p>يبعد عنك 13KM</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.links}>
                    <div className={styles.card_top}>
                      <p>معالم</p>
                    </div>

                    <div className={styles.card_bottom}>
                      <p>استكشف</p>

                      <div className={styles.icon_container}>
                        <IoChevronBackOutline />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
              <a href="/cities/2/video">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.box}>
                  <div className={styles.details}>
                    <div className={styles.img_container}>
                      <img src="/assets/imgs/bg4.png" alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <h6>قصر عروة</h6>

                      <div className={styles.icon_container}>
                        <IoLocationOutline />
                        <p>يبعد عنك 13KM</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.links}>
                    <div className={styles.card_top}>
                      <p>معالم</p>
                    </div>

                    <div className={styles.card_bottom}>
                      <p>استكشف</p>

                      <div className={styles.icon_container}>
                        <IoChevronBackOutline />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
              <a href="/cities/2/video">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.box}>
                  <div className={styles.details}>
                    <div className={styles.img_container}>
                      <img src="/assets/imgs/bg4.png" alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <h6>قصر عروة</h6>

                      <div className={styles.icon_container}>
                        <IoLocationOutline />
                        <p>يبعد عنك 13KM</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.links}>
                    <div className={styles.card_top}>
                      <p>معالم</p>
                    </div>

                    <div className={styles.card_bottom}>
                      <p>استكشف</p>

                      <div className={styles.icon_container}>
                        <IoChevronBackOutline />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
              <a href="/cities/2/video">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.box}>
                  <div className={styles.details}>
                    <div className={styles.img_container}>
                      <img src="/assets/imgs/bg4.png" alt="" />
                    </div>

                    <div className={styles.text_container}>
                      <h6>قصر عروة</h6>

                      <div className={styles.icon_container}>
                        <IoLocationOutline />
                        <p>يبعد عنك 13KM</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.links}>
                    <div className={styles.card_top}>
                      <p>معالم</p>
                    </div>

                    <div className={styles.card_bottom}>
                      <p>استكشف</p>

                      <div className={styles.icon_container}>
                        <IoChevronBackOutline />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards