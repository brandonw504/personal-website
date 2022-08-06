import { FaTimes } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineArrowUp, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/nav.module.css'

const prefix = '/portfolio';

function Nav() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
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
            return <HiMenu className={styles.hamburger} onClick={handleClick} size={40}/>
        } else {
            return <FaTimes className={styles.hamburger} onClick={handleClick} size={40}/>
        }
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <MenuButton />
                <div className={styles.container} visible={click}>
                    <ul className={styles.list} data-aos="fade-bottom" visible={click}>
                        <li><a className={styles.listItem} href='#title' onClick={closeMobileMenu}>HOME</a></li>
                        <li><a className={styles.listItem} href='#experience' onClick={closeMobileMenu}>EXPERIENCE</a></li>
                        <li><a className={styles.listItem} href='#projects' onClick={closeMobileMenu}>PROJECTS</a></li>
                        <li><a className={styles.listItem} href='#skills' onClick={closeMobileMenu}>SKILLS</a></li>
                        <li><a className={styles.listItem} href='#education' onClick={closeMobileMenu}>EDUCATION</a></li>
                        <li><a className={styles.listItem} href={prefix + '/resume.pdf'} target="blank" onClick={closeMobileMenu}>RESUME</a></li>
                    </ul>
                    <ul className={styles.socials} data-aos="fade-bottom" visible={click}>
                        <li><a className={styles.socialItem} href='https://github.com/brandonw504' target="blank" onClick={closeMobileMenu}><AiFillGithub className={styles.icon} size={40} /></a></li>
                        <li><a className={styles.socialItem} href='https://www.linkedin.com/in/brandonw504' target="blank" onClick={closeMobileMenu}><AiFillLinkedin className={styles.icon} size={40} /></a></li>
                    </ul>
                </div>
                <a href='#title'><AiOutlineArrowUp className={styles.top} size={40} /></a>
            </nav>
        </div>
    )
}

export default Nav