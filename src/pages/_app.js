// import "@/styles/globals.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Cairo } from "next/font/google";
// import { LangProvider } from "@/context/LangContext"; // ← تأكد المسار صح

// const cairo = Cairo({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "600", "700", "900"],
//   style: ["normal"],
// });

// export default function App({ Component, pageProps }) {
//   const combinedFontFamily = `${cairo.style.fontFamily} `;

//   return (
//     <LangProvider>
//       <div style={{ fontFamily: combinedFontFamily }}>
//         <Component {...pageProps} />
//       </div>
//     </LangProvider>
//   );
// }

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { useRouter } from "next/router";
import { getDir } from "@/utils/dir";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const combinedFontFamily = `${cairo.style.fontFamily}`;
  const { locale } = useRouter();
  return (
    <LangProvider>
      <div
        dir={getDir(locale)}
        // style={{ fontFamily: combinedFontFamily }}
        style={{
          fontFamily:
            locale === "ar" ? "Tajawal-Medium" : cairo.style.fontFamily,
        }}
      >
        <Component {...pageProps} />
      </div>
    </LangProvider>
  );
}
