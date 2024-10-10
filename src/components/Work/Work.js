import React from "react";
import * as styles from "./Work.module.css";
import AnimatedElement from '../AnimatedElement';

const Work = () => {
    return (
        <div className={styles.Work}>
            <img src="/work/background.png" alt="background_Work" className={styles.Background}/>
            
            <div className={styles.Content}>
                <AnimatedElement>
                    <div className={styles.Title}>
                        <h1>WORKS</h1>
                        <h2>作品</h2>
                    </div>
                </AnimatedElement>
                <AnimatedElement>
                    <img src="/work/work1.png" alt="work1" className={styles.Card}/>
                </AnimatedElement>
                <AnimatedElement>
                    <img src="/work/work2.png" alt="work2" className={styles.Card}/>
                </AnimatedElement>
                <AnimatedElement>
                    <img src="/work/work3.png" alt="work3" className={styles.Card}/>
                </AnimatedElement>
                
            </div>
        </div>
    );
}

export default Work;
