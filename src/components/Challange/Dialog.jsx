// import React from "react";
// import { motion } from "framer-motion";
// import styles from "../DraggableBox/Menu3/index.module.scss";
// import { IoClose } from "react-icons/io5";
// import Link from "next/link";

// const Dialog = ({ setIsDialog, questions, landmarkId }) => {
//   return (
//     <>
//       <motion.div
//         className={styles.container}
//         transition={{
//           type: "spring",
//           damping: 40,
//           stiffness: 400,
//         }}
//         initial={{ scale: 0.9, opacity: 0 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         id="dialog"
//         dir="rtl"
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 0.5, type: "tween" }}
//           className={styles.box_container}
//         >
//           <div className={styles.close_icon} onClick={() => setIsDialog(false)}>
//             <IoClose />
//           </div>
//           <div className={styles.title}>
//             <p>استكشف معلوماتك حول هذا المعلم؟</p>
//           </div>
//           <div className={styles.btns_container}>
//             <Link href={`/`}>
//               <p>لا</p>
//             </Link>
//             <Link
//               href={{
//                 pathname: "/challenge",
//                 query: {
//                   questions: Array.isArray(questions)
//                     ? JSON.stringify(questions)
//                     : "[]",
//                 },
//               }}
//             >
//               <p>نعم</p>
//             </Link>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default Dialog;
import React from "react";
import { motion } from "framer-motion";
import styles from "../DraggableBox/Menu3/index.module.scss";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Dialog = ({ setIsDialog, questions, landmarkId }) => {
  const isValid =
    Array.isArray(questions) &&
    questions.length > 0 &&
    questions.every(
      (q) =>
        q &&
        typeof q.title === "string" &&
        Array.isArray(q.answers) &&
        q.answers.length > 0 &&
        q.answers.every((a) => a && typeof a.answer === "string")
    );

  return (
    <>
      <motion.div
        className={styles.container}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        id="dialog"
        dir="rtl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className={styles.box_container}
        >
          <div className={styles.close_icon} onClick={() => setIsDialog(false)}>
            <IoClose />
          </div>
          <div className={styles.title}>
            <p>استكشف معلوماتك حول هذا المعلم؟</p>
          </div>
          <div className={styles.btns_container}>
            <Link href="/" scroll={false}>
              <p>لا</p>
            </Link>
            {isValid ? (
              <Link
                href={{
                  pathname: "/challenge",
                  query: {
                    questions: JSON.stringify(questions),
                  },
                }}
              >
                <p>نعم</p>
              </Link>
            ) : (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  alert("لا توجد أسئلة متاحة لهذا المعلم.");
                }}
                href="#"
              >
                <p>نعم</p>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Dialog;
