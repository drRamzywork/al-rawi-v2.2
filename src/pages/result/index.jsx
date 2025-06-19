// import styles from "@/styles/quiz.module.scss";
// import { motion } from "framer-motion";
// import styles2 from "../challenge/index.module.scss";
// import styles3 from "./index.module.scss";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Image from "next/image";
// import { CiCircleCheck } from "react-icons/ci";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Head from "next/head";

// const questions = [
//   {
//     question: "أين يقع بيت البيعة؟",
//     options: ["الأحساء", "مكة", "الرياض"],
//     correct: 0,
//   },
//   {
//     question: "متى بُني بيت البيعة؟",
//     options: ["1203هـ - 1788م", "1320هـ - 1902م", "1100هـ - 1688م"],
//     correct: 1,
//   },
//   {
//     question: "ما الحدث التاريخي الذي جرى في بيت البيعة؟",
//     options: [
//       "مبايعة الملك عبدالعزيز -رحمه الله",
//       "تأسيس المملكة",
//       "افتتاح الأحساء",
//     ],
//     correct: 0,
//   },
// ];

// const Result = ({ onResult }) => {
//   const siteName = "  الراوي | نـتـيـجـة تحدي بيت البيعة  ";
//   const imagePath = "/assets/imgs/rawi.png";
//   const siteDescrription = "استكشف عالم الجمال في المملكة";

//   const siteURL = "https://alrawi2.suwa.com.sa/";
//   const videoURL = "https://suwa.com.sa/v/rawai/f.mp4";

//   return (
//     <>
//       <Head>
//         <title>{siteName}</title>
//         <meta charSet="UTF-8" />
//         <link rel="icon" href={imagePath} />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

//         <meta name="title" content={siteName} />
//         <meta name="description" content={siteDescrription} />
//         <meta property="og:type" content="video.other" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:locale" content="ar" />
//         <meta property="og:locale:alternate" content="ar" />
//         <meta property="og:url" content={videoURL} />
//         <meta property="og:title" content={siteName} />
//         <meta property="og:description" content={siteDescrription} />
//         <meta property="og:video" content={videoURL} />
//         <meta property="og:video:secure_url" content={videoURL} />
//         <meta property="og:video:type" content="video/mp4" />
//         <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />

//         <meta name="twitter:card" content="player" />
//         <meta name="twitter:title" content={siteName} />
//         <meta name="twitter:description" content={siteDescrription} />
//         <meta name="twitter:player" content={videoURL} />
//         <meta name="twitter:player:width" content="1280" />
//         <meta name="twitter:player:height" content="720" />
//         <meta name="twitter:image" content={`${siteURL}/video-thumbnail.jpg`} />

//         <link rel="canonical" href={videoURL} />
//       </Head>
//       <motion.div className={styles2.header} id={styles2.header2}>
//         <div className={styles2.shape_container}>
//           <Image
//             src="/assets/svgs/shape.svg"
//             alt="Vercel logomark"
//             width={100}
//             height={100}
//           />
//         </div>
//         <div className="container d-flex flex-column justify-content-center align-items-center ">
//           <div className={styles2.header_container}>
//             <button
//               onClick={() => setLangsWindow(false)}
//               className={styles2.back_btn}
//             >
//               <IoChevronForwardOutline />
//             </button>

//             <div onClick={() => setLangsWindow(false)} className={styles2.logo}>
//               <Image
//                 src="/assets/svgs/logoColored.svg"
//                 alt="Vercel logomark"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>

//           <div className={styles2.box_container}>
//             <div className={styles.celebrationContainer}>
//               <motion.div
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               ></motion.div>

//               <div class={styles3.pyro}>
//                 <div class={styles3.before}></div>
//                 <div class={styles3.after}></div>
//               </div>
//               <img
//                 src="/assets/imgs/quiez/3.gif"
//                 alt="Trophy"
//                 className={styles.main_img}
//               />

//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 3/2
//               </motion.h2>

//               <div className={styles3.resultContainer}>
//                 <p>ملخص الأجوبة</p>
//                 <hr />
//                 <ul>
//                   <li>
//                     <div className={styles3.question}>
//                       <p>1- أين يقع بيت البيعة؟ </p>
//                       <div className={styles3.user_answer}>
//                         <p>في الأحساء</p>
//                       </div>
//                     </div>
//                     <div className={styles3.icons_container}>
//                       <CiCircleCheck />
//                     </div>
//                   </li>

//                   <hr />

//                   <li>
//                     <div className={styles3.question}>
//                       <p>2- متى بُني بيت البيعة؟</p>
//                       <div className={styles3.user_answer}>
//                         <p>1203هـ - 1788م</p>
//                         ["م", "1320هـ - 1902م ", "1100هـ - 1688م "]
//                       </div>
//                     </div>
//                     <div className={styles3.icons_container}>
//                       <CiCircleCheck />
//                     </div>
//                   </li>

//                   <hr />

