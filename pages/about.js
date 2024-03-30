import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

import profilePicture from '../public/profile.png'
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

const About = React.forwardRef((_, ref) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div ref={ref} className={styles.wrapper}>
            <h2 data-aos="fade-up">about me</h2>
            <div className={styles.container}>
                <div className={styles.body}>
                    <p data-aos="fade-up">
                        My first encounter with code was in third grade playing around with <a href="https://bonsaijs.org" target="blank"><span>BonsaiJS</span></a>, a graphics library that allowed me to animate shapes.
                        I had a lot of fun making bubbles follow my cursor, and I&apos;ve enjoyed coding ever since!
                    </p>
                    <p data-aos="fade-up">
                        Now, I&apos;m a third year at UC Davis, double majoring in <span>Computer Science</span> and <span>Statistics</span> on the Machine Learning track, and minoring in <span>Technology Management</span>.
                        This past summer, I worked as a software engineering intern at <span>Apple</span> on the Shazam team, developing in Swift and doing digital signal processing.
                        I&apos;ve had the opportunity to work on several engaging and fulfilling projects while volunteering as a software engineer at <span>HackDavis</span>, <span>#include</span>, and <span>AggieWorks</span>, as well as at <span>Alpha Phi Omega</span>, my service fraternity!
                    </p>
                   
                    <h3 data-aos="fade-up">Technologies I use</h3>
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

                    <p data-aos="fade-up">In my free time, I love weightlifting, cooking/baking, crocheting, and exploring the great outdoors!</p>
                </div>

                <div data-aos="zoom-in-up">
                    <Image src={profilePicture} alt="Profile picture" className={styles.profile}></Image>
                </div>
            </div>
        </div>
    )
})

About.displayName = 'About'

export default About