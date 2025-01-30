import { motion } from 'framer-motion'
import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5';
import styles from './index.module.scss'
import Image from 'next/image';

const Challenge = () => {
  return (
    <div>



      <motion.div initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, type: "tween" }} className={styles.header} id='header'>

        <div
          className={styles.shape_container}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>

        <div className="container">
          <div className={styles.header_container}>
            <button onClick={() => setLangsWindow(false)} className={styles.back_btn}>
              <IoChevronForwardOutline />
            </button>


            <div onClick={() => setLangsWindow(false)} className={styles.logo}>
              <Image
                src="/assets/svgs/logoColored.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>


          </div>







          <div className={styles.box_container}>


            <div className={styles.header_box}>
              <div className={styles.title}>

                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/langsColored.svg"
                    alt="Vercel logomark"
                    width={100}
                    height={100}
                  />
                </div>


                <p>اخـــتـــر لغـــتـــك</p>



              </div>

              <div className={styles.desc}>
                <p>Choose a Languages</p>
              </div>
            </div>


            <div className={styles.boxes_container}>
              {/* <Swiper
                direction={"vertical"}
                slidesPerView={3.8}
                spaceBetween={8}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Mousewheel, FreeMode,]}
                mousewheel={true}
                freeMode={true}
                // scrollbar={true}


                dir='rtl'
                className={styles.swiper}
              >

                {langs.map((lang, idx) =>
                  <SwiperSlide key={idx}  >

                    <div className={styles.box} >

                      <div className={styles.title}>
                        <p>{lang.name}</p>
                      </div>

                      <div className={styles.flag_container}>
                        <Image
                          src={lang.img}
                          alt="Vercel logomark"
                          width={100}
                          height={100}
                        />
                      </div>


                      <div className={styles.title}>
                        <p>{lang.native}</p>
                      </div>
                    </div>
                  </SwiperSlide>

                )}

              </Swiper> */}



            </div>




          </div>


        </div>

        <div className={styles.shape_container2}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>


      </motion.div>
    </div>
  )
}

export default Challenge