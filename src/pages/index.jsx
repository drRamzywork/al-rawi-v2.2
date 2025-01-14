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

  return (
    <>
      <Head>
        <title>الراوي</title>
        <meta name="description" content="الراوي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/imgs/rawi.png" />
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
