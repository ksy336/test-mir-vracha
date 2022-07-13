import React, { Fragment } from 'react';
import styles from "../styles/IllnesBlockAdult.module.css";

const IllnessBlockAdult = () => {
    return (
        <Fragment>
            <div className={styles.illness__item}>
                <p>Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.</p>
            </div>
            <div className={styles.illness__item}>
                <p>По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.
                </p>
            </div>
            <div className={styles.illness__item}>
                <p>По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.</p>
            </div>
        </Fragment>
    );
};

export default IllnessBlockAdult;