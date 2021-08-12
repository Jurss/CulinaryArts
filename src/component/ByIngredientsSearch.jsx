import React from 'react';
import { API_KEY } from '../constantes';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './CSS/byIngredientsSearch.module.css';
import { Link } from 'react-router-dom';

const ByIngredientsSearch = ({match}) => {
    const [results, setResults] = useState([]);

    function getResults(){
        const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='+match.params.search+'&number=20&ranking=1&ignorePantry=true&apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setResults(response.data)
        })
    }

    function CallApi(){
        useEffect(() => {
            getResults();
        },[])
        return <div></div>
    }
    CallApi();

    return (
        <div className={style.mainresultIngredients} >
            <Link to ={`/byIngredients`}>
                <h1>Other research ?</h1>
            </Link>
            <div className={style.resultIngredients}>
                {results.length !== 0 &&
                    results.map((result) => {
                        return(
                            <div className={style.mainCardIngredients}>
                                <Link to ={`/RecipeDetails/${result.id}`} key={uuidv4()}>
                                    <div className={style.cardIngredients} >
                                        <h2 className={style.title}>{result.title}</h2>
                                        <img className={style.imgCard} src={result.image} alt="recipe" />
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            {results.length === 0 &&
                <h2 className={style.searchNotFound}>sorry, didn't find anything</h2>    
            }
        </div>
    )
};

export default ByIngredientsSearch;
