import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './CSS/Ingredients.css';

const Ingredients = ({id}) => {
    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    //const apiKey = 'fc143844671c4e7dbfd946ac2398da37';
    //const apiKey = '4ff1faa944a14d389e56ccb9ef80f238';
    const apiKey = '394d4e2e504b4f9699e2a95aaa339b66';
    const [ingredient, setIngredients] = useState([]);

    function getIngredients(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/ingredientWidget.json?apiKey='+apiKey;
        axios.get(url).then((response) => {
            setIngredients(response.data.ingredients);
        })
    }

    function CallApi(){
        useEffect(() => {
            getIngredients();
        }, [])
        return <div></div>
    }
    CallApi();

    return (
        <>
            {ingredient.map((result) => {
                return(
                    <div className="ingredientsCard" key={uuidv4()}>
                            <img className="img" src={'https://spoonacular.com/cdn/ingredients_100x100/'+result.image} alt="" />
                            <p><strong> {Math.round(result.amount.metric.value)} {result.amount.metric.unit}</strong></p>
                            <p>{result.name}</p>
                        </div>
                    )
            })}
        </>
    )
};

export default Ingredients;
