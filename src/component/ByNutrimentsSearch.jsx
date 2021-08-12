import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { API_KEY } from '../constantes';
import style from './CSS/byNutrimentsSearch.module.css';

const ByNutrimentsSearch = ({match}) => {
    const [results, setResult] = useState([]);

    function getResults(){
        const url = 'https://api.spoonacular.com/recipes/findByNutrients?min'+match.params.label+'='+match.params.min+'&max'+match.params.label+'='+match.params.max+'&number=30&apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setResult(response.data)
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
        <div className={style.mainContainer}>
            <div className={style.resultIngredients}>
                <Link to ={`/nutriments`}>
                    <h1>Other research ?</h1>
                </Link>
                {results.length !== 0 &&
                    results.map((result) => {
                        return(
                            
                                <div className={style.cardIngredients} >
                                    <Link to ={`/RecipeDetails/${result.id}`} key={uuidv4()}>
                                        <h2 className={style.title}>{result.title}</h2>
                                        <img className={style.imgCard} src={result.image} alt="recipe" />
                                    </Link>
                                </div>
                            
                        )
                    })
                }
                {results.length === 0 &&
                    <h2 className={style.searchNotFound}>sorry, didn't find anything</h2>    
                }
            </div>
        </div>
        )
};

export default ByNutrimentsSearch;
