import styles from '../styles/experience.module.css'

function Experience() {
    return (
        <div className={styles.container}>
            <h2>Experience</h2>
            <h3>Software Engineer at #include</h3>
            <p className={styles.subheading}>September 2021 - Present</p>
            <ul>
                <li>Created a dynamic art gallery website with expandable information about each piece</li>
                <li>Built and styled several web pages using Next.js and Figma designs</li>
                <li>Managed changes to the codebase using Github</li>
                <li>Learned React and SEO best practices</li>
            </ul>
        </div>
    )
}

export default Experience