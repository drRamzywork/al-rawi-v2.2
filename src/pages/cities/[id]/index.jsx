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
import Head from 'next/head'



const Cities = () => {


  const siteName = '  الراوي |   أهم المعالم التراثية  ';
  const imagePath = '/assets/imgs/rawi.png';
  const siteDescrription = 'استكشف عالم الجمال في المملكة';

  const siteURL = 'https://alrawi2.suwa.com.sa/';


  return (
    <>

      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#035746" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <link
          rel="apple-touch-icon"
          href={`${siteURL}${imagePath}`}
        />
        <link
          rel="apple-touch-startup-image"
          href={`${siteURL}${imagePath}`}
        />
        <meta name="author" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content="#035746" />
        <meta
          name="msapplication-TileImage"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={'ar'} />
        <meta property="og:locale:alternate" content={'ar'} />
        <meta
          property="og:url"
          content={`${siteURL}/`}
        />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta
          property="og:image"
          content={`${siteURL}${imagePath}`}
        />
        <meta itemProp="name" content={siteName} />
        <meta itemProp="author" content={siteName} />
        <meta
          itemProp="image"
          content={`${siteURL}${imagePath}`}
        />
        <meta itemProp="description" content={siteDescrription} />
        <meta
          name="twitter:image"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={siteName} />
        <meta
          name="twitter:image:src"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="twitter:description" content={siteDescrription} />
      </Head>

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