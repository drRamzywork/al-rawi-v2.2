import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cities from "@/components/cities";
import Footer from "@/components/Footer";



export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the time (3000ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);





  const siteName = ' الراوي';
  const imagePath = '/assets/imgs/rawi.png';
  const siteDescrription = 'استكشف عالم الجمال في المملكة';

  const siteURL = 'https://al-rawi-v2-22.vercel.app/';




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

      <div className={`${styles.page}  `}>
        <main className={styles.main}>
          <div
            className={styles.shape_container}>
            <Image
              src="/assets/svgs/shape.svg"
              alt="Vercel logomark"
              width={100}
              height={100}
            />
          </div>
          {showSplash ? (
            <>

              <div className={styles.logo}>
                <Image
                  src="/assets/imgs/rawi.png"
                  alt="Vercel logomark"
                  width={100}
                  height={100}
                />
              </div>

              <div className={styles.logo2}>
                <Image
                  src="/assets/svgs/logoColored.svg"
                  alt="Vercel logomark"
                  width={100}
                  height={100}
                />
              </div>

            </>
          ) : (
            // Home Page Content
            <div className={styles.homeContent}>
              <Navbar isHome={true} />
              <Hero />

              <Cities />

              <div className={styles.layer_bg}>
                <div className={styles.layer} />
                <Image
                  src="/assets/imgs/bg1.png"
                  alt="Vercel logomark"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}


          {/* <div className={styles.shape_container2}>
            <Image
              src="/assets/svgs/shape.svg"
              alt="Vercel logomark"
              width={100}
              height={100}
            />
          </div> */}


          <Footer />
        </main>
      </div >
    </>
  );
}
