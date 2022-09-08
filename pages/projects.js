import styles from '../styles/projects.module.css'

function Projects() {
    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <h3>Field Event Tracker</h3>
            <p className={styles.subheading}>Swift and SwiftUI</p>
            <ul>
                <li>Developed an iOS app to collect marks for field events in track and field</li>
                <li>Created an intuitive user interface with SwiftUI</li>
                <li>Greatly improved efficiency in recording and ranking athletes&apos; marks at meets by switching from paper to a digital medium</li>
            </ul>
            <p><a href='https://github.com/brandonw504/field-event-tracker' target="blank" className={styles.link}>Repository Link</a></p>

            <h3>Game of Thrones Character Database</h3>
            <p className={styles.subheading}>Next.js</p>
            <ul>
                <li>Created an interactive Game of Thrones character database in a Next.js website</li>
                <li>Implemented a responsive search bar using React Hooks </li>
            </ul>
            <p><a href='https://github.com/brandonw504/search-got' target="blank" className={styles.link}>Repository Link</a></p>
        </div>
    )
}

export default Projects