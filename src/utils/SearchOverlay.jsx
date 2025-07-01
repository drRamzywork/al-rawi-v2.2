// import { motion, AnimatePresence } from "framer-motion";
// import Highlighter from "react-highlight-words";
// import styles from "./index.module.scss";
// import Image from "next/image";

// export const SearchOverlay = ({
//   visible,
//   value,
//   onClose,
//   results,
//   onSearch,
//   onSelect,
// }) => (
//   <AnimatePresence>
//     {visible && (
//       <motion.div
//         className={styles.searchOverlay}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: -300 }}
//           animate={{ y: 0 }}
//           exit={{ y: -300 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className={styles.searchBox}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <input
//             autoFocus
//             type="text"
//             placeholder="ابحث..."
//             value={value}
//             onChange={(e) => onSearch(e.target.value)}
//             className={styles.searchInput}
//           />
//           <motion.div
//             layout
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             className={styles.resultsContainer}
//           >
//             {results.map((group) => (
//               <div key={group.title}>
//                 <h4>{group.title}</h4>
//                 {group.items.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     className={styles.resultItem}
//                     onClick={() => onSelect(item)}
//                     layout
//                   >
//                     <Image
//                       src={item.media}
//                       width={60}
//                       height={60}
//                       alt={item.title}
//                     />
//                     <Highlighter
//                       highlightClassName={styles.highlight}
//                       searchWords={[value]}
//                       textToHighlight={item.title}
//                       autoEscape
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// SearchOverlay.js
import { motion, AnimatePresence } from "framer-motion";
import Highlighter from "react-highlight-words";
import Image from "next/image";
import styles from "./SearchOverlay.module.scss";

export const SearchOverlay = ({
  visible,
  value,
  onClose,
  results,
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
                <h4>{group.title}</h4>
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
