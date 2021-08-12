import React from 'react';
import styles from './CSS/main.module.css';
import Joke from './Joke';
import RandomRecipeHome from './RandomRecipeHome';
import SearchQuery from './SearchQuery';

const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <SearchQuery />
            <Joke />
            <RandomRecipeHome />
        </div>
    )
}

export default Main;
