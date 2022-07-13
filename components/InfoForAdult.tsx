import React from 'react';
import IllnessBlockAdult from "./IllnessBlockAdult";
import styles from "../styles/Info.module.css";

const InfoForAdult = () => {
    return (
        <div>
            <div className={styles.info__patient}>
                <div className={styles.paragraph}>
                    <span>Взрослый</span>
                </div>
                <div className={styles.info__image}>
                    <img src="/images/adult.png" alt="adult photo" title="it's an adult patient"/>
                </div>
            </div>
            <div className={styles.illness__info}>
                <IllnessBlockAdult/>
            </div>
        </div>
    );
};

export default InfoForAdult;