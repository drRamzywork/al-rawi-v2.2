import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cities from "@/components/cities";
import Footer from "@/components/Footer";
import cityData from "@/data/cities";

export default function Home({ cities }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const siteName = "الراوي";
  const imagePath = "/assets/imgs/rawi.png";
  const siteDescrription = "استكشف عالم الجمال في المملكة";
  const siteURL = "https://alrawi2.suwa.com.sa/";

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
        <meta name="description" content={siteDescrription} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:image" content={`${siteURL}${imagePath}`} />
      </Head>

      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.shape_container}>
            <Image
              src="/assets/svgs/shape.svg"
              alt="Shape"
              width={100}
              height={100}
            />
          </div>

          {showSplash ? (
            <>
              <div className={styles.logo}>
                <Image
                  src="/assets/imgs/rawi.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.logo2}>
                <Image
                  src="/assets/svgs/logoColored.svg"
                  alt="Colored Logo"
                  width={100}
                  height={100}
                />
              </div>
            </>
          ) : (
            <div className={styles.homeContent}>
              <Navbar isHome={true} />
              <Hero />
              <Cities cities={cities} />
            </div>
          )}

          <Footer />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      cities: cityData,
    },
  };
}
