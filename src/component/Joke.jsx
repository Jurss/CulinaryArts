import React from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import { useState } from 'react';
import './CSS/joke.css';

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
        <div className="joke">
            <h2 className="jokeTitle">A little joke ?</h2>
            <p>{joke}</p>
        </div>
    )
};

export default Joke;
