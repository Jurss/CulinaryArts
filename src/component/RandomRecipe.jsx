import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {API_KEY} from '../constantes';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CSS/RanomRecipe.css';

const RandomRecipe = () => {

    const [results, setResults] = useState([]);

    const getRandomRecipe = () => {
        axios.get('https://api.spoonacular.com/recipes/random?number=10&apiKey='+ API_KEY).then((response) => {
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
                    <div className="randomCardSep" key={uuidv4()}>
                        <div className="randomCard">
                            <img className="randomImg" src={result.image} alt="product" />
                            <h3>{result.title}</h3>
                        </div>
                        <div className="randomCarBottom">
                            <h3>Ingredients:</h3>
                                <ul className="resultIngredients">
                                    {result.extendedIngredients.slice(0, 5).map((resultI) => {
                                        return(
                                            <li key={uuidv4()}><img className="imgIngredients" src={'https://spoonacular.com/cdn/ingredients_100x100/'+resultI.image} alt="ingredient" /></li>
                                        )
                                    })}
                                    <li>And more</li>
                                </ul>
                        </div>
                        <Link to={`/randomrecipe/${result.id}`}>
                            <button className="viewRecipe">View Recipe</button>
                        </Link>
                    </div>
                    )
                })}

            </div>
        </div>
    )
};

export default RandomRecipe;
