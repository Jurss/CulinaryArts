import React from 'react';
import './component/CSS/errorPage.css'
import Error from './img/404.svg';

const ErrorPage = () => {
    return (
        <div className="mainErrorContainer">
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
            <img src={Error} alt="404" />
        </div>
    )
}

export default ErrorPage
