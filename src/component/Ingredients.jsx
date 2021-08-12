import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import { v4 as uuidv4 } from 'uuid';
import style from './CSS/ingredients.module.css';

const Ingredients = ({id}) => {
    const [ingredient, setIngredients] = useState([]);

    function getIngredients(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/ingredientWidget.json?apiKey='+API_KEY;
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
                    <div className={style.ingredientsCard} key={uuidv4()}>
                            <img className={style.img} src={'https://spoonacular.com/cdn/ingredients_100x100/'+result.image} alt="" />
                            <p><strong> {Math.round(result.amount.metric.value)} {result.amount.metric.unit}</strong></p>
                            <p>{result.name}</p>
                        </div>
                    )
            })}
        </>
    )
};

export default Ingredients;
