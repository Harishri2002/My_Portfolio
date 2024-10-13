import React,{useState} from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
import {motion} from 'framer-motion';
import { Canvass } from '../WorkStation/Canvass';
import { style } from 'framer-motion/client';

export const About = () => {
    
     return <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="my siting image" /> */}
                <Canvass className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor image" />
                        <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>I am a Full stack Develeoper with the experoience to build fully functional websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Cursor image" />
                        <div className={styles.aboutItemText}>
                        <h3>Mobile App Develeopment</h3>
                        <p>I create Mobile applications which is powered by react native.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Cursor image" />
                        <div className={styles.aboutItemText}>
                        <h3>Game Development</h3>
                        <p>I am passionate about game development and eager to contribute my skills..</p>
                        </div>
                    </li>
                </ul>
            </div>
     </section>
}