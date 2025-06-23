import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/quiz.module.scss";
import styles2 from "./index.module.scss";
import Question from "../../components/Challange/Question";
import ProgressCircle from "../../components/Challange/ProgressCircle";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoChevronForwardOutline } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";

export default function Quiz({ dataTranslations }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.questions) {
      try {
        const parsedQuestions = JSON.parse(router.query.questions);
        const formatted = parsedQuestions.map((q) => ({
          question: q.title,
          options: q.answers.map((a) => a.answer),
          correct: q.answers.findIndex((a) => a.is_correct),
        }));

        setQuestions(formatted);
      } catch (error) {
        console.error("Failed to parse questions:", error);
      }
    }
  }, [router.query.questions]);

  const handleSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentStep]: index });
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push({
        pathname: "/result",
        query: {
          answers: JSON.stringify(selectedAnswers),
          questions: JSON.stringify(router.query.questions),
        },
      });
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const siteName = "الراوي | تحدي";
  const imagePath = "/assets/imgs/rawi.png";
  const siteDescrription = "استكشف عالم الجمال في المملكة";
  const siteURL = "https://alrawi2.suwa.com.sa/";
  const videoURL = "https://suwa.com.sa/v/rawai/f.mp4";

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href={imagePath} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescrription} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:video" content={videoURL} />
        <meta property="og:image" content={`${siteURL}/video-thumbnail.jpg`} />
      </Head>

      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
        className={styles2.header}
        id="header"
      >
        <div className={styles2.shape_container}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Shape"
            width={100}
            height={100}
          />
        </div>
        <div className="container ">
          <div className={styles2.header_container}>
            <Link href="/" className={styles2.logo}>
              <Image
                src="/assets/svgs/logoColored.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className={styles2.box_container}>
            <div className={styles2.header_box}>
              <ProgressCircle
                current={currentStep + 1}
                total={questions.length}
              />
            </div>

            <div className={styles2.boxes_container}>
              {questions.length > 0 && (
                <div className={styles.quizContainer}>
                  <Question
                    question={questions[currentStep].question}
                    options={questions[currentStep].options}
                    onSelect={handleSelect}
                    audioSrc="/assets/audio/select.m4a"
                    selectedAnswer={selectedAnswers[currentStep]}
                  />
                  <div className={styles.buttons}>
                    {currentStep > 0 && (
                      <button onClick={goBack}>{dataTranslations?.back}</button>
                    )}
                    <button onClick={nextQuestion}>
                      {dataTranslations?.next}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles2.shape_container2}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Shape"
            width={100}
            height={100}
          />
        </div>
      </motion.div>
    </>
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
