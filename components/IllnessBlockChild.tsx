import React, {Fragment} from 'react';
import styles from "../styles/IllnesBlockAdult.module.css";

const IllnessBlockChild = () => {
    return (
        <Fragment>
            <div className={styles.illness__item}>
                <p>Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
                    движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                    осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                    в отношении наличия СМА.
                </p>
            </div>
            <div className={styles.illness__item}>
                <p>Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
                    терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                    дегенерации при прогрессировании заболевания
                </p>
            </div>
        </Fragment>
    );
};

export default IllnessBlockChild;