import React from "react";
import * as styles from "./TopSmallBox.module.css";

const TopSmallBox = (
    {
        title,
        imgsrc,
        alt
    }
) => {
    return (
        <div className={styles.SmallBox}>
            <h3>{title}</h3>
            <img src={imgsrc} alt={alt}/>
        </div>
    )
}

export default TopSmallBox;
