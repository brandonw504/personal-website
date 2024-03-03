import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/intro.module.css'

const Intro = React.forwardRef((_, ref) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div ref={ref} className={styles.wrapper}>
            <div className={styles.container}>
                <h1>
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter.typeString("Hey! I'm <span style='color: pink;'>Brandon</span>.")
                            .start();
                        }}
                    />
                </h1>
                <div className={styles.subtitle} data-aos="fade-up">I&apos;m an iOS and full-stack developer from the Bay Area. 
                I love exploring new technologies and solving problems at scale. Recently, I&apos;ve been learning about machine learning and digital signal processing.</div>
            </div>
        </div>
    )
})

export default Intro

Intro.displayName = 'Intro'