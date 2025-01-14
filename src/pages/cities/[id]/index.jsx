import Image from 'next/image'
import React from 'react'
import styles2 from '@/styles/Home.module.scss'
import styles from './index.module.scss'
import Hero from '@/components/CitiesComponents/Hero'
import Navbar from '@/components/Navbar';
import { IoLocationOutline } from "react-icons/io5";
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import { motion } from "framer-motion";



const Cities = () => {
  return (
    <>
      <div className={`${styles2.page}  `}>
        <main className={styles2.main}>
          <div className={styles2.homeContent2}>
            <Navbar isHome={false} />


            <Hero />
            <div className={styles2.layer_bg}>
              <div className={styles2.layer} />
              <Image
                src="/assets/imgs/bg3.jpeg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />

              <div className="container">

                <div className={styles.location}>
                  <IoLocationOutline />

                  <motion.p
                    initial={{ opacity: 0, translateX: -50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.7, type: "tween" }} >المدينة المورة</motion.p>
                </div >
              </div>

            </div>


            <Cards />

          </div>


          <Footer />
        </main>
      </div >



    </>
  )
}

export default Cities