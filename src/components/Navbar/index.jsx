// import Image from "next/image";
// import React, { useState } from "react";
// import styles from "./index.module.scss";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
// import { motion } from "framer-motion";
// import { useLangs } from "@/context/LangContext";

// // ثم:

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { SearchOverlay } from "@/utils/SearchOverlay";

// // const langs = [
// //   {
// //     code: "ar",
// //     native: "Arabic",
// //     name: "العـــربــيـة",
// //     img: "/assets/imgs/langs/ar.png",
// //   },
// //   {
// //     code: "en",
// //     native: "English",
// //     name: "الإنجليزيــة",
// //     img: "/assets/imgs/langs/en.png",
// //   },
// //   {
// //     code: "fr",
// //     native: "Français",
// //     name: "الـفـرنـسية",
// //     img: "/assets/imgs/langs/fr.png",
// //   },
// //   {
// //     code: "ch",
// //     native: "汉语",
// //     name: "الصـيـنـيــة",
// //     img: "/assets/imgs/langs/ch.png",
// //   },
// //   {
// //     code: "ru",
// //     native: "Русский",
// //     name: "الــروسـيـة",
// //     img: "/assets/imgs/langs/ru.png",
// //   },
// //   {
// //     code: "es",
// //     native: "Español",
// //     name: "الإسـبانيـة",
// //     img: "/assets/imgs/langs/es.png",
// //   },
// // ];

// const Navbar = ({
//   isHome,
//   dataSettings,
//   dataHistoricalSites,
//   dataAllLandmarks,
// }) => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const [LangsWindow, setLangsWindow] = useState(false);
//   const router = useRouter();
//   const { pathname, asPath, query } = router;
//   const { langs } = useLangs();

//   const handleLanguageChange = (langCode) => {
//     router.push({ pathname, query }, asPath, { locale: langCode });
//     setLangsWindow(false);
//   };

//   console.log(dataHistoricalSites, "dataHistoricalSites");
//   const handleSearch = (text) => {
//     setSearchValue(text);
//     if (!text) return setSearchResults([]);

//     const lower = text.toLowerCase();

//     const fromHistorical = dataHistoricalSites
//       .filter((item) => item?.title?.toLowerCase().includes(lower))
//       .map((item) => ({ ...item, source: "historical-sites" }));

//     const fromLandmarks = dataAllLandmarks
//       .filter((item) => item?.title?.toLowerCase().includes(lower))
//       .map((item) => ({ ...item, source: "landmarks" }));

//     setSearchResults([
//       { title: "المواقع التاريخية", items: fromHistorical },
//       { title: "العالم", items: fromLandmarks },
//     ]);
//   };

//   const handleSelect = (item) => {
//     const base =
//       item.source === "historical-sites"
//         ? "/dataHistoricalSites/video"
//         : "/landmarks/video";
//     router.push(`${base}/${item.id}`);
//     setIsSearchOpen(false);
//     setSearchValue("");
//   };
//   return (
//     <>
//       <nav className={styles.navbar}>
//         <div className="container">
//           <div className={styles.nav_container}>
//             <div className={styles.icon_container}>
//               {isHome ? (
//                 <div onClick={() => setIsSearchOpen(true)}>
//                   <Image
//                     src="/assets/svgs/search.svg"
//                     alt="Search"
//                     width={24}
//                     height={24}
//                   />
//                 </div>
//               ) : (
//                 <Link href="/" className={styles.back_btn}>
//                   <IoChevronForwardOutline />
//                 </Link>
//               )}
//             </div>

//             <div className={styles.logo}>
//               <Image
//                 // src="/assets/svgs/logo.svg"
//                 src={dataSettings?.logo}
//                 alt="Logo"
//                 width={100}
//                 height={100}
//               />
//             </div>

