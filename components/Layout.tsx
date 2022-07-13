import React from 'react';
import Header from "./Header";
import MainBlock from "./MainBlock";
import styles from "../styles/Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.back__image}>
            <Header/>
            <MainBlock/>
        </div>
    );
};

export default Layout;