import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './CSS/joke.css';

const Joke = () => {
    const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    const [joke, setJoke] = useState([]);

    function getJoke(){

        axios.get('https://api.spoonacular.com/food/jokes/random?apiKey='+apiKey).then((response) => {
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
