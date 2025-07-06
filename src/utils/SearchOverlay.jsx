import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Highlighter from "react-highlight-words";
import Image from "next/image";
import styles from "./SearchOverlay.module.scss";

export const SearchOverlay = ({
  visible,
  value,
  onClose,
  results,
  setVisible,
  onSearch,
  onSelect,
}) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.panel}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          exit={{ y: -200 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setVisible(false)} className={styles.closeBtn}>
            <IoClose />
          </button>
          <div className={styles.inputWrapper}>
            <input
              autoFocus
              placeholder="ابحث..."
              value={value}
              onChange={(e) => onSearch(e.target.value)}
            />
            {value && (
              <button onClick={() => onSearch("")} className={styles.clearBtn}>
                ×
              </button>
            )}
          </div>
          <motion.div layout className={styles.resultsWrapper}>
            {results.map((group) => (
              <div key={group.title} className={styles.group}>
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    className={styles.result}
                    onClick={() => onSelect(item)}
                    layout
                  >
                    <Image
                      src={item?.main_media}
                      alt={item?.title}
                      width={48}
                      height={48}
                    />
                    <Highlighter
                      highlightClassName={styles.highlight}
                      searchWords={[value]}
                      textToHighlight={item.title}
                      autoEscape
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
