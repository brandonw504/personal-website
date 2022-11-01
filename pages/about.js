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
                    <p data-aos="fade-up">I&apos;m currently a <span>2nd year</span> &#40;<span>junior</span> standing with an expected graduation of <span>June 2024</span>&#41; at <span>UC Davis</span>, 
                    majoring in <span>Computer Science</span> and minoring in <span>Technology Management</span>. 
                    I&apos;ve volunteered as a software engineer at <span>#include</span>, creating websites for clubs and businesses around Davis.</p>
                   
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