import React, {useState} from 'react';
import axios from 'axios';
import './CSS/main.css';
import Loupe from '../img/loupe.svg';
import RecipeDetails from './RecipeDetails';
import Joke from './Joke';
import RandomRecipe from './RandomRecipe';

const Main = () => {
    const apiKey = '777a242ba0684136ba5af8b964599a11';
    const [query, setQuery] = useState('');
    const [results, setResult] = useState([]);
    const [clickedCard, setClickedCard] = useState(false);
    const [clickedSearch, setClickedSearch] = useState(true);
    const [idToChild, setIdToChild] = useState('');
    const [titleToChild, setTitleToChild] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    function handleSubmit(){
        setClickedSearch(!clickedSearch);
        const url ='https://api.spoonacular.com/recipes/complexSearch?query='+query+'&number=10&apiKey='+apiKey
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };


    function handleCard(title, id){
        setTitleToChild(title);
        setIdToChild(id);
        setClickedCard(!clickedCard);
    }
    return (
        <div className="mainContainer">
            <div className="form">
                <input className="inputForm" onChange={handleChange} type="text" name="image" placeholder="Search"/>
                <button className="buttonForm" onClick={handleSubmit} type="submit"><img className="loupe" src={Loupe} alt="" /></button>
            </div>
            
            <div className={clickedSearch ? 'home' : 'hidden'}>
                <Joke />
                <RandomRecipe />
            </div>

            <div className="cardContainer">
                {results.map((result) => {
                    return(
                        <button onClick={() => handleCard(result.title, result.id)}  key={result.id}>
                            <div className={clickedCard ? "hidden" :"card"} onClick={() => setClickedCard(true)}>
                                <h2>{result.title}</h2>
                                <img className="imgCard" src={result.image} alt="recipe" />
                            </div>
                        </button>
                    )
                })}
            </div>
                {clickedCard === true &&
                    <RecipeDetails id={idToChild} title={titleToChild} />
                }
        </div>
    )
}

export default Main
