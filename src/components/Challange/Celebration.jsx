import styles from "@/styles/quiz.module.scss";
import { motion } from "framer-motion";
import styles2 from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Celebration = ({ onResult }) => {
  const siteName = '  الراوي | تحدي قصور عروة  ';
  const imagePath = '/assets/imgs/rawi.png';
  const siteDescrription = 'استكشف عالم الجمال في المملكة';

  const siteURL = 'https://alrawi2.suwa.com.sa/';
  const videoURL = 'https://suwa.com.sa/v/rawai/f.mp4';

  return (
    <>

      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href={imagePath} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="title" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <meta property="og:type" content="video.other" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={videoURL} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:video:secure_url" content={videoURL} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescrription} />
        <meta name="twitter:player" content={videoURL} />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        <meta name="twitter:image" content={`${siteURL}/video-thumbnail.jpg`} />

        <link rel="canonical" href={videoURL} />
      </Head>
      <motion.div

        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, type: "tween" }} className={styles2.header} id={styles2.header2}>
        <div
          className={styles2.shape_container}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className={styles2.header_container}>


            <Link href='/' className={styles2.logo2}>
              <Image
                src="/assets/svgs/logoColored.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </Link>


          </div>

          <div className={styles2.box_container}>
            <motion.div
              className={styles.celebrationContainer}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src="/assets/imgs/quiez/1.png"
                alt="Trophy"
                className={styles.trophy}
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />


              <img
                src="/assets/imgs/quiez/2.gif"
                alt="Trophy"
                className={styles.main_img}
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                تهانيناً
              </motion.h2>
              <p>لقد أتممت التحدي</p>
              <div className={styles.buttons}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={onResult}
                >
                  مشاهدة النتيجة
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={styles2.shape_container2}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>
      </motion.div>

    </>
  );
};

export default Celebration;
