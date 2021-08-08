import React, {useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import './CSS/main.css';
import Loupe from '../img/loupe.svg';
import Search from './Search';
import { Link } from 'react-router-dom';
import Joke from './Joke';
import RandomRecipe from './RandomRecipe';
import './CSS/main.css'

const Main = () => {
    const [query, setQuery] = useState('');
    
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="mainContainer">
             <div className="form">
                <input className="inputForm" onChange={handleChange} type="text" placeholder="Search"/>
                <Link to={`/${query}`}>
                    <button className="buttonForm" id="myBtn" type="submit"><img className="loupe" src={Loupe} alt="" /></button>
                </Link>
            </div> 
                    <Joke />
                    <RandomRecipe />
        </div>
    )
}

export default Main;
