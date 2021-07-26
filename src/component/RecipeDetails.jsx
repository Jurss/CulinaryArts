import React from 'react';
import axios from 'axios';
import './CSS/recipedatails.css'
import { useState } from 'react';

const RecipeDetails = ({title, id}) => {
    const apiKey = '777a242ba0684136ba5af8b964599a11';
    const [ingredient, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const getIngredients = () => {
        const url = 'https://api.spoonacular.com/recipes/'+id+'/ingredientWidget.json?apiKey='+apiKey;
        axios.get(url).then((response) => {
            setIngredients(response.data.ingredients);
        })
    }
    const getInstructions= () => {
        const url = 'https://api.spoonacular.com/recipes/'+id+'/analyzedInstructions?apiKey='+apiKey;
        axios.get(url).then((response) => {
            setInstructions(response.data);
            console.log(instructions);
        })
    }

    function recipeDetails(){
        getInstructions();
        getIngredients();
    }
    if(ingredient.length === 0){
        recipeDetails()
    }

    return ( 
        <div>
            <div className="recipeDetails">
                <h1>{title}</h1>
                {ingredient.map((result) => {
                        return(
                            <div className="detailCard">
                                <img className="img" src={'https://spoonacular.com/cdn/ingredients_100x100/'+result.image} alt="" />
                                <p>{result.name}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default RecipeDetails
