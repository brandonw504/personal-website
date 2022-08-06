import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/experience.module.css'

function Experience() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right" data-aos-once="true">Experience</h2>
            <h3 data-aos="fade-right" data-aos-once="true">Software Engineer at #include</h3>
            <p data-aos="fade-right" data-aos-once="true" className={styles.subheading}>September 2021 - Present</p>
            <ul>
                <li data-aos="fade-right" data-aos-once="true">Created a dynamic art gallery website with expandable information about each piece</li>
                <li data-aos="fade-right" data-aos-once="true">Built and styled several web pages using Next.js and Figma designs</li>
                <li data-aos="fade-right" data-aos-once="true">Managed changes to the codebase using Github</li>
                <li data-aos="fade-right" data-aos-once="true">Learned React and SEO best practices</li>
            </ul>
        </div>
    )
}

export default Experience