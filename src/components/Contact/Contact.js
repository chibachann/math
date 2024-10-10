import React from "react";
import * as styles from "./Contact.module.css";



const Contact = () => {

    return (
        <div className={styles.Contact}>
            <div className={styles.Content}>
                <div className={styles.Title}>
                    <h1>Lets discuss your project</h1>
                    <h2>お問い合わせ</h2>
                </div>
                <p className={styles.Text}>
                    お客様が目指しているビジョンやアイデアを<br/>
                    ぜひお聞かせください。<br/>
                    お客様のビジョンを形にする<br/>
                    お手伝いをさせていただきます。
                </p>

                <a 
                    href="https://forms.gle/P8qMyJXtx3vmMuYt5"
                    className={styles.Button}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    お問い合わせフォームへ
                </a>

            </div>
        </div>
    );
}

export default Contact;
