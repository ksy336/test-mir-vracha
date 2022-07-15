import React, {useState} from 'react';
import styles from "../styles/Carousel.module.css";


const Carousel = () => {
    const [showText, setShowText] = useState<boolean>(false);
    const [lungsText, setLungsText] = useState<boolean>(false);
    const [feetText, setFeetText] = useState<boolean>(false);
    const [bonesText, setBonesText] = useState<boolean>(false);
    const [pelvisText, setPelvisText] = useState<boolean>(false);
    const [bodyText, setBodyText] = useState<boolean>(false);
    const [croppedText, setCroppedText] = useState<boolean>(false);
    const [manText, setManText] = useState<boolean>(false);


    return (
                <ul className={styles.circle__container}>
                    <li className={styles.circle__item} onMouseOver={() => {setShowText(true)}} onMouseOut={() => {setShowText(false)}}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/head.png" alt="image of human body" />
                        {showText && (<span className={styles.invisible__head} >Нарушения жевания и глотания</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setLungsText(true)}} onMouseOut={() => setLungsText(false)}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/lungs.png" alt="image of human body"/>
                        {lungsText && (<span className={styles.invisible__lungs}>Дыхательная недостаточность/ респираторная дисфункция</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setFeetText(true)}} onMouseOut={() => setFeetText(false)} >
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/feet.png" alt="image of human body"/>
                        {feetText && (<span className={styles.invisible__feet}>Неспособность бегать, изменение походки</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setBonesText(true)}} onMouseOut={() => setBonesText(false)} >
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/bones.png" alt="image of human body"/>
                        {bonesText && (<span className={styles.invisible__bones}>Контрактура суставов</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setPelvisText(true)}} onMouseOut={() => setPelvisText(false)}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/pelvis.png" alt="image of human body"/>
                        {pelvisText && (<span className={styles.invisible__pelvis}>Вывих бедра</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setBodyText(true)}} onMouseOut={() => setBodyText(false)} >
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/woman.png" alt="image of human body"/>
                        {bodyText && (<span className={styles.invisible__woman}>Утомляемость</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setCroppedText(true)}} onMouseOut={() => setCroppedText(false)}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/cropped.png" alt="image of human body"/>
                        {croppedText && (<span className={styles.invisible__cropped}>Сколиоз</span>)}
                    </li>
                    <li className={styles.circle__item} onMouseOver={() => {setManText(true)}} onMouseOut={() => setManText(false)}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/man.png" alt="image of human body"/>
                        {manText && (<span className={styles.invisible__man}>Ограниченная способность поднимать руки и переносить предметы</span>)}
                    </li>
                    <li className={styles.circle__center}>
                        <img src="/images/circle-picture.png" alt="image of human body"/>
                        <span>Взрослый</span>
                    </li>
                </ul>
    );
};

export default Carousel;