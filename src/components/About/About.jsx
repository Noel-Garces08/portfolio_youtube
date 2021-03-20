import React from 'react';
import styles from './About.module.css';

const commands = {
    location: "undefined",
    education: "undefined",
    major: "Computer Science",
    expectedGraduation: "May 2021",
    resume: <a href="/">developerstudio.pdf</a>,
    email: <a href="/" >example@gmail.com</a>
};

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h1 className={styles.title}>Hi, I am a Frontend / Backend Developer</h1>
            <div className={styles.console}>
                <ul className={styles.console_inner}>
                    {Object.keys(commands).map(command => (
                        <li className={styles.command} key={command}>
                            {">"} DeveloperStudio.{command}
                            <br />
                            &nbsp;&nbsp;{"=>"} "{commands[command]}"
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;

/*
                    <li className={styles.command}>
                        {">"} DeveloperStudio.education
                        <br />
                        &nbsp;&nbsp;{"=>"} undefined
                    </li>
                    <br />


                    <li className={styles.command}>
                        {">"} DeveloperStudio.major
                        <br />
                        &nbsp;&nbsp;{"=>"} "Computer Science"
                    </li>
                    <br />

                    <li className={styles.command}>
                        {">"} DeveloperStudio.expectedGraduation
                        <br />
                        &nbsp;&nbsp;{"=>"} "May 2021"
                    </li>
                    <br />

                    <li className={styles.command}>
                        {">"} DeveloperStudio.resume
                        <br />
                        &nbsp;&nbsp;{"=>"} "<a href="#">developerstudio.pdf</a>"
                    </li>
                    <br />

                    <li className={styles.command}>
                        {">"} DeveloperStudio.email
                        <br />
                        &nbsp;&nbsp;{"=>"} "<a href="#" >example@gmail.com</a>"
                    </li>
*/