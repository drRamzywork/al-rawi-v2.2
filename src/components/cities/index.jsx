import Image from 'next/image'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import styles from './index.module.scss'
import homeStyles from '@/styles/Home.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const Cities = () => {
  return (
    <>
      <section id='cities' className={styles.cities}>
        <div className={homeStyles.shape_container3}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.sec_container}>
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7, type: "tween" }} className={styles.sec_title}>
            <h3>أهم المدن التراثية</h3>

          </motion.div>


          <div className="container">
            <div className={styles.boxes_container}>
              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/1.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>

                  <h6>
                    حائل
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>


              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/2.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    تبوك
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>

              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/3.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    المدينة المنورة
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>

              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/4.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    الجوف
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>

              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/5.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    الجوف
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>


              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/6.png"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    الطائف
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>




              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/7.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    القصيم
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>

              <motion.a initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, type: "tween" }} href={'/cities/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src="/assets/imgs/cities/8.jpeg"
                    alt="Vercel logomark"
                    width={175.99}
                    height={265.06}
                  />
                </div>

                <div className={styles.title}>
                  <h6>
                    الرياض
                  </h6>
                  <IoLocationOutline />
                </div>
              </motion.a>
            </div>
          </div>


          <motion.div initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7, type: "tween" }} className={styles.sec_title}>
            <h3>أشهر المعالم الأثرية</h3>


            <div className={styles.shape_container}>
              <Image
                src="/assets/svgs/shape.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>
          </motion.div>


        </div>


        <motion.div initial={{ opacity: 0, translateX: 40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7, type: "tween" }} className={styles.swiper_container}>



          <div className={`container ${styles.container}`}>

            <Swiper
              spaceBetween={13}
              slidesPerView={1.3}
              pagination={{ clickable: true }}
              dir="rtl"
              modules={[Navigation, FreeMode]}
              initialSlide={1}
              className={styles.swiper_contain}
              centeredSlides={false}
              style={{ width: '100%' }}

            >
              <SwiperSlide>
                <motion.div initial={{ opacity: 0, }}
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
                      <div className={styles.icon_container}>
                        <IoIosArrowBack />
                      </div>
                      <p>استكشف</p>

                    </div>
                  </div>



                </motion.div>

              </SwiperSlide>

              <SwiperSlide>
                <motion.div initial={{ opacity: 0, }}
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
                        <strong> بئر الفقير</strong>
                        <br />
                        المدينة المنورة
                      </h6>
                      <IoLocationOutline />
                    </div>

                    <div className={styles.explore}>
                      <div className={styles.icon_container}>
                        <IoIosArrowBack />
                      </div>
                      <p>استكشف</p>

                    </div>
                  </div>



                </motion.div>

              </SwiperSlide>

              <SwiperSlide>
                <motion.div initial={{ opacity: 0, }}
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
                        المدينة المنورة
                      </h6>
                      <IoLocationOutline />
                    </div>

                    <div className={styles.explore}>
                      <div className={styles.icon_container}>
                        <IoIosArrowBack />
                      </div>
                      <p>استكشف</p>

                    </div>
                  </div>



                </motion.div>

              </SwiperSlide>



            </Swiper>

          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Cities