const fs = require("fs");
const path = require("path");
const axios = require("axios");

const apiUrl = "https://alrawi.rmz.im/api/languages";

async function updateLocales() {
  try {
    const { data } = await axios.get(apiUrl);
    const locales = data?.data?.map((lang) => lang.code);

    if (!locales?.length) throw new Error("No locales returned");

    const configPath = path.join(__dirname, "../next.config.js");
    const fileContent = `
/** Auto-generated from API */
const nextConfig = {
  i18n: {
    locales: ${JSON.stringify(locales)},
    defaultLocale: "${locales.includes("ar") ? "ar" : locales[0]}",
  },
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

module.exports = nextConfig;
    `;

    fs.writeFileSync(configPath, fileContent.trim());
    console.log("✅ next.config.js updated with locales:", locales);
  } catch (err) {
    console.error("❌ Failed to update locales", err);
  }
}

updateLocales();