//             {isHome && (
//               <div
//                 className={styles.icon_container2}
//                 onClick={() => setLangsWindow(true)}
//               >
//                 <Image
//                   src="/assets/svgs/langs.svg"
//                   alt="Language"
//                   width={24}
//                   height={24}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {LangsWindow && (
//         <motion.div className={styles.header} id="header">
//           <div className="container">
//             <div className={styles.header_container}>
//               <button
//                 onClick={() => setLangsWindow(false)}
//                 className={styles.back_btn}
//               >
//                 <IoChevronForwardOutline />
//               </button>

//               <div
//                 onClick={() => setLangsWindow(false)}
//                 className={styles.logo}
//               >
//                 <Image
//                   src="/assets/svgs/logoColored.svg"
//                   alt="Logo"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//             </div>

//             <div className={styles.box_container}>
//               <div className={styles.header_box}>
//                 <div className={styles.title}>
//                   <div className={styles.icon_container}>
//                     <Image
//                       src="/assets/svgs/langsColored.svg"
//                       alt="Icon"
//                       width={24}
//                       height={19}
//                     />
//                   </div>
//                   <p>اختر لغتك</p>
//                 </div>
//                 <div className={styles.desc}>
//                   <p>Choose a Language</p>
//                 </div>
//               </div>

//               <div className={styles.boxes_container}>
//                 <Swiper
//                   direction="vertical"
//                   slidesPerView={3.8}
//                   spaceBetween={8}
//                   pagination={{ clickable: true }}
//                   mousewheel={true}
//                   freeMode={true}
//                   modules={[Pagination, Mousewheel, FreeMode]}
//                   dir="rtl"
//                   className={styles.swiper}
//                 >
//                   {langs.map((lang) => (
//                     <SwiperSlide key={lang.code}>
//                       <div
//                         className={styles.box}
//                         onClick={() => handleLanguageChange(lang.code)}
//                       >
//                         <div className={styles.title}>
//                           <p>{lang.name}</p>
//                         </div>
//                         <div className={styles.flag_container}>
//                           <Image
//                             src={lang.img}
//                             alt={lang.native}
//                             width={28}
//                             height={27}
//                           />
//                         </div>
//                         <div className={styles.title}>
//                           <p>{lang.native}</p>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}

//       {isSearchOpen && (
//         <SearchOverlay
//           visible={isSearchOpen}
//           value={searchValue}
//           onClose={() => setIsSearchOpen(false)}
//           onSearch={handleSearch}
//           results={searchResults}
//           onSelect={handleSelect}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import Image from "next/image";
// import React, { useState } from "react";
// import styles from "./index.module.scss";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
// import { motion } from "framer-motion";
// import { useLangs } from "@/context/LangContext";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { SearchOverlay } from "@/utils/SearchOverlay";

// const Navbar = ({
//   isHome,
//   dataSettings,
//   dataHistoricalSites,
//   dataAllLandmarks,
// }) => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [LangsWindow, setLangsWindow] = useState(false);

//   const router = useRouter();
//   const { pathname, asPath, query } = router;
//   const { langs } = useLangs();

//   const handleLanguageChange = (langCode) => {
//     router.push({ pathname, query }, asPath, { locale: langCode });
//     setLangsWindow(false);
//   };

//   const handleSearch = (text) => {
//     setSearchValue(text);
//     if (!text) return setSearchResults([]);

//     const lower = text.toLowerCase();

//     const fromHistorical = dataHistoricalSites
//       .filter((item) => item?.title?.toLowerCase().includes(lower))
//       .map((item) => ({ ...item, source: "historical-sites" }));

//     const fromLandmarks = dataAllLandmarks
//       .filter((item) => item?.title?.toLowerCase().includes(lower))
//       .map((item) => ({ ...item, source: "landmarks" }));

//     setSearchResults([
//       { title: "المواقع التاريخية", items: fromHistorical },
//       { title: "العالم", items: fromLandmarks },
//     ]);
//   };

