import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id='hero' className={styles.hero}>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.title}>
            <motion.h1
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7, type: "tween" }}>استكشف عالم <br />   المدينة المنورة </motion.h1>
            <motion.div
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7, type: "tween" }} className={styles.shape}>
              <Image
                src="/assets/svgs/text_shape.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7, type: "tween" }} className={styles.btn_container}>
            <Link href={'#cards'}>
              <p>تعرف الآن</p>
              <div className={styles.icon_container}>
                <IoIosArrowDown />
              </div>

            </Link>
          </motion.div>
        </div>
      </div>


      {/* <div className={styles.location}>
        <IoLocationOutline />

        <p>المدينة المورة</p>
      </div> */}
    </section>
  )
}

export default Hero