//                   <li>
//                     <div className={styles3.question}>
//                       <p>3- ما الحدث التاريخي الذي جرى في بيت البيعة؟ </p>
//                       <div className={styles3.user_answer}>
//                         <p>تأسيس المملكة</p>
//                       </div>
//                       <div className={styles3.correct_question}>
//                         <p>الإجابة الصحيحة هي:</p>
//                         <div className={styles3.user_answer}>
//                           <p>مبايعة الملك عبدالعزيز -رحمه الله</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className={styles3.icons_wrong}>
//                       <IoIosCloseCircleOutline />
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               <div className={styles.buttons}>
//                 <motion.button
//                   onClick={() => (window.location.href = "/")}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   العودة للرئيسية
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles2.shape_container2}>
//           <Image
//             src="/assets/svgs/shape.svg"
//             alt="Vercel logomark"
//             width={100}
//             height={100}
//           />
//         </div>
//       </motion.div>
//       ;
//     </>
//   );
// };

// export default Result;

// _+++++++++++++++++++++++++++++++

// import styles from "@/styles/quiz.module.scss";
// import { motion } from "framer-motion";
// import styles2 from "../challenge/index.module.scss";
// import styles3 from "./index.module.scss";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Image from "next/image";
// import { CiCircleCheck } from "react-icons/ci";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const questions = [
//   {
//     question: "أين يقع بيت البيعة؟",
//     options: ["الأحساء", "مكة", "الرياض"],
//     correct: 0,
//   },
//   {
//     question: "متى بُني بيت البيعة؟",
//     options: ["1203هـ - 1788م", "1320هـ - 1902م", "1100هـ - 1688م"],
//     correct: 1,
//   },
//   {
//     question: "ما الحدث التاريخي الذي جرى في بيت البيعة؟",
//     options: [
//       "مبايعة الملك عبدالعزيز -رحمه الله",
//       "تأسيس المملكة",
//       "افتتاح الأحساء",
//     ],
//     correct: 0,
//   },
// ];

// export default function ResultPage() {
//   const router = useRouter();
//   const [correctCount, setCorrectCount] = useState(0);
//   const [userAnswers, setUserAnswers] = useState({});

//   useEffect(() => {
//     if (router.query.answers) {
//       const parsedAnswers = JSON.parse(router.query.answers);
//       setUserAnswers(parsedAnswers);

//       let correct = 0;
//       questions.forEach((q, index) => {
//         if (parsedAnswers[index] == q.correct) {
//           correct += 1;
//         }
//       });
//       setCorrectCount(correct);
//     }
//   }, [router.query.answers]);

//   return (
//     <motion.div className={styles2.header} id={styles2.header2}>
//       <div className={styles2.shape_container}>
//         <Image
//           src="/assets/svgs/shape.svg"
//           alt="shape"
//           width={100}
//           height={100}
//         />
//       </div>

//       <div className="container d-flex flex-column justify-content-center align-items-center">
//         <div className={styles2.header_container}>
//           <button
//             onClick={() => setLangsWindow(false)}
//             className={styles2.back_btn}
//           >
//             <IoChevronForwardOutline />
//           </button>

//           <div onClick={() => setLangsWindow(false)} className={styles2.logo}>
//             <Image
//               src="/assets/svgs/logoColored.svg"
//               alt="Vercel logomark"
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>

//         <div className={styles2.box_container}>
//           <div className={styles.celebrationContainer}>
//             {correctCount === questions.length && (
//               <>
//                 <div className={styles3.pyro}>
//                   <div className={styles3.before}></div>
//                   <div className={styles3.after}></div>
//                 </div>
//                 <img
//                   src="/assets/imgs/quiez/3.gif"
//                   alt="Trophy"
//                   className={styles.main_img}
//                   style={{ width: "120px", marginBottom: "20px" }}
//                 />
//               </>
//             )}

//             <motion.h2
//               style={{ color: "#fff", fontSize: "24px" }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {`${questions.length}/${correctCount}`}
//             </motion.h2>

//             {correctCount === questions.length && (
//               <p className="text-white">تهانينا إجاباتك صحيحة! 🎉</p>
//             )}
//             {correctCount < questions.length && correctCount > 0 && (
//               <p className="text-warning">
//                 حاول مرة أخرى لديك بعض الإجابات خاطئة
//               </p>
//             )}
//             {correctCount === 0 && (
//               <p className="text-danger">لم توفق، جرّب مرة أخرى.</p>
//             )}

//             <div
//               className={styles3.resultContainer}
//               style={{ marginTop: "30px" }}
//             >
//               <p>ملخص الأجوبة</p>
//               <hr />
//               <ul>
//                 {questions.map((q, index) => {
//                   const userAnswerIndex = userAnswers[index];
//                   const isCorrect = userAnswerIndex == q.correct;

//                   return (
//                     <li key={index}>
//                       <div className={styles3.question}>
//                         <p>{`${index + 1}- ${q.question}`}</p>
//                         <div className={styles3.user_answer}>
//                           <p>
//                             {q.options[userAnswerIndex] ||
//                               "لم يتم اختيار إجابة"}
//                           </p>
//                         </div>

