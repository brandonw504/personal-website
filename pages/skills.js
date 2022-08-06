import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/skills.module.css'

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right" data-aos-once="true">Skills</h2>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Git, iOS development, Web development</p>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Languages: C++, C, Swift, Java, HTML, CSS, Javascript, Python</p>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Libraries/Frameworks: SwiftUI, React, Next.js, Tensorflow</p>
        </div>
    )
}

export default Skills