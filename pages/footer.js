import { useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlinePhone } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { FiMail } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/footer.module.css'

const socials = [
    { element: <FiMail size={40} />, description: "brandonw504@outlook.com", link: "mailto::brandonw504@outlook.com" },
    { element: <AiOutlinePhone size={40} />, description: "(408) 229-3774", link: "tel:+14082293774" },
    { element: <AiFillGithub size={40} />, description: "brandonw504", link: "https://github.com/brandonw504" },
    { element: <AiFillLinkedin size={40} />, description: "brandonw504", link: "https://www.linkedin.com/in/brandonw504" },
    { element: <CgFileDocument size={40} />, description: "Resume", link: "/resume.pdf" }
]

export default function Footer() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <p data-aos="fade-up">Contact me!</p>
            <ul>
                {socials.map((social, i) => (
                    <li key={i} data-aos="fade-up">
                        {social.element}
                        <a href={social.link} target="blank">{social.description}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}