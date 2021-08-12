import React from 'react';
import style from './component/CSS/errorPage.module.css'
import Error from './img/404.svg';

const ErrorPage = () => {
    return (
        <div className={style.mainErrorContainer}>
            <h1 className={style.title}>Error 404</h1>
            <h2 className={style.description}>Page Not Found</h2>
            <img src={Error} alt="404" />
        </div>
    )
}

export default ErrorPage
