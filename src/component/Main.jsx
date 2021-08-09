import React from 'react';
import './CSS/main.css';
import Joke from './Joke';
import RandomRecipe from './RandomRecipe';
import './CSS/main.css'
import SearchQuery from './SearchQuery';

const Main = () => {

    return (
            <div className="mainContainer">
                <SearchQuery />
                        <Joke />
                        <RandomRecipe />
            </div>
    )
}

export default Main;
