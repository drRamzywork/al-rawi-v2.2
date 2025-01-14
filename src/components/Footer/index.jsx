import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <div className="container">
        <hr />

        <p>جميع الحقوق محفوظة ٢٠٢٥ ©
        </p>

        <div className={styles.shape_container}>
          <Image
            src="/assets/svgs/shape.svg"
            alt="Vercel logomark"
            width={100}
            height={100}
          />
        </div>
      </div>




    </footer>
  )
}

export default Footer