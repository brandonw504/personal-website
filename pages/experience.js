import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/experience.module.css'

export default function Experience() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <h2 data-aos="fade-up">experience</h2>
            <div className={styles.body}>
                <h3 data-aos="fade-up">Software Engineer @ <span className={styles.highlight}>#include</span></h3>
                <div className={styles.subtitle} data-aos="fade-up">SEPT 2021 - JUN 2022</div>
                <ul>
                    <li data-aos="fade-up">Built and styled a dynamic art gallery website using Next.js and Figma designs.</li>
                    <li data-aos="fade-up">Managed changes to the codebase using Github.</li>
                </ul>
            </div>
        </div>
    )
}