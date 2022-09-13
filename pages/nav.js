import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { FiMail } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/nav.module.css'

const routes = [
    { name: "home", href: "#intro" },
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#footer" }
]

const socials = [
    { element: <AiFillGithub size={30} />, link: "https://github.com/brandonw504" },
    { element: <AiFillLinkedin size={30} />, link: "https://www.linkedin.com/in/brandonw504" },
    { element: <FiMail size={30} />, link: "mailto::brandonw504@outlook.com" },
    { element: <CgFileDocument size={30} />, link: "/resume.pdf" }
]

export default function Nav() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const [click, setClick] = useState('false');

    const handleClick = () => {
        if (click === 'false') {
            setClick('true');
        } else {
            setClick('false');
        }
    }

    const closeMobileMenu = () => setClick('false');

    const MenuButton = () => {
        if (click === 'false') {
            return <HiMenu className={styles.menu} onClick={handleClick} size={30}/>
        } else {
            return <FaTimes className={styles.menu} onClick={handleClick} size={30}/>
        }
    }

    return (
        <nav className={styles.navbar}>
            <MenuButton />
            <div className={click === 'true' ? styles.activeWrapper : styles.inactiveWrapper}>
                <div className={styles.container}>
                    <ul className={styles.list}>
                        {routes.map((route, i) => (
                            <li key={route.name} data-aos="fade-up" data-aos-delay={`${i + 1}00`}><a href={route.href} onClick={closeMobileMenu}>{route.name}</a></li>
                        ))}
                    </ul>
                </div>
                
                <ul className={styles.socials}>
                    {socials.map((social, i) => (
                        <li key={social.link} data-aos="fade-up" data-aos-delay={`${(i * 100) + 400}`}><a href={social.link} target="blank" onClick={closeMobileMenu}>{social.element}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}