import React from 'react';
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
                <div className={styles.heading}>
                    <h1>А вдруг СМА?</h1>
                </div>
                <div className={styles.choose}>
                    <h3>Выберите, кто Ваш пациент:</h3>
                </div>
        </header>
    );
};

export default Header;