import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './CSS/RanomRecipe.css';

const RandomRecipe = () => {

    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    const apiKey = 'fc143844671c4e7dbfd946ac2398da37';
    //const apiKey = '4ff1faa944a14d389e56ccb9ef80f238';
    //const apiKey = '394d4e2e504b4f9699e2a95aaa339b66';
    const [results, setResults] = useState([]);

    const getRandomRecipe = () => {
        axios.get('https://api.spoonacular.com/recipes/random?number=2&apiKey='+ apiKey).then((response) => {
            setResults(response.data.recipes)
        })
    }
    if(results.length === 0){
        getRandomRecipe();
    }
    return (
        <div  className="mainRandomContainer">
            <div className="randomTitle">
                <h2>Looking for inspiration?</h2>
            </div>
            <div className="randomCardContainer">
                {results.map((result) => {
                    return(
                    <div className="randomCardSep" key={result.spoonacularScore}>
                        <div className="randomCard">
                            <img className="randomImg" src={result.image} alt="product" />
                            <h3>{result.title}</h3>
                        </div>
                        <div className="randomCarBottom">
                            <h3>Ingredients:</h3>
                                <ul className="resultIngredients">
                                    {result.extendedIngredients.slice(0, 5).map((resultI) => {
                                        return(
                                            <li key={resultI.id}><img className="imgIngredients" src={'https://spoonacular.com/cdn/ingredients_100x100/'+resultI.image} alt="ingredient" /></li>
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
