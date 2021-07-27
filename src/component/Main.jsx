import React, {useState} from 'react';
import axios from 'axios';
import './CSS/main.css';
import Loupe from '../img/loupe.svg';
import { useEffect } from 'react';
import Search from './Search';

const Main = () => {
    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    const [query, setQuery] = useState('');
    const [results, setResult] = useState([]);
    const [clickedSearch, setClickedSearch] = useState(true);



    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    function handleSubmit(){
        setClickedSearch(!clickedSearch);
        const url ='https://api.spoonacular.com/recipes/complexSearch?query='+query+'&number=2&apiKey='+apiKey
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };
    console.log(query)
    console.log(results)




    return (
        <div className="mainContainer">
            <div className="form">
                <input className="inputForm" onChange={handleChange} type="text" name="image" placeholder="Search"/>
                <button className="buttonForm" onClick={handleSubmit} type="submit"><img className="loupe" src={Loupe} alt="" /></button>
            </div>
            
            <div className={clickedSearch ? 'home' : 'hidden'}>
                {/* <Joke />
                <RandomRecipe /> */}
            </div>
                <Search results={results} />
        </div>
    )
}

export default Main
