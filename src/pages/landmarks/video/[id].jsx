import Head from "next/head";
import City from "@/components/Pages/City";
import { useRouter } from "next/router";

export default function LandmarkVideo({
  landmark,
  dataSettings,
  dataTranslations,
}) {
  const { locale } = useRouter();
  const siteName = `${dataSettings?.site_title} | ${landmark?.title}`;
  const siteDescription = landmark?.desc;

  const videoData = landmark?.videos?.[0];
  const videoURL = videoData?.media || "";
  const siteURL = "https://alrawi2.suwa.com.sa/";

  console.log(landmark, "landmark city");
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:video:type" content="video/mp4" />
        <meta
          property="og:image"
          content={landmark?.main_media || `${siteURL}/video-thumbnail.jpg`}
        />
      </Head>

      <City
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
