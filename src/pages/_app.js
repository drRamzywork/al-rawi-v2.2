import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
});
export default function App({ Component, pageProps }) {
  const combinedFontFamily = `${cairo.style.fontFamily} `;

  return (
    <div style={{ fontFamily: combinedFontFamily }}>
      <Component {...pageProps} />
    </div>
  );
}
