import Image from 'next/image'
import React, { useState } from 'react';
import styles from './index.module.scss'
import { IoChevronForwardOutline } from "react-icons/io5";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Pagination, Mousewheel, FreeMode, Scrollbar } from 'swiper/modules';
import { motion } from "framer-motion";


const langs = [
  { code: 'ar', native: 'Arabic', name: 'العـــربــيـة', img: '/assets/imgs/langs/ar.png' },
  { code: 'en', native: 'English', name: 'الإنجليزيــة', img: '/assets/imgs/langs/en.png' },
  { code: 'fr', native: 'Français', name: 'الـفـرنـسية', img: '/assets/imgs/langs/fr.png' },
  { code: 'ch', native: '汉语', name: 'الصـيـنـيــة', img: '/assets/imgs/langs/ch.png' },
  { code: 'ru', native: 'Русский', name: 'الــروسـيـة', img: '/assets/imgs/langs/ru.png' },
  { code: 'es', native: 'Español', name: 'الإسـبانيـة', img: '/assets/imgs/langs/es.png' },

]

const Navbar = ({ isHome }) => {
  const [searchWindow, setSearchWindow] = useState(false)
  const [LangsWindow, setLangsWindow] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">

          <div className={styles.nav_container}>

            <div className={styles.icon_container}>
              {isHome &&
                <Image
                  src="/assets/svgs/search.svg"
                  alt="Vercel logomark"
                  width={100}
                  height={100}
                  onClick={() => setSearchWindow(true)}
                />
              }
              {!isHome &&
                <Link href={'/'} className={styles.back_btn}>
                  <IoChevronForwardOutline />
                </Link>
              }



            </div>



            <div className={styles.logo}>
              <Image
                src="/assets/svgs/logo.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.icon_container2}>
              {isHome &&
                <Image
                  src="/assets/svgs/langs.svg"
                  alt="Vercel logomark"
                  width={100}
                  height={100}
                  onClick={() => setLangsWindow(true)}

                />
              }
            </div>


          </div>
        </div>

      </nav>


      {LangsWindow &&
        <>


          <motion.div initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7, type: "tween" }} className={styles.header} id='header'>



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
                  <Swiper
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

                  </Swiper>



                </div>




              </div>


            </div>



          </motion.div>

        </>
      }
    </>
  )
}

export default Navbar