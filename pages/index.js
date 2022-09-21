import React, { useRef } from 'react'
import Intro from './intro'
import Nav from './nav'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Footer from './footer'

import styles from '../styles/Home.module.css'

export default function Home() {
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
  
    const refs = [
        {
            ref: introRef, 
            name: 'home'
        }, 
        {
            ref: aboutRef, 
            name: 'about'
        }, 
        {
            ref: experienceRef, 
            name: 'experience'
        }, 
        {
            ref: projectsRef, 
            name: 'projects'
        }
    ]

    return (
        <div className={styles.container}>
            <Nav refs={refs} />
            <div className={styles.main}>
                <div className={styles.intro}>
                    <Intro ref={introRef} />
                </div>

                <div className={styles.body}>
                    <About ref={aboutRef} />
                    <Experience ref={experienceRef} />
                    <Projects ref={projectsRef} />
                </div>
                <Footer />
            </div>
        </div>
    )
}