//                         {!isCorrect && (
//                           <div className={styles3.correct_question}>
//                             <p>الإجابة الصحيحة:</p>
//                             <div className={styles3.user_answer}>
//                               <p>{q.options[q.correct]}</p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                       <div
//                         className={
//                           isCorrect
//                             ? styles3.icons_container
//                             : styles3.icons_wrong
//                         }
//                       >
//                         {isCorrect ? (
//                           <CiCircleCheck />
//                         ) : (
//                           <IoIosCloseCircleOutline />
//                         )}
//                       </div>
//                       <hr />
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>

//             <div className={styles.buttons} style={{ marginTop: "30px" }}>
//               <motion.button
//                 onClick={() => router.push("/")}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 العودة للرئيسية
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles2.shape_container2}>
//         <Image
//           src="/assets/svgs/shape.svg"
//           alt="shape"
//           width={100}
//           height={100}
//         />
//       </div>
//     </motion.div>
//   );
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import styles from "@/styles/quiz.module.scss";
import { motion } from "framer-motion";
import styles2 from "../challenge/index.module.scss";
import styles3 from "./index.module.scss";
import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const router = useRouter();
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const { answers, questions: questionsQuery } = router.query;

    if (!answers || !questionsQuery) {
      router.replace("/");
      return;
    }

    try {
      const parsedAnswers = JSON.parse(answers);
      const parsedQuestions = JSON.parse(questionsQuery);

      const formattedQuestions = parsedQuestions.map((q) => ({
        question: q.question, // لاحظ هنا كانت title لو جاية من challenge
        options: q.options,
        correct: q.correct,
      }));

      setQuestions(formattedQuestions);
      setUserAnswers(parsedAnswers);

      let correct = 0;
      formattedQuestions.forEach((q, index) => {
        if (parsedAnswers[index] === q.correct) correct++;
      });

      setCorrectCount(correct);
    } catch (error) {
      console.error("Error parsing result data:", error);
      router.replace("/");
    }
  }, [router.query]);

  return (
    <motion.div className={styles2.header} id={styles2.header2}>
      <div className={styles2.shape_container}>
        <Image
          src="/assets/svgs/shape.svg"
          alt="shape"
          width={100}
          height={100}
        />
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className={styles2.header_container}>
          <button onClick={() => router.push("/")} className={styles2.back_btn}>
            <IoChevronForwardOutline />
          </button>

          <div onClick={() => router.push("/")} className={styles2.logo}>
            <Image
              src="/assets/svgs/logoColored.svg"
              alt="Vercel logomark"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className={styles2.box_container}>
          <div className={styles.celebrationContainer}>
            {correctCount === questions.length && (
              <>
                <div className={styles3.pyro}>
                  <div className={styles3.before}></div>
                  <div className={styles3.after}></div>
                </div>
                <img
                  src="/assets/imgs/quiez/3.gif"
                  alt="Trophy"
                  className={styles.main_img}
                  style={{ width: "120px", marginBottom: "20px" }}
                />
              </>
            )}

            <motion.h2
              style={{ color: "#fff", fontSize: "24px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {`${questions.length}/${correctCount}`}
            </motion.h2>

            {correctCount === questions.length && (
              <p className="text-white">تهانينا إجاباتك صحيحة! 🎉</p>
            )}
            {correctCount < questions.length && correctCount > 0 && (
              <p className="text-warning">
                حاول مرة أخرى لديك بعض الإجابات خاطئة
              </p>
            )}
            {correctCount === 0 && (
              <p className="text-danger">لم توفق، جرّب مرة أخرى.</p>
            )}

            <div
              className={styles3.resultContainer}
              style={{ marginTop: "30px" }}
            >
              <p>ملخص الأجوبة</p>
              <hr />
              <ul>
                {questions.map((q, index) => {
                  const userAnswerIndex = userAnswers[index];
                  const isCorrect = userAnswerIndex === q.correct;

                  return (
                    <li key={index}>
                      <div className={styles3.question}>
                        <p>{`${index + 1}- ${q.question}`}</p>
                        <div className={styles3.user_answer}>
                          <p>
                            {q.options[userAnswerIndex] ||
                              "لم يتم اختيار إجابة"}
                          </p>
                        </div>

                        {!isCorrect && (
                          <div className={styles3.correct_question}>
                            <p>الإجابة الصحيحة:</p>
                            <div className={styles3.user_answer}>
                              <p>{q.options[q.correct]}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        className={
                          isCorrect
                            ? styles3.icons_container
                            : styles3.icons_wrong
                        }
                      >
                        {isCorrect ? (
                          <CiCircleCheck />
                        ) : (
                          <IoIosCloseCircleOutline />
                        )}
                      </div>
                      <hr />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.buttons} style={{ marginTop: "30px" }}>
              <motion.button
                onClick={() => router.push("/")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                العودة للرئيسية
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles2.shape_container2}>
        <Image
          src="/assets/svgs/shape.svg"
          alt="shape"
          width={100}
          height={100}
        />
      </div>
    </motion.div>
  );
}
