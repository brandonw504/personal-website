import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import techStackData from '../data/techStackData'
import styles from '../styles/about.module.css'

const TechStackList = ({data}) => {
    return(
        <ul>
            {data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <h2 data-aos="fade-up">about me</h2>
            <div className={styles.container}>
                <div className={styles.body}>
                    <p data-aos="fade-up">I'm currently a second year at <span className={styles.highlight}>UC Davis</span>. 
                    I'm majoring in <span className={styles.highlight}>Computer Science</span> and minoring in <span className={styles.highlight}>Technology Management</span>. 
                    I'm also part of <span className={styles.highlight}>#include</span>, a group that creates websites for clubs and businesses around Davis.</p>
                   
                    <h3 data-aos="fade-up">Technologies I use:</h3>
                    <div data-aos="zoom-in-up">
                        <div className={styles.skills}>
                            <div>
                                <h4>Tools</h4>
                                <TechStackList data={techStackData.tools}></TechStackList>
                            </div>

                            <div>
                                <h4>Languages</h4>
                                <TechStackList data={techStackData.languages}></TechStackList>
                            </div>

                            <div>
                                <h4>Frameworks/Libraries</h4>
                                <TechStackList data={techStackData.frameworks}></TechStackList>
                            </div>
                        </div>
                    </div>

                    <p data-aos="fade-up">In my free time, I enjoy weightlifting, gaming, performing magic, playing chess, and exploring the great outdoors.</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src="profile.png" alt="Profile picture" className={styles.profile}></img>
                </div>
            </div>
            
        </div>
    )
}