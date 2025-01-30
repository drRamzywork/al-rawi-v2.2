import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/quiz.module.scss";
import styles2 from "./index.module.scss";
import Celebration from "./Celebration";
import Question from "./Question";
import ProgressCircle from "./ProgressCircle";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoChevronForwardOutline } from "react-icons/io5";

const questions = [
  { question: "أين تقع قصور عروة؟", options: ["مكة المكرمة", "الاحساء", "في الرياض", "في المدينة المنورة"], correct: 0 },
  { question: "إلى أي العصور يعود قصر عروة؟", options: ["عصر ما قبل الإسلام", "العصر الحديث", "العصر الأموي", "العصر العباسي"], correct: 1 },
  { question: "لأي غرض استخدمت القلعة التاريخية قديمًا؟", options: ["استُخدمت القلعة التاريخية قديمًا للحماية العسكرية", "استُخدمت القلعة التاريخية قديمًا للتجارة", "استُخدمت القلعة التاريخية قديمًا للزيارة", "جميع ما ذكر"], correct: 1 },
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const router = useRouter();

  const handleSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentStep]: index });
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep("celebration");
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  if (currentStep === "celebration") {
    return <Celebration onResult={() => router.push("/result")} />;
  }

  return (
    <>
      <motion.div initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, type: "tween" }} className={styles2.header} id='header'>
        <div
          className={styles2.shape_container}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>
        <div className="container">

          <div className={styles2.header_container}>
            <button onClick={() => setLangsWindow(false)} className={styles2.back_btn}>
              <IoChevronForwardOutline />
            </button>


            <div onClick={() => setLangsWindow(false)} className={styles2.logo}>
              <Image
                src="/assets/svgs/logoColored.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>


          </div>



          <div className={styles2.box_container}>


            <div className={styles2.header_box}>
              <ProgressCircle current={currentStep + 1} total={questions.length} />


            </div>


            <div className={styles2.boxes_container}>

              <div className={styles.quizContainer}>

                <Question
                  question={questions[currentStep].question}
                  options={questions[currentStep].options}
                  onSelect={handleSelect}
                  audioSrc={'/assets/audio/select.m4a'}
                  selectedAnswer={selectedAnswers[currentStep]}
                />
                <div className={styles.buttons}>
                  {currentStep > 0 && <button onClick={goBack}>الرجوع</button>}
                  <button onClick={nextQuestion}>التالي</button>
                </div>
              </div>

            </div>




          </div>


        </div>




        <div className={styles2.shape_container2}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>
      </motion.div>

    </>

  );
}
