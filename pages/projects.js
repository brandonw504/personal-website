import { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/projects.module.css'

export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title} data-aos="fade-up">projects</div>
            <div className={styles.body}>
                <div data-aos="zoom-in-up">
                    <div className={styles.tile}>
                        <div>
                            <div className={styles.header}>
                                <p>Shopping Total</p>
                                <a href='https://github.com/brandonw504/label-scanner' target='blank'><AiFillGithub size={40}/></a>
                            </div>
                            
                            <div className={styles.description}>A mobile shopping list app in which users can scan price tags with text recognition and track their purchases. 
                            Item prices are stored in a MongoDB Atlas instance and made available through a REST API created with Node.</div>
                            <div className={styles.tools}>SwiftUI, Node, Express, Realm, and MongoDB</div>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-up" data-aos-delay='200'>
                    <div className={styles.tile}>
                        <div>
                            <div className={styles.header}>
                                <p>Carpool App</p>
                                <a href='https://github.com/brandonw504/carpool-app' target='blank'><AiFillGithub size={40}/></a>
                            </div>

                            <div className={styles.description}>A mobile app in which users can find others traveling in a similar direction and carpool together. 
                            Matching users is done on a backend server made accessible through a REST API created using Node and Express. 
                            Users are alerted through Pusher's publish and subscribe framework, and user data is stored on a MongoDB NoSQL database.</div>
                            <div className={styles.tools}>SwiftUI, Node, Express, Pusher, Realm, and MongoDB</div>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-up" data-aos-delay='400'>
                    <div className={styles.tile}>
                        <div>
                            <div className={styles.header}>
                                <p>Field Event Tracker</p>
                                <a href='https://github.com/brandonw504/field-event-tracker' target='blank'><AiFillGithub size={40}/></a>
                            </div>

                            <div className={styles.description}>A mobile app used to collect marks for field events in track and field. 
                            Greatly improved efficiency in recording and ranking athletes' marks at track meets by switching from paper to a digital medium.</div>
                            <div className={styles.tools}>SwiftUI</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}