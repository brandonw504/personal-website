import styles from '../styles/education.module.css'

function Education() {
    return (
        <div className={styles.container}>
            <h2>Education</h2>
            <h3>Computer Science, B.S. (in progress)</h3>
            <h4>University of California, Davis</h4>
            <p>&emsp;Expected Graduation: June 2024</p>
            <p>&emsp;GPA: 3.85</p>

            <h3>High School</h3>
            <h4>Evergreen Valley High School</h4>
            <p>&emsp;Valedictorian - Graduated June 2021</p>
            <p>&emsp;GPA: 4.41 weighted, 4.00 unweighted</p>

            <h3>Relevant Coursework</h3>
            <ul>
                <li>Object-Oriented Programming in C++</li>
                <li>Programming in C</li>
                <li>Programming in Java</li>
                <li>Computer Organization and Machine-Dependent Programming</li>
                <li>Discrete Math</li>
                <li>Calculus 1, 2, and 3</li>
                <li>Statistics</li>
                <li>Linear Algebra</li>
            </ul>
        </div>
    )
}

export default Education