import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/about.module.css'

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title} data-aos="fade-up">about me</div>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.subtitle} data-aos="fade-up">I'm currently a second year at <span className={styles.pink}>UC Davis</span>. 
                    I'm majoring in <span className={styles.pink}>Computer Science</span> and minoring in <span className={styles.pink}>Technology Management</span>. 
                    I'm also part of <span className={styles.pink}>#include</span>, a group that creates websites for clubs and businesses around Davis.</div>
                   
                    <p className={styles.skillsHeader} data-aos="fade-up">Technologies I use:</p>
                    <div data-aos="zoom-in-up">
                        <div className={styles.skills}>
                            <div>
                                <p>Tools</p>
                                <ul>
                                    <li>Git</li>
                                    <li>MongoDB</li>
                                    <li>Node.js</li>
                                    <li>Cocoapods</li>
                                </ul>
                            </div>

                            <div>
                                <p>Languages</p>
                                <ul>
                                    <li>Swift</li>
                                    <li>Javascript</li>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>HTML &amp; CSS</li>
                                </ul>
                            </div>

                            <div>
                                <p>Frameworks/Libraries</p>
                                <ul>
                                    <li>SwiftUI</li>
                                    <li>Express.js</li>
                                    <li>React.js &amp; Next.js</li>
                                    <li>Realm</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.subtitle} data-aos="fade-up">In my free time, I enjoy weightlifting, gaming, performing magic, playing chess, and exploring the great outdoors.</div>
                </div>

                <div data-aos="zoom-in-up">
                    <img src="profile.png" alt="Profile picture" className={styles.profile}></img>
                </div>
            </div>
            
        </div>
    )
}