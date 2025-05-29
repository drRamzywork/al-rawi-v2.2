// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const fs = require("fs");
// const path = require("path");

// const locales = JSON.parse(
//   fs.readFileSync(path.resolve("./public/locales/allLanguages.json"), "utf-8")
// );

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["app.newmuslimguide.com"],
//   },

//   i18n: {
//     locales,
//     defaultLocale: "ar",
//     localeDetection: false,
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["alrawi.rmz.im"],
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
};

export default nextConfig;
