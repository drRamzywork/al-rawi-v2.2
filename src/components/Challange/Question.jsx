// import { motion } from "framer-motion";
// import styles from "@/styles/quiz.module.scss";

// const Question = ({ question, options, onSelect, selectedAnswer }) => {
//   return (
//     <motion.div
//       className={styles.questionContainer}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{question}</h2>
//       <div className={styles.options}>
//         {options.map((option, index) => (
//           <motion.div
//             key={index}
//             className={`${styles.option} ${
//               selectedAnswer === index ? styles.selected : ""
//             }`}
//             onClick={() => onSelect(index)}
//             whileTap={{ scale: 0.9 }}
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {option}
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Question;
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import styles from "@/styles/quiz.module.scss";

const Question = ({
  question,
  options,
  onSelect,
  selectedAnswer,
  audioSrc,
}) => {
  const handleSelect = (index) => {
    onSelect(index); // Update the selected answer
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  };

  return (
    <motion.div
      className={styles.questionContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{question}</h2>

      <div className={styles.options}>
        {options.map((option, index) => (
          <motion.div
            key={index}
            className={`${styles.option} ${
              selectedAnswer === index ? styles.selected : ""
            }`}
            onClick={() => handleSelect(index)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* <motion.div
              className={styles.checkbox}
              initial={{ scale: 0 }}
              animate={{ scale: selectedAnswer === index ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaCheck className={styles.checkIcon} />
            </motion.div> */}

            {option}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;