//   const handleSelect = (item) => {
//     const base =
//       item.source === "historical-sites"
//         ? "/dataHistoricalSites/video"
//         : "/landmarks/video";
//     router.push(`${base}/${item.id}`);
//     setIsSearchOpen(false);
//     setSearchValue("");
//   };

//   return (
//     <>
//       <nav className={styles.navbar}>
//         <div className="container">
//           <div className={styles.nav_container}>
//             <div className={styles.icon_container}>
//               {isHome ? (
//                 <div onClick={() => setIsSearchOpen(true)}>
//                   <Image
//                     src="/assets/svgs/search.svg"
//                     alt="Search"
//                     width={24}
//                     height={24}
//                   />
//                 </div>
//               ) : (
//                 <Link href="/" className={styles.back_btn}>
//                   <IoChevronForwardOutline />
//                 </Link>
//               )}
//             </div>

//             <div className={styles.logo}>
//               <Image
//                 src={dataSettings?.logo}
//                 alt="Logo"
//                 width={100}
//                 height={100}
//               />
//             </div>

//             {isHome && (
//               <div
//                 className={styles.icon_container2}
//                 onClick={() => setLangsWindow(true)}
//               >
//                 <Image
//                   src="/assets/svgs/langs.svg"
//                   alt="Language"
//                   width={24}
//                   height={24}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {LangsWindow && (
//         <motion.div className={styles.header} id="header">
//           <div className="container">
//             <div className={styles.header_container}>
//               <button
//                 onClick={() => setLangsWindow(false)}
//                 className={styles.back_btn}
//               >
//                 <IoChevronForwardOutline />
//               </button>

//               <div
//                 onClick={() => setLangsWindow(false)}
//                 className={styles.logo}
//               >
//                 <Image
//                   src="/assets/svgs/logoColored.svg"
//                   alt="Logo"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//             </div>

//             <div className={styles.box_container}>
//               <div className={styles.header_box}>
//                 <div className={styles.title}>
//                   <div className={styles.icon_container}>
//                     <Image
//                       src="/assets/svgs/langsColored.svg"
//                       alt="Icon"
//                       width={24}
//                       height={19}
//                     />
//                   </div>
//                   <p>اختر لغتك</p>
//                 </div>
//                 <div className={styles.desc}>
//                   <p>Choose a Language</p>
//                 </div>
//               </div>

//               <div className={styles.boxes_container}>
//                 <Swiper
//                   direction="vertical"
//                   slidesPerView={3.8}
//                   spaceBetween={8}
//                   pagination={{ clickable: true }}
//                   mousewheel={true}
//                   freeMode={true}
//                   modules={[Pagination, Mousewheel, FreeMode]}
//                   dir="rtl"
//                   className={styles.swiper}
//                 >
//                   {langs.map((lang) => (
//                     <SwiperSlide key={lang.code}>
//                       <div
//                         className={styles.box}
//                         onClick={() => handleLanguageChange(lang.code)}
//                       >
//                         <div className={styles.title}>
//                           <p>{lang.name}</p>
//                         </div>
//                         <div className={styles.flag_container}>
//                           <Image
//                             src={lang.img}
//                             alt={lang.native}
//                             width={28}
//                             height={27}
//                           />
//                         </div>
//                         <div className={styles.title}>
//                           <p>{lang.native}</p>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}

//       {isSearchOpen && (
//         <SearchOverlay
//           visible={isSearchOpen}
//           value={searchValue}
//           onClose={() => setIsSearchOpen(false)}
//           onSearch={handleSearch}
//           results={searchResults}
//           onSelect={handleSelect}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import Image from "next/image";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoChevronForwardOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import { useLangs } from "@/context/LangContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { SearchOverlay } from "@/utils/SearchOverlay";
import { i18n } from "../../../next.config";

