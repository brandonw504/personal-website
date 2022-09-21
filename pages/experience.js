import React from 'react'
import { useEffect, useState } from 'react'
import { Tabs, Tab, Box, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import Aos from 'aos'
import 'aos/dist/aos.css'

import experienceData from '../data/experienceData'
import styles from '../styles/experience.module.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tabpanel-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    }
}

const Experience = React.forwardRef(({ onClick, href }, ref) => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
        setValue(0)
    }, [])

    return (
        <div ref={ref} className={styles.wrapper}>
            <h2 data-aos="fade-up">experience</h2>
            <div data-aos="fade-up" className={styles.body}>
                <Box sx={{ width: "fit-content", borderBottom: 1, borderColor: "gray" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                            sx:{
                                backgroundColor: "pink"
                            }
                        }}
                        sx={{
                            "& button": { color: "lightgray" },
                            "& button:hover": { color: "pink" },
                            "& button.Mui-selected": { color: "pink" }
                        }}
                    >
                        {experienceData.map((experience, i) => (
                            <Tab key={experience.name} label={experience.name} {...a11yProps(i)} />
                        ))}
                    </Tabs>
                </Box>
                {experienceData.map((experience, i) => (
                    <TabPanel key={experience.name} value={value} index={i}>
                        <span className={styles.jobTitle} data-aos="fade-up">{experience.title + " "}</span>
                        <span className={styles.company} data-aos="fade-up">{experience.name}</span>
                        <span className={styles.subtitle} data-aos="fade-up">{experience.time}</span>
                        {experience.description.map((item, i) => (
                            <span className={styles.description} key={i} data-aos="fade-up" data-aos-delay={`${i + 1}00`}>{item}</span>
                        ))}
                    </TabPanel>
                ))}
            </div>
        </div>
    )
})

export default Experience

// export default function Experience() {
    
// }