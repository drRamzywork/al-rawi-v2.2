// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["alrawi.rmz.im"],
//   },
//   i18n: {
//     locales: ["ar", "en"],
//     defaultLocale: "ar",
//     localeDetection: false,
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["alrawi.rmz.im"],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alrawi.rmz.im",
      },
    ],
  },
};

export default nextConfig;
