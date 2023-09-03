import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

import projectData from '../data/projectData'
import styles from '../styles/projects.module.css'

const Projects = React.forwardRef(({ onClick, href }, ref) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div ref={ref} className={styles.wrapper}>
            <h2 data-aos="fade-up">projects</h2>
            <ul className={styles.grid}>
                {projectData.map((project, i) => (
                    <li key={project.title} data-aos="zoom-in-up">
                        <div className={styles.tile}>
                            <div className={styles.header}>
                                <h4>{project.title}</h4>
                                <a href={project.githubLink} target='blank'><AiFillGithub size={40}/></a>
                            </div>
                            
                            <p>{project.description}</p>
                            <div className={styles.tools}>{project.techStack}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Projects

Projects.displayName = 'Projects'