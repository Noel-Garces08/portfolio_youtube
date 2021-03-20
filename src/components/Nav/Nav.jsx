import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>Developer Studio</div>
            <ul className={styles.links}>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="/">Work</a></li>
            </ul>
        </nav>
    );
};

export default Nav;