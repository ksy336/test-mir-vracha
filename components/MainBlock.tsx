import InfoForAdult from "./InfoForAdult";
import InfoForChild from "./InfoForChild";
import styles from "../styles/Main.module.css";

const MainBlock = () => {
    return (
        <main className={styles.main}>
                <div className={styles.layout__2__column}>
                    <section className={styles.first__section}>
                        <InfoForAdult/>
                    </section>
                    <section className={styles.second__section}>
                        <InfoForChild/>
                    </section>
                </div>
                <div className={styles.message}>
                    <span className={styles.message__text__main}>Сообщает ли один из ваших пациентов о следующих симптомах?
                        <span className={styles.message__text__additional}> (нажмите на любую иконку и узнайте больше)</span>
                    </span>
                </div>
                <section className={styles.carousel}>
                    <div>

                    </div>
                </section>
        </main>
    );
};

export default MainBlock;