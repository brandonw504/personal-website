import React, { useEffect } from 'react'
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

const About = React.forwardRef(({ onClick, href }, ref) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div ref={ref} className={styles.wrapper}>
            <h2 data-aos="fade-up">about me</h2>
            <div className={styles.container}>
                <div className={styles.body}>
                    <p data-aos="fade-up">I&apos;m currently a <span>junior</span> at <span>UC Davis</span>, majoring in <span>Computer Science</span> and minoring in <span>Technology Management</span>. 
                    I&apos;ve volunteered as a software engineer at <span>AggieWorks</span> and <span>#include</span>, doing web and mobile app development for clients such as UC Davis Student Housing and various clubs on campus.</p>
                   
                    <h3 data-aos="fade-up">Technologies I use:</h3>
                    <div data-aos="zoom-in-up">
                        <div className={styles.skills}>
                            {techStackData.map((stack) => (
                                <div key={stack.name}>
                                    <h4>{stack.name}</h4>
                                    <TechStackList data={stack.contents}></TechStackList>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p data-aos="fade-up">In my free time, I enjoy weightlifting, performing magic, playing chess, and exploring the great outdoors.</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src="profile.png" alt="Profile picture" className={styles.profile}></img>
                </div>
            </div>
            
        </div>
    )
})

About.displayName = 'About'

export default About