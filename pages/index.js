import React, { useRef, useEffect } from 'react'
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
    const footerRef = useRef(null);
  
    const refs = [
        {
            ref: introRef, 
            name: 'intro'
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
        },
        {
            ref: footerRef, 
            name: 'contact'
        }
    ]

    // useEffect(() => {
    //     if (experienceRef.current) {
    //         const scrollHandler = (e) => {
    //             console.log(experienceRef.current.offsetTop)
    //         };
        
    //         window.addEventListener("scroll", scrollHandler)
        
    //         return () => {
    //             window.removeEventListener("scroll", scrollHandler)
    //         }
    //     }
    // }, [experienceRef.current])

    return (
        <div className={styles.container}>
            <Nav refs={refs} />
            <div className={styles.main}>
                <div className={styles.intro} id='intro'>
                    <Intro ref={introRef} />
                </div>

                <div className={styles.body}>
                    <section id='about'>
                        <About ref={aboutRef} />
                    </section>
                    
                    <section id='experience'>
                        <Experience ref={experienceRef} />
                    </section>
                    
                    <section id='projects'>
                        <Projects ref={projectsRef} />
                    </section>
                </div>

                <section id='footer'>
                    <Footer ref={footerRef} />
                </section>
            </div>
        </div>
    )
}
