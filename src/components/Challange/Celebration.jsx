import styles from "@/styles/quiz.module.scss";
import { motion } from "framer-motion";
import styles2 from "./index.module.scss";
import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";
const Celebration = ({ onResult }) => {
  return (
    <>

      <motion.div


        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, type: "tween" }} className={styles2.header} id={styles2.header2}>
        <div className="container d-flex flex-column justify-content-center align-items-center">
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
                src="/assets/imgs/quiez/2.gif"
                alt="Trophy"
                className={styles.main_img}
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                تهانيناً
              </motion.h2>
              <p>لقد أتممت التحدي</p>
              <div className={styles.buttons}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={onResult}
                >
                  مشاهدة النتيجة
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
