import React, {useRef} from 'react';
import styles from "../styles/Carousel.module.css";


const Carousel = () => {
    let info: any;
    const refList = useRef<HTMLLIElement>(null);
    const textRef = useRef<HTMLElement>(null);
    console.log( textRef);
    if (typeof window !== "undefined") {
         info = document.createElement("span");
    }
    const textHandler = () => {
       if(textRef?.current) {
           const element =  textRef?.current;
           console.log(element);
           element.style.display = "inline-block";
       }
    }
    const deleteTextHandler = () => {
        if(textRef?.current) {
            const element = textRef?.current;
            console.log(element);
            element.style.display = "none";
        }
    }
    // let listAll;
    // if (typeof window !== "undefined") {
    //      listAll = Array.from(document.querySelectorAll("li"));
    // }
    // console.log(listAll);
    // listAll?.forEach((list) => {
    //     return list.addEventListener("mouseover", function () {
    //         info = document.createElement("span");
    //         info.innerText = "Ограниченная способность поднимать руки \n" +
    //             "и переносить предметы";
    //         list.append(info);
    //     })
    // })
    // listAll?.forEach((list) => {
    //     return list.addEventListener("mouseout", function () {
    //        const element = document.querySelector("span");
    //        element?.remove();
    //     })
    // })

    return (
                <ul className={styles.circle__container}>
                    <li className={styles.circle__item} ref={refList} onMouseOver={textHandler} onMouseOut={deleteTextHandler} >
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/head.png" alt="image of human body"/>
                        <span className={styles.invisible__text} ref={textRef}>Ограниченная способность поднимать руки и переносить предметы</span>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/lungs.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/feet.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/bones.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/pelvis.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/woman.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/cropped.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__item}>
                        <img className={styles.circle__plus} src="/images/plus.png" alt="it's plus sign"/>
                        <img src="/images/man.png" alt="image of human body"/>
                    </li>
                    <li className={styles.circle__center}>
                        <img src="/images/circle-picture.png" alt="image of human body"/>
                        <span>Взрослый</span>
                    </li>
                </ul>
    );
};

export default Carousel;