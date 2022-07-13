import React from 'react';
import IllnessBlockChild from "./IllnessBlockChild";
import styles from "../styles/Info.module.css";

const InfoForChild = () => {
    return (
        <div>
            <div className={styles.info__patient}>
                <div className={styles.paragraph}>
                    <span>Ребенок</span>
                 </div>
                <div className={styles.info__image}>
                    <img src="/images/child.png" alt="child photo" title="it's an child patient"/>
                </div>
            </div>
            <div className={styles.illness__info__child}>
              <IllnessBlockChild/>
            </div>
        </div>
    );
};

export default InfoForChild;