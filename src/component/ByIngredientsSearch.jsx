import React from 'react';
import { API_KEY } from '../constantes';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useEffect } from 'react';
import './CSS/byIngredientsSearch.css';
import { Link } from 'react-router-dom';

const ByIngredientsSearch = ({match}) => {
    const [results, setResults] = useState([]);
    const [resultsLenght, setResultLenght] = useState(true)
    console.log(match)

    function getResults(){
        const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='+match.params.search+'&number=20&ranking=1&ignorePantry=true&apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setResults(response.data)
            if(results.length === 0){
                setResultLenght(false)
            }
        })
    }

    function CallApi(){
        useEffect(() => {
            getResults();
        },[])
        return <div></div>
    }
    CallApi();
    console.log(resultsLenght)

    return (
        <div className={resultsLenght ? 'mainresultIngredients' : 'empty' }>
            <Link to ={`/byIngredients`}>
                <h1>Other research ?</h1>
            </Link>
            <div className='resultIngredients'>
                {results.length !== 0 &&
                    results.map((result) => {
                        return(
                            <div className="mainCardIngredients">
                                <Link to ={`/RecipeDetails/${result.id}`} key={uuidv4()}>
                                    <div className='cardIngredients' >
                                        <h2>{result.title}</h2>
                                        <img className="imgCard" src={result.image} alt="recipe" />
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            {results.length === 0 &&
                <h2 className='searchNotFound'>sorry, didn't find anything</h2>    
            }
        </div>
    )
};

export default ByIngredientsSearch;
