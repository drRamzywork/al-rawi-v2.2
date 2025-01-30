import styles from "@/styles/quiz.module.scss";
import { motion } from "framer-motion";
import styles2 from "../challenge/index.module.scss";
import styles3 from "./index.module.scss";
import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Celebration = ({ onResult }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
        className={styles2.header}
        id={styles2.header2}
      >
        <div className="container">
          <div className={styles2.header_container}>
            <button
              onClick={() => setLangsWindow(false)}
              className={styles2.back_btn}
            >
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
            <motion.div
              className={styles.celebrationContainer}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src="/assets/imgs/quiez/1.png"
                alt="Trophy"
                className={styles.trophy}
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />

              <img
                src="/assets/imgs/quiez/3.gif"
                alt="Trophy"
                className={styles.main_img}
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                3/2
              </motion.h2>
              <div className={styles3.resultContainer}>
                <p>ملخص الأجوبة</p>
                <hr />
                <ul>
                  <li>
                    <div className={styles3.question}>
                      <p>1- أين تقع قصور عروة؟ </p>
                      <div className={styles3.user_answer}>
                        <p>في المدينة المنورة</p>
                      </div>
                    </div>


                    <div className={styles3.icons_container}>
                      <CiCircleCheck />

                    </div>

                  </li>

                  <hr />


                  <li>
                    <div className={styles3.question}>
                      <p>2-إلى أي العصور يعود قصر عروة؟</p>
                      <div className={styles3.user_answer}>
                        <p>  العصر الأموي</p>
                      </div>
                    </div>


                    <div className={styles3.icons_container}>
                      <CiCircleCheck />

                    </div>

                  </li>


                  <hr />

                  <li>
                    <div className={styles3.question}>
                      <p>3- لأي غرض استخدمت القلعة التاريخية قديمًا؟ </p>
                      <div className={styles3.user_answer}>
                        <p>   استُخدمت القلعة التاريخية قديمًا للزيارة</p>
                      </div>


                      <div className={styles3.correct_question}>
                        <p>الإجابة الصحيحة هي:</p>

                        <div className={styles3.user_answer}>
                          <p>استُخدمت القلعة التاريخية قديمًا للحماية العسكرية</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles3.icons_wrong}>
                      <IoIosCloseCircleOutline />

                    </div>

                  </li>


                </ul>

              </div>

              <div className={styles.buttons}>
                <motion.button
                  onClick={() => (window.location.href = "/")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  العودة للرئيسية
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Celebration;
