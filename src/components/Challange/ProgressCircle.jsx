import { motion } from "framer-motion";
import styles from "@/styles/quiz.module.scss";
const ProgressCircle = ({ current, total, dataTranslations }) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.progressContainer}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="8"
          fill="none"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="orange"
          strokeWidth="8"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (progress / 100) * 251.2}
          animate={{ strokeDashoffset: 251.2 - (progress / 100) * 251.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>
      <motion.div className={styles.progressText}>
        <p>
          {current}/{total}
        </p>
        <p>{dataTranslations?.questions_count}</p>
      </motion.div>
    </div>
  );
};

export default ProgressCircle;
