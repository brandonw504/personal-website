import { useEffect } from 'react';
import * as smoothscroll from 'smoothscroll-polyfill';
import Head from 'next/head'
import Nav from './nav'
import Experience from './experience'
import Projects from './projects'
import Skills from './skills'
import Education from './education'

import styles from '../styles/Home.module.css'

export default function Home() {
    useEffect(() => {
        smoothscroll.polyfill();
    }, [])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Brandon Wong</title>
                <link href="https://fonts.googleapis.com/css2?family=Catamaran" rel='stylesheet'></link>
            </Head>

            <div className={styles.container}>
                <Nav />
                <header id='title' className={styles.header}>
                    <img src="/profile.png" className={styles.background}/>
                    <h1 data-aos="fade-right" data-aos-once="true" className={styles.title}>Hi! I&apos;m Brandon!</h1>
                </header>

                <section className={styles.body}>
                    <section id='experience'>
                        <Experience />
                    </section>
                    
                    <section id='projects'>
                        <Projects />
                    </section>
                    
                    <section id='skills'>
                        <Skills />
                    </section>

                    <section id='education'>
                        <Education />
                    </section>
                </section>
            </div>
            <div className={styles.footer}></div>
        </div>
    )
}
