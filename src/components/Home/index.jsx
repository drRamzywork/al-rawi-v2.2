// pages/index.js
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cities from "@/components/cities";
import Footer from "@/components/Footer";

const SplashScreen = () => (
  <>
    <div className={styles.shape_container}>
      <Image
        src="/assets/svgs/shape.svg"
        alt="Shape"
        width={100}
        height={100}
      />
    </div>

    <div className={styles.logo}>
      <Image
        src="/assets/imgs/rawi.png"
        alt="Rawi Logo"
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
);

const Home = ({
  cities,
  sliders,
  dataAllLandmarks,
  dataTranslations,
  dataSettings,
}) => {
  const [showSplash, setShowSplash] = useState(true);


  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setShowSplash(false); // لا تعرض الـ Splash إذا زار من قبل
    } else {
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => setShowSplash(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <div className={styles.homeContent}>
            <Navbar
              dataAllLandmarks={dataAllLandmarks}
              isHome={true}
              dataSettings={dataSettings}
            />
            <Hero sliders={sliders} dataTranslations={dataTranslations} />
            <Cities
              dataTranslations={dataTranslations}
              dataAllLandmarks={dataAllLandmarks}
              cities={cities}
              dataHistoricalSites={[]}
            />
          </div>
        )}

        <Footer dataTranslations={dataTranslations} />
      </main>
    </div>
  );
};

export default Home;
