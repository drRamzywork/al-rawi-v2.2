import Head from "next/head";
import City from "@/components/Pages/City";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LandmarkVideo({
  landmark,
  dataSettings,
  dataTranslations,
}) {
  const [isDialog, setIsDialog] = useState(false);
  const { locale } = useRouter();
  const siteName = `${dataSettings?.site_title} | ${landmark?.title}`;
  const siteDescription = landmark?.desc;

  useEffect(() => {
    sessionStorage.setItem("cameFromVideo", "true");
  }, []);

  const videoData = landmark?.videos?.[0];
  const videoURL = videoData?.media || "";
  const siteURL = "https://alrawi2.suwa.com.sa/";

  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      // رجوع من صفحة الفيديو فقط
      const fromVideo = sessionStorage.getItem("justVisitedVideo");
      if (fromVideo === "true") {
        setIsDialog(true);
        sessionStorage.removeItem("justVisitedVideo");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* Open Graph for Facebook, WhatsApp, etc. */}
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:image" content={`${siteURL}/logo.png`} />
        <meta property="og:url" content={`${siteURL}${router.asPath}`} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteURL}/logo.png`} />
      </Head>

  

      <City
        isDialog={isDialog}
        setIsDialog={setIsDialog}
        landmark={landmark}
        dataSettings={dataSettings}
        dataTranslations={dataTranslations}
      />
    </>
  );
}

export async function getStaticPaths({ locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  try {
    const res = await fetch(`${apiDomain}/landmarks`, {
      headers: { locale },
    });
    const json = await res.json();
    const paths =
      json?.data?.map((item) => ({
        params: { id: item.id.toString() },
      })) || [];
    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Error in getStaticPaths:", error.message);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params, locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const { id } = params;

  try {
    const res = await fetch(`${apiDomain}/landmarks/${id}`, {
      headers: { locale },
    });
    const json = await res.json();

    const resSettings = await fetch(`${apiDomain}/settings`, {
      headers: { locale: locale },
    });
    const dataSettings = await resSettings.json();

    const resTranslations = await fetch(`${apiDomain}/translations`, {
      headers: { locale: locale },
    });
    const dataTranslations = await resTranslations.json();
    return {
      props: {
        landmark: json?.data || null,
        dataSettings: dataSettings?.data || null,
        dataTranslations: dataTranslations?.data || null,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error loading landmark:", error);
    return {
      props: {
        landmark: null,
        dataSettings: null,
        dataTranslations: null,
      },
      revalidate: 10,
    };
  }
}
