import React, { useEffect, useState } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Space } from '../Astro/Space';

export const Hero = () => {
  const [text] = useTypewriter({
    words: ['Harishri B R', 'a Developer', 'a Designer', 'Creative Thinker'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  // State to track window width
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <section className={styles.mainbody}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm {text}<Cursor cursorStyle="<" cursorColor='#FFFF00' /></h1>
        <p className={styles.paragraph}>
          Meet Harishri – a tech enthusiast with a flair for crafting awesome web experiences and addictive games.
          Always on the lookout for the next big thing in tech, he's constantly pushing boundaries and creating cool stuff. 
          Get ready to be wowed by his creativity and passion as he takes the world of technology by storm!
        </p>
        <div className={styles.cont}>
          <a className={styles.contact} href="#contact">Resume</a>
        </div>
      </div>

      {/* Conditionally render Space based on window width */}
      <Space className={styles.AstroModel} />
      
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  );
};
