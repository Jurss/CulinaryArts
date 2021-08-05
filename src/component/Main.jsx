import React, {useState} from 'react';
import axios from 'axios';
import './CSS/main.css';
import Loupe from '../img/loupe.svg';
import Search from './Search';
import Joke from './Joke';
import RandomRecipe from './RandomRecipe';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const Main = () => {
    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    //const apiKey = 'fc143844671c4e7dbfd946ac2398da37';
    //const apiKey = '4ff1faa944a14d389e56ccb9ef80f238';
    const apiKey = '394d4e2e504b4f9699e2a95aaa339b66';
    const [query, setQuery] = useState('');
    const [results, setResult] = useState([]);
    const [update, setUpdate] = useState(uuidv4());

    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = () => {
        setResult([])
        const url ='https://api.spoonacular.com/recipes/complexSearch?query='+query+'&number=2&apiKey='+apiKey
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };

    return (
        <div className="mainContainer">
            <div className="form">
                <input className="inputForm" onChange={handleChange} type="text" name="image" placeholder="Search"/>
                <button className="buttonForm" onClick={handleSubmit} type="submit"><img className="loupe" src={Loupe} alt="" /></button>
            </div>
            {results.length !== 0 &&
                <Search results={results} />
            }

            
            {
                results.length === 0 &&
                <>
                    <Joke />
                    <RandomRecipe />
                </>
            }
        </div>
    )
}

export default Main;
