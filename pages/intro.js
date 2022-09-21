import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/intro.module.css'

const Intro = React.forwardRef(({ onClick, href }, ref) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div ref={ref} className={styles.wrapper}>
            <h1>
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter.typeString("Hey! I'm <span style='color: pink;'>Brandon</span>.")
                        .start();
                    }}
                />
            </h1>
            <div className={styles.subtitle} data-aos="fade-up">I&apos;m an iOS and full-stack developer from the Bay Area. 
            I love exploring new technologies and building apps that add utility to users&apos; lives.
            Solving problems at scale is the core of engineering and has always piqued my interest.</div>
        </div>
    )
})

export default Intro

// export default function Intro() {
    
// }