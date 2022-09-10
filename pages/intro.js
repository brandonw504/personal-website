import { useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/intro.module.css'

export default function Intro() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter.typeString("Hey! I'm <span style='color: pink;'>Brandon</span>.")
                        .start();
                    }}
                />
            </div>
            <div className={styles.subtitle} data-aos="fade-up">I'm an iOS and full-stack developer from the Bay Area. 
            I love building apps that add utility to users' lives and exploring new technologies.</div>
        </div>
    )
}