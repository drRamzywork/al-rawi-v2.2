import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cities from "@/components/cities";
import Footer from "@/components/Footer";

const Home = ({ cities, sliders, dataHistoricalSites, dataAllLandmarks }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
              <Hero sliders={sliders} />
              <Cities
                dataAllLandmarks={dataAllLandmarks}
                cities={cities}
                dataHistoricalSites={dataHistoricalSites}
              />
            </div>
          )}

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