const Navbar = ({ isHome, dataSettings, dataAllLandmarks }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [LangsWindow, setLangsWindow] = useState(false);

  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { langs } = useLangs();

  // const handleLanguageChange = (langCode) => {
  //   router.push({ pathname, query }, asPath, { locale: langCode });
  //   setLangsWindow(false);
  // };
  const handleLanguageChange = (langCode) => {
    // 1. احفظ اللغة في الكوكي يدويًا (آمن جدًا ومتاح في SSR والـ Client)
    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000`;

    // 2. غير اللغة باستخدام next/router (يدعم SSR)
    router.push({ pathname, query }, asPath, { locale: langCode });

    // 3. قفل نافذة اللغات
    setLangsWindow(false);
  };

  const handleSearch = (text) => {
    setSearchValue(text);
    if (!text) return setSearchResults([]);

    const lower = text.toLowerCase();

    const fromLandmarks = dataAllLandmarks
      .filter((item) => item?.title?.toLowerCase().includes(lower))
      .map((item) => ({ ...item, source: "landmarks" }));

    setSearchResults([{ title: "المعالم", items: fromLandmarks }]);
  };

  const handleSelect = (item) => {
    router.push(`/landmarks/video/${item.id}`);
    setIsSearchOpen(false);
    setSearchValue("");
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.nav_container}>
            <div className={styles.icon_container}>
              {isHome ? (
                <div onClick={() => setIsSearchOpen(true)}>
                  <Image
                    src="/assets/svgs/search.svg"
                    alt="Search"
                    width={24}
                    height={24}
                  />
                </div>
              ) : (
                <Link href="/" className={styles.back_btn}>
                  <IoChevronForwardOutline />
                </Link>
              )}
            </div>

            <div className={styles.logo}>
              <Image
                src={dataSettings?.logo}
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            {isHome && (
              <div
                className={styles.icon_container2}
                onClick={() => setLangsWindow(true)}
              >
                <Image
                  src="/assets/svgs/langs.svg"
                  alt="Language"
                  width={24}
                  height={24}
                />
              </div>
            )}
          </div>
        </div>
      </nav>

      {LangsWindow && (
        <motion.div className={styles.header} id="header">
          <div className="container">
            <div className={styles.header_container}>
              <button
                onClick={() => setLangsWindow(false)}
                className={styles.back_btn}
              >
                <IoChevronForwardOutline />
              </button>

              <div
                onClick={() => setLangsWindow(false)}
                className={styles.logo}
              >
                <Image
                  src="/assets/svgs/logoColored.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className={styles.box_container}>
              <div className={styles.header_box}>
                <div className={styles.title}>
                  <div className={styles.icon_container}>
                    <Image
                      src="/assets/svgs/langsColored.svg"
                      alt="Icon"
                      width={24}
                      height={19}
                    />
                  </div>
                  <p>اختر لغتك</p>
                </div>
                <div className={styles.desc}>
                  <p>Choose a Language</p>
                </div>
              </div>

              <div className={styles.boxes_container}>
                <Swiper
                  direction="vertical"
                  slidesPerView={3.8}
                  spaceBetween={8}
                  pagination={{ clickable: true }}
                  mousewheel={true}
                  freeMode={true}
                  modules={[Pagination, Mousewheel, FreeMode]}
                  dir="rtl"
                  className={styles.swiper}
                >
                  {langs.map((lang) => (
                    <SwiperSlide key={lang.code}>
                      <div
                        className={styles.box}
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        <div className={styles.title}>
                          <p>{lang.name}</p>
                        </div>
                        <div className={styles.flag_container}>
                          <Image
                            src={lang.img}
                            alt={lang.native}
                            width={28}
                            height={27}
                          />
                        </div>
                        <div className={styles.title}>
                          <p>{lang.native}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {isSearchOpen && (
        <SearchOverlay
          visible={isSearchOpen}
          value={searchValue}
          onClose={() => setIsSearchOpen(false)}
          onSearch={handleSearch}
          results={searchResults}
          onSelect={handleSelect}
        />
      )}
    </>
  );
};

export default Navbar;
