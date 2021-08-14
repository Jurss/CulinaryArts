import React from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import { useState } from 'react';
import style from './CSS/joke.module.css';

const Joke = () => {
    const [joke, setJoke] = useState([]);

    function getJoke(){

        axios.get('https://api.spoonacular.com/food/jokes/random?apiKey='+API_KEY)
        .then((response) => {
            setJoke(response.data.text);
        })
    }
    if(joke.length === 0){
        getJoke();
    }
    return (
        <div className={style.joke}>
            <h2 className={style.jokeTitle}>A little joke ?</h2>
            <p className={style.jokeParagraph}>{joke}</p>
        </div>
    )
};

export default Joke;
