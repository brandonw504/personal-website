import { useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/nav.module.css'

export default function Nav() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li data-aos="fade-up"><a href='#intro'>home</a></li>
                    <li data-aos="fade-up" data-aos-delay='100'><a href='#about'>about</a></li>
                    <li data-aos="fade-up" data-aos-delay='200'><a href='#experience'>experience</a></li>
                    <li data-aos="fade-up" data-aos-delay='300'><a href='#projects'>projects</a></li>
                    <li data-aos="fade-up" data-aos-delay='400'><a href='/resume.pdf' target='blank'>resume</a></li>
                </ul>
            </div>
            
            <ul className={styles.socials}>
                <li data-aos="fade-up" data-aos-delay='500'><a href='https://github.com/brandonw504' target="blank"><AiFillGithub size={40} /></a></li>
                <li data-aos="fade-up" data-aos-delay='600'><a href='https://www.linkedin.com/in/brandonw504' target="blank"><AiFillLinkedin size={40} /></a></li>
                <li data-aos="fade-up" data-aos-delay='700'><a href='mailto::brandonw504@outlook.com'><FiMail size={40} /></a></li>
            </ul>
        </div>
    )
}