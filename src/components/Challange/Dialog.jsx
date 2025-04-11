import React from 'react';
import { motion } from 'framer-motion';
import styles from '../DraggableBox/Menu3/index.module.scss';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Dialog = ({ setIsDialog }) => {
  return (
    <>
      <motion.div
        className={styles.container}
        transition={{
          type: 'spring',
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
          transition={{ duration: 0.5, type: 'tween' }}
          className={styles.box_container}
        >
          <div className={styles.close_icon} onClick={() => setIsDialog(false)}>
            <IoClose />
          </div>
          <div className={styles.title}>
            <p>استكشف معلوماتك حول هذا المعلم؟</p>
          </div>
          <div className={styles.btns_container}>
            <Link href={`/`} ><p>لا</p></Link>
            <Link href='/challenge'><p>نعم</p></Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Dialog;