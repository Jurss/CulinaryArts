import React, {useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import './CSS/main.css';
import Loupe from '../img/loupe.svg';
import Search from './Search';
import Joke from './Joke';
import RandomRecipe from './RandomRecipe';

const Main = () => {
    const [query, setQuery] = useState('');
    const [results, setResult] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = () => {
        setResult([])
        const url ='https://api.spoonacular.com/recipes/complexSearch?query='+query+'&number=2&apiKey='+API_KEY
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
    }

    return (
        <div className="mainContainer">
            <div className="form">
                <input className="inputForm" onChange={handleChange} type="text" onKeyDown={handleKeyDown} placeholder="Search"/>
                <button className="buttonForm" onClick={handleSubmit} id="myBtn" type="submit"><img className="loupe" src={Loupe} alt="" /></button>
            </div>
            {results.length !== 0 &&
                <Search results={results} />
            }
            {/* {
                results.length === 0 &&
                <>
                    <Joke />
                    <RandomRecipe />
                </>
            } */}
        </div>
    )
}

export default Main;
