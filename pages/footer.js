import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/footer.module.css'

export default function Footer() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <p data-aos="fade-up">Heading out? Contact me!</p>
            <ul>
                <li data-aos="fade-up">Email: <a href='mailto::brandonw504@outlook.com'>brandonw504@outlook.com</a></li>
                <li data-aos="fade-up">Github: <a href='https://github.com/brandonw504' target='blank'>brandonw504</a></li>
                <li data-aos="fade-up">LinkedIn: <a href='https://www.linkedin.com/in/brandonw504' target='blank'>brandonw504</a></li>
                <li data-aos="fade-up">Resume: <a href='/resume.pdf' target='blank'>Resume</a></li>
            </ul>
        </div>
    )
}