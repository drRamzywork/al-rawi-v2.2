import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";
import { LangProvider } from "@/context/LangContext"; // ← تأكد المسار صح

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  const combinedFontFamily = `${cairo.style.fontFamily} `;

  return (
    <LangProvider>
      <div style={{ fontFamily: combinedFontFamily }}>
        <Component {...pageProps} />
      </div>
    </LangProvider>
  );
}
