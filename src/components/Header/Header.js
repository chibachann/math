import React from "react";
import * as styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <img src="/header/logo.png" alt="logo"/>
            </div>
        </header>
    )
}

export default Header;
