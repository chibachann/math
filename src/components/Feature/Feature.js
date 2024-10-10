import React from "react";
import * as styles from "./Feature.module.css";

import AnimatedElement from '../AnimatedElement';

const Feature = () => {
    return (
        <div className={styles.Feature}>
            <div className={styles.Background}>
                <img src="/feature/background.png" alt="background_feature" className={styles.Texture}/>
            </div>
            <div className={styles.Content}>
            <AnimatedElement>
                <div className={styles.Title}>
                    <h1>FEATURE</h1>
                    <h2>特徴</h2>
                </div>
            </AnimatedElement>
                <div className={styles.CardBox}>
                    <AnimatedElement>
                        <div className={styles.Card}>
                            <img src="/feature/b.svg" alt="feature1"/>
                            <h3>モダンなデザイン</h3>
                            <p>
                                トレンドに合わせたデザインは、ユーザーに好印象を与えます。私たちは常に最新のトレンドに合わせたデザインを提供しています。
                            </p>
                        </div>
                    </AnimatedElement>
                    <AnimatedElement>
                        <div className={styles.Card}>
                            <img src="/feature/feature2.svg" alt="feature2"/>
                            <h3>素早い納品</h3>
                            <p>
                                素早い納品をお望みの場合、私たちにお任せください。私たちはお客様の要望に合わせて、最短での納品を心がけています。
                            </p>
                        </div>
                    </AnimatedElement>
                    <AnimatedElement>
                        <div className={styles.Card}>
                            <img src="/feature/feature3.svg" alt="feature3"/>
                            <h3>柔軟なご提案</h3>
                            <p>
                                ウェブサイトを作りたいけど、何から始めたらいいかわからない。そんな場合でも、私たちにお任せください。お客様のご要望に合わせたご提案をさせていただきます。
                            </p>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
            
        </div>
    );
}

export default Feature;
