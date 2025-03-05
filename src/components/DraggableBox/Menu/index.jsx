
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';
import { IoClose } from 'react-icons/io5';
import Questions from '../Questions';

const Menu = ({ isVideoPlaying, showNewMenu, id, setPause, setIsPlaying,
  setShowNewMenu }) => {
  const [readMore, setReadMore] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [currentState, setCurrentState] = useState('');
  const [isClient, setIsClient] = useState(false);

  const controls = useAnimation();
  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);
  useEffect(() => {
    controls.start(readMore ? 'visible' : 'hidden');
  }, [readMore, controls]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy the URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard! You can share it manually.');
      }).catch(err => {
        console.error('Could not copy link:', err);
      });
    }
  };





  const links = [
    {
      title: 'الصور',
      img: '/assets/svgs/navbar/gallery.svg',
      onClick: () => {
        setCurrentState('Gallery');
        setShowNewMenu((prev) => !prev);
        setQuestions(false);
        setReadMore(false);
      },
    },
    {
      title: 'تعرف أكثر',
      img: '/assets/svgs/navbar/square.svg',
      onClick: () => {
        setCurrentState('LearnMore');
        setReadMore((prev) => !prev);
        setShowNewMenu(false);
        setQuestions(false);

      },
    },
    {
      title: '',
      img: '/assets/svgs/navbar/mark.svg',
      onClick: () => {
        setQuestions((prev) => !prev);
        setShowNewMenu(false);
        setReadMore(false);

      },
    },
    {
      title: 'الموقع',
      img: '/assets/svgs/navbar/location.svg',
      onClick: () => {
        setCurrentState('Location');
        window.open('https://maps.app.goo.gl/v3QPUKopn2EwjFqi7', '_blank');

      },
    },
    {
      title: 'المشاركة',
      img: '/assets/svgs/navbar/share.svg',
      onClick: handleShare,
    },
  ];


  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: '10%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '600px',
          height: '60%',
          maxHeight: '700px',
          overflowY: 'auto',
          overflowX: 'unset',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)',
          borderRadius: '13px',
          zIndex: 55,
          background: '#00000080',
          padding: '14px'
        }}

        initial="hidden"
        animate={controls}
        className={styles.container}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: '0%', opacity: 1 },
          hidden: { y: '-300%', opacity: 0 },
        }}

        id="menu"
        dir="rtl"
      >
        {readMore &&
          <div className={styles.content}>
            <div className={styles.close_icon} onClick={() => setReadMore(false)}>
              <IoClose />
            </div>

            <div className={styles.sec_title}>
              <h1>بيت البيعة</h1>
            </div>
            <div className={styles.imgs_container}>
              <div className={styles.main_img}>
                <img src="/assets/imgs/menu2/2.webp" alt="" />
              </div>

            </div>

            <div className={styles.title}>
              <h3>في قلب مدينة الهفوف بمنطقة الأحساء، وتحديدًا في حي الكوت، يقع بيت البيعة (بيت الملَّا)، الذي يعد من أهم المعالم التي شهدت أحداثًا تتعلق بتاريخ المملكة العربية السعودية.</h3>
            </div>

            <div className={styles.desc}>
              <p>      ففي يوم الأحد، ليلة الاثنين 28 / 5 / 1331هـ، استقبل هذا البيت الملكَ المؤسس عبدالعزيز بن عبدالرحمن آل سعود رحمه الله، بعد وصوله إلى الأحساء، وجرت فيه مبايعة أهالي الأحساء له.</p>
            </div>


            <div className={styles.title}>
              <h3>
                ويعود تاريخ بناء "بيت البيعة" إلى عام 1203هـ، وقد قام ببنائه الشيخ عبدالرحمن بن عمر بن محمد بن عمر المُلَّا، الذي كان يشغل منصِب قاضي الأحساء في تلك الفترة.</h3>
            </div>

            <div className={styles.desc}>
              <p>

                ويمتد هذا البيت على مساحةٍ تزيد على 705م2، وهو يحتوي على العديد من الغرف، ويضم مقتنياتٍ أثرية ومخطوطاتٍ قديمة، مما يجعله شاهدًا على الحقبة التاريخية التي بُني فيها.
                وبجهود من هيئة التراث، تم ترميم بيت البيعة، وتحويله إلى موقعٍ تاريخي، وأصبح اليوم معلَمًا أثريًّا وسياحيًّا بارزًا من معالم الأحساء، يجذب الزوار الراغبين في التعرف على تلك المرحلة من تاريخ المنطقة.</p>
            </div>


            {/* 


            <div className={styles.title}>
              <h3> أين تقع قصور عروة بن الزبير؟</h3>
            </div>

            <div className={styles.desc}>
              <p>تقع قصور عُروة بن الزبير على بعد حوالي 3.5 كلم من المسجد النبوي الشريف، على امتداد الطريق المؤدية إلى مسجد ذي الحُلَيفة وهو ميقات أهل المدينة، وهذه القصور جزءٌ من التاريخ الحافل للمدينة المنورة، وقد ذُكرت في العديد من المصادر التاريخية.</p>
            </div> */}


            {/* <div className={styles.title}>
              <h3>
                ما هي أهم المعالم الأثرية في قصور عروة بن الزبير؟
              </h3>
            </div> */}

          </div>

        }

      </motion.div >

      {readMore && (
        <div className={styles.layer} onClick={() => setReadMore(false)} />
      )
      }




      {/* Navigation links */}
      {
        !isVideoPlaying && !showNewMenu &&

        <div className={styles.nav_container} >
          <div className="container">
            <div className={styles.sec_container}>
              <ul>
                {links.map((link, idx) => (
                  <li key={idx} onClick={link.onClick}>
                    <div className={styles.icon_container}>
                      <img src={link.img} alt={link.title} />
                    </div>
                    <div className={styles.title}>
                      <p>{link.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div >
      }

      <Questions questions={questions} id={id}
        setQuestions={setQuestions} setShowNewMenu={setShowNewMenu} setPause={setPause} setIsPlaying={setIsPlaying} />

    </>
  );
};

export default Menu;
