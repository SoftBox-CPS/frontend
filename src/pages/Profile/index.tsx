import React from 'react';
import Menu from './components/Menu';
import Info from "./components/Info";
import Main from "./components/Main";

import styles from './Profile.module.scss';

const Profile: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Личный кабинет</h2>
                <div className={styles.container_inline}>
                    <Menu />
                    <div className={styles.cont}>
                        <Info/>
                        <Main/>
                    </div>
                </div>
        </div>
    );
};

export default Profile;