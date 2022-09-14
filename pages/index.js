import React from 'react'
import Intro from './intro'
import Nav from './nav'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Footer from './footer'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.main}>
                <div className={styles.intro} id='intro'>
                    <Intro />
                </div>

                <div className={styles.body}>
                    <section id='about'>
                        <About />
                    </section>
                    
                    <section id='experience'>
                        <Experience />
                    </section>
                    
                    <section id='projects'>
                        <Projects />
                    </section>
                </div>

                <section id='footer'>
                    <Footer />
                </section>
            </div>
        </div>
    )
}
