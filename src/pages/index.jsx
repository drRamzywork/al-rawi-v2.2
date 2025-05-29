import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cities from "@/components/cities";
import Footer from "@/components/Footer";
import cityData from "@/data/cities";
import Home from "@/components/Home";

export default function HomePage({
  cities,
  dataSlider,
  dataHistoricalSites,
  dataAllLandmarks,
}) {
  const siteName = "الراوي";
  const imagePath = "/assets/imgs/rawi.png";
  const siteDescrription = "استكشف عالم الجمال في المملكة";
  const siteURL = "https://alrawi2.suwa.com.sa/";

  console.log(dataAllLandmarks, "dataHistoricalSites 33");
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

      <Home
        cities={cities}
        sliders={dataSlider}
        dataHistoricalSites={dataHistoricalSites}
        dataAllLandmarks={dataAllLandmarks}
      />
    </>
  );
}

// export async function getStaticProps() {

//   return {
//     props: {
//       cities: cityData,

//     },
//   };
// }

export async function getStaticProps({ locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const resSlider = await fetch(`${apiDomain}/sliders`, {
    headers: { "Accept-Language": locale },
  });
  const dataSlider = await resSlider.json();
  const resHistoricalSites = await fetch(`${apiDomain}/historical-sites`, {
    headers: { "Accept-Language": locale },
  });
  const dataHistoricalSites = await resHistoricalSites.json();

  const resAllLandmarks = await fetch(`${apiDomain}/landmarks`, {
    headers: { "Accept-Language": locale },
  });
  const dataAllLandmarks = await resAllLandmarks.json();

  return {
    props: {
      cities: cityData,
      dataSlider: dataSlider?.data || null,
      dataHistoricalSites: dataHistoricalSites?.data || null,
      dataAllLandmarks: dataAllLandmarks?.data || null,
    },
    revalidate: 10,
  };
}
