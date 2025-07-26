import styles from "@/styles/quiz.module.scss";
import { motion } from "framer-motion";
// import styles2 from "../challenge/index.module.scss";
import styles2 from "@/styles/Challange.module.scss";
import styles3 from "./index.module.scss";
import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDir } from "@/utils/dir";

export default function ResultPage({ dataTranslations }) {
  const router = useRouter();
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   const { answers, questions: questionsQuery } = router.query;

  //   if (!answers || !questionsQuery) {
  //     router.replace("/");
  //     return;
  //   }

  //   try {
  //     const parsedAnswers = JSON.parse(answers);
  //     const parsedQuestions = JSON.parse(questionsQuery);

  //     const formattedQuestions = parsedQuestions.map((q) => ({
  //       question: q.question, // لاحظ هنا كانت title لو جاية من challenge
  //       options: q.options,
  //       correct: q.correct,
  //     }));

  //     setQuestions(formattedQuestions);
  //     setUserAnswers(parsedAnswers);

  //     let correct = 0;
  //     formattedQuestions.forEach((q, index) => {
  //       if (parsedAnswers[index] === q.correct) correct++;
  //     });

  //     setCorrectCount(correct);
  //   } catch (error) {
  //     console.error("Error parsing result data:", error);
  //     router.replace("/");
  //   }
  // }, [router.query]);

  useEffect(() => {
    const { answers, questions } = router.query;

    if (!answers || !questions) {
      // router.replace("/");
      return;
    }

    try {
      const parsedAnswers = JSON.parse(answers);
      const originalQuestions = JSON.parse(JSON.parse(questions)); // ⬅️ لاحظ دي

      const formattedQuestions = originalQuestions.map((q) => ({
        question: q.title,
        options: q.answers.map((a) => a.answer),
        correct: q.answers.findIndex((a) => a.is_correct),
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

  const { locale } = useRouter();
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
        <div className={styles2.header_container} dir={getDir(locale)}>
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
              <p className="text-white">{dataTranslations.correct} 🎉</p>
            )}
            {correctCount < questions.length && correctCount > 0 && (
              <p className="text-warning">{dataTranslations.half_correct}</p>
            )}
            {correctCount === 0 && (
              <p className="text-danger">{dataTranslations.in_correct}</p>
            )}

            <div
              dir={getDir(locale)}
              className={styles3.resultContainer}
              style={{ marginTop: "30px" }}
            >
              <p>{dataTranslations?.short_answers}</p>
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
                              dataTranslations?.no_answer_selected}
                          </p>
                        </div>

                        {!isCorrect && (
                          <div className={styles3.correct_question}>
                            <p>{dataTranslations?.correct_answer}</p>
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
                onClick={() => {
                  // Fix: decode if double-encoded JSON string
                  let questionsParam = router.query.questions;
                  if (questionsParam) {
                    try {
                      // If it's a stringified string, parse it once
                      if (typeof questionsParam === "string" && questionsParam.startsWith('"') && questionsParam.endsWith('"')) {
                        questionsParam = JSON.parse(questionsParam);
                      }
                    } catch (e) {}
                    router.push(`/challenge?questions=${encodeURIComponent(questionsParam)}`);
                  } else {
                    router.push("/challenge");
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {dataTranslations?.try_again}
              </motion.button>
            </div>
            <div className={styles.buttons} style={{ marginTop: "30px" }}>
              <motion.button
                onClick={() => router.push("/")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {dataTranslations?.back_home}
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

export async function getServerSideProps({ locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  try {
    const resTranslations = await fetch(`${apiDomain}/translations`, {
      headers: { locale: locale },
    });
    const dataTranslations = await resTranslations.json();

    return {
      props: {
        dataTranslations: dataTranslations?.data || null,
      },
    };
  } catch (error) {
    return {
      props: {
        dataTranslations: {},
      },
    };
  }
}
