// ** React Imports
import React from 'react';

// ** Styles
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import {RuMap} from "@components/RuMap";


const cx = classNames.bind(styles);


const MainPage = () => {

    return (
        <main className={cx('main')}>
            <RuMap/>
        </main>
    );
};
export default MainPage;

