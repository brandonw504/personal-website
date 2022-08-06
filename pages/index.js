import Head from 'next/head'
import Nav from './nav'
import Title from './title'
import Experience from './experience'
import Projects from './projects'
import Skills from './skills'
import Education from './education'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Brandon Wong</title>
                <link href="https://fonts.googleapis.com/css2?family=Catamaran" rel='stylesheet'></link>
            </Head>

            <div className={styles.container}>
                <Nav />
                <section id='title'>
                    <Title />
                </section>

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
            </div>
            <div className={styles.footer}></div>
        </div>
    )
}
