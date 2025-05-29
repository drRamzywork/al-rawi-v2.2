// require("dotenv").config(); // Load environment variables from .env.local
// const fs = require("fs");
// const path = require("path");
// const https = require("https");

// const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

// if (!apiDomain) {
//   console.error(
//     "Error: NEXT_PUBLIC_API_DOMAIN is not defined in the environment."
//   );
//   process.exit(1);
// }

// const apiURL = `${apiDomain}/languages`;
// const outputDir = path.join(process.cwd(), "public/locales");
// const outputPath = path.join(outputDir, "allLanguages.json");

// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// https
//   .get(apiURL, (resp) => {
//     let data = "";

//     resp.on("data", (chunk) => {
//       data += chunk;
//     });

//     resp.on("end", () => {
//       try {
//         const languages = JSON.parse(data);
//         const locales = Object.entries(languages.data).map(
//           ([code, language]) => code
//         );

//         fs.writeFileSync(outputPath, JSON.stringify(locales), "utf-8");
//         console.log("Locales have been updated.");
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//       }
//     });
//   })
//   .on("error", (err) => {
//     console.log("Error: " + err.message);
//   });

// require("dotenv").config(); // Load environment variables from .env.local
// const fs = require("fs");
// const path = require("path");
// const https = require("https");

// const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

// const outputDir = path.join(process.cwd(), "public/locales");
// const outputPath = path.join(outputDir, "allLanguages.json");

// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// const fallbackLocales = ["ar", "en"];

// if (!apiDomain) {
//   console.warn("NEXT_PUBLIC_API_DOMAIN is not defined. Using fallback locales.");
//   fs.writeFileSync(outputPath, JSON.stringify(fallbackLocales), "utf-8");
//   process.exit(0);
// }

// const apiURL = `${apiDomain}/languages`;

// https
//   .get(apiURL, (resp) => {
//     let data = "";

//     resp.on("data", (chunk) => {
//       data += chunk;
//     });

//     resp.on("end", () => {
//       try {
//         const languages = JSON.parse(data);
//         const locales = Object.entries(languages.data).map(
//           ([code]) => code
//         );

//         if (locales.length === 0) {
//           console.warn("No locales found in API response. Using fallback.");
//           fs.writeFileSync(outputPath, JSON.stringify(fallbackLocales), "utf-8");
//         } else {
//           fs.writeFileSync(outputPath, JSON.stringify(locales), "utf-8");
//           console.log("Locales have been updated.");
//         }
//       } catch (error) {
//         console.error("Error parsing JSON. Using fallback.", error);
//         fs.writeFileSync(outputPath, JSON.stringify(fallbackLocales), "utf-8");
//       }
//     });
//   })
//   .on("error", (err) => {
//     console.error("Error fetching locales from API. Using fallback.", err);
//     fs.writeFileSync(outputPath, JSON.stringify(fallbackLocales), "utf-8");
//   });
