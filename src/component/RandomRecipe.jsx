import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './CSS/RanomRecipe.css';

const RandomRecipe = () => {

    const apiKey = '777a242ba0684136ba5af8b964599a11';
    const [results, setResults] = useState([]);

    const getRandomRecipe = () => {
        axios.get('https://api.spoonacular.com/recipes/random?number=2&apiKey='+ apiKey).then((response) => {
            setResults(response.data.recipes)
        })
    }
    if(results.length === 0){
        getRandomRecipe();
    }
    console.log(results);
    return (
        <div  className="mainRandomContainer">
            <div className="randomTitle">
                <h2>Looking for inspiration?</h2>
            </div>
            <div className="randomCardContainer">
                {results.map((result) => {
                    return(
                    <div className="randomCardSep">
                        <div className="randomCard">
                            <img className="randomImg" src={result.image} alt="product" />
                            <h3>{result.title}</h3>
                        </div>
                        <div className="randomCarBottom">
                            <h3>Ingredients:</h3>
                                <ul className="resultIngredients">
                                    {result.extendedIngredients.slice(0, 5).map((resultI) => {
                                        return(
                                            <li>{resultI.nameClean}</li>
                                        )
                                    })}
                                    <li>And more</li>
                                </ul>
                        </div>
                        <button className="viewRecipe">View Recipe</button>
                    </div>
                    )
                })}
            </div>
        </div>
    )
};

export default RandomRecipe;
