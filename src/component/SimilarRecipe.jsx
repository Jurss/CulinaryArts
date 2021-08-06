import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import './CSS/similarRecipe.css'
import GetPhoto from './GetPhoto';

const SimilarRecipe = ({id}) => {
    const [similarRecipe, setSimilarRecipe] = useState([]);

    function getSimilarRecipe(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/similar?number=2&apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setSimilarRecipe(response.data)
        })
    }

    function CallApi(){
        useEffect(() => {
            getSimilarRecipe();
        }, [])
        return <div></div>
    }
    CallApi();

    return (
        <>
            <h2>More similar recipes?</h2>
            <div className="similarCard">
                {similarRecipe.map((result) => {
                    return(
                        <div key={result.id}>
                            <h3>{result.title}</h3>
                            <p>Ready in: {result.readyInMinutes} minutes</p>
                            <p>Servings: {result.servings}</p>
                            <GetPhoto id={result.id} />
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default SimilarRecipe;
