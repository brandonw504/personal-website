import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/education.module.css'

function Education() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right" data-aos-once="true">Education</h2>
            <h3 data-aos="fade-right" data-aos-once="true">Computer Science, B.S. (in progress)</h3>
            <h4 data-aos="fade-right" data-aos-once="true">University of California, Davis</h4>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Expected Graduation: June 2024</p>
            <p data-aos="fade-right" data-aos-once="true">&emsp;GPA: 3.85</p>

            <h3 data-aos="fade-right" data-aos-once="true">High School</h3>
            <h4 data-aos="fade-right" data-aos-once="true">Evergreen Valley High School</h4>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Valedictorian - Graduated June 2021</p>
            <p data-aos="fade-right" data-aos-once="true">&emsp;GPA: 4.41 weighted, 4.00 unweighted</p>

            <h3 data-aos="fade-right" data-aos-once="true">Relevant Coursework</h3>
            <ul>
                <li data-aos="fade-right" data-aos-once="true">Object-Oriented Programming in C++</li>
                <li data-aos="fade-right" data-aos-once="true">Programming in C</li>
                <li data-aos="fade-right" data-aos-once="true">Programming in Java</li>
                <li data-aos="fade-right" data-aos-once="true">Computer Organization and Machine-Dependent Programming</li>
                <li data-aos="fade-right" data-aos-once="true">Discrete Math</li>
                <li data-aos="fade-right" data-aos-once="true">Calculus 1, 2, and 3</li>
                <li data-aos="fade-right" data-aos-once="true">Statistics</li>
                <li data-aos="fade-right" data-aos-once="true">Linear Algebra</li>
            </ul>
        </div>
    )
}

export default Education