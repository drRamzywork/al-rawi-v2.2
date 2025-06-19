import Head from "next/head";
import cityData from "@/data/cities";
import Home from "@/components/Home";

export default function HomePage({
  cities,
  dataSlider,
  dataHistoricalSites,
  dataAllLandmarks,
  dataTranslations,
  dataSettings,
}) {
  const siteName = dataSettings?.site_title;
  const imagePath = dataSettings?.site_title;
  const siteDescrription = dataSettings.site_desc;
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

      <Home
        dataSettings={dataSettings}
        dataTranslations={dataTranslations}
        cities={cities}
        sliders={dataSlider}
        dataHistoricalSites={dataHistoricalSites}
        dataAllLandmarks={dataAllLandmarks}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const resSlider = await fetch(`${apiDomain}/sliders`, {
    headers: { locale: locale },
  });
  const dataSlider = await resSlider.json();
  const resHistoricalSites = await fetch(`${apiDomain}/historical-sites`, {
    headers: { locale: locale },
  });
  const dataHistoricalSites = await resHistoricalSites.json();

  const resAllLandmarks = await fetch(`${apiDomain}/landmarks`, {
    headers: { locale: locale },
  });
  const dataAllLandmarks = await resAllLandmarks.json();

  const resTranslations = await fetch(`${apiDomain}/translations`, {
    headers: { locale: locale },
  });
  const dataTranslations = await resTranslations.json();

  const resSettings = await fetch(`${apiDomain}/settings`, {
    headers: { locale: locale },
  });
  const dataSettings = await resSettings.json();

  return {
    props: {
      cities: cityData,
      dataSlider: dataSlider?.data || null,
      dataHistoricalSites: dataHistoricalSites?.data || null,
      dataAllLandmarks: dataAllLandmarks?.data || null,
      dataTranslations: dataTranslations?.data || null,
      dataSettings: dataSettings?.data || null,
    },
    revalidate: 10,
  };
}
