import React from "react";
import * as styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <img src="/logo/logo.png" alt="logo" className={styles.Logo} />
            <div className={styles.Sns}>
                <a href="https://www.instagram.com/story_web_solutions/" target="_blank" rel="noreferrer">
                    <img src="/footer/instagram.svg" alt="instagram" className={styles.SnsIcon} />
                </a>
            </div>
            <p className={styles.Text}>
                SToRy web Solutions は、ウェブ開発を中心に、
                お客様のビジネスをサポートする会社です。
            </p>
            

        </footer>
    )
}

export default Footer;
