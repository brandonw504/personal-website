import { useEffect, useState, useCallback } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { FiMail } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/nav.module.css'

const socials = [
    { name: "Github", element: <AiFillGithub size={30} />, link: "https://github.com/brandonw504" },
    { name: "LinkedIn", element: <AiFillLinkedin size={30} />, link: "https://www.linkedin.com/in/brandonw504" },
    { name: "Email", element: <FiMail size={30} />, link: "mailto:brandonw504@outlook.com" },
    { name: "Resume", element: <CgFileDocument size={30} />, link: "/resume.pdf" }
]

export default function Nav({ refs }) {
    const [activeLink, setActiveLink] = useState('intro');
    const handleScroll = useCallback((ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }, [])

    const handleScreenChange = useCallback(() => {
        for (let i = refs.length - 1; i >= 0; i--) {
            if (refs[i].ref.current) {
                if (window.pageYOffset + window.innerHeight * 0.3 >= refs[i].ref.current.offsetTop) {
                    setActiveLink(refs[i].name);
                    break
                }
            }
        }
    }, [refs])

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
        window.addEventListener('scroll', handleScreenChange)
        window.addEventListener('resize', handleScreenChange)

        return () => {
            window.removeEventListener('scroll', handleScreenChange)
            window.removeEventListener('resize', handleScreenChange)
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {refs?.map((item, i) => (
                        <li key={i} className={activeLink === item.name ? styles.activeLink : styles.inactiveLink} data-aos="fade-up" data-aos-delay={`${i + 1}00`} onClick={() => { handleScroll(item.ref) }}>
                            <p className={activeLink === item.name ? styles.activeText : styles.inactiveText}>{item.name}</p>
                        </li>
                    ))}
                </ul>
                {/* {routes.map((route, i) => (
                    <li key={route.name} data-aos="fade-up" data-aos-delay={`${i + 1}00`}><a href={route.href}>{route.name}</a></li>
                ))} */}
            </div>
            
            <ul className={styles.socials}>
                {socials.map((social, i) => (
                    <li key={social.link} data-aos="fade-up" data-aos-delay={`${(i * 100) + 400}`}>
                        <div className={styles.tooltip}>
                            <a href={social.link} target="blank">{social.element}</a>
                            <span className={styles.tooltipText}>{social.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}