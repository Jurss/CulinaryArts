import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { API_KEY } from '../constantes';

const ByNutrimentsSearch = ({match}) => {
    const [results, setResult] = useState([]);
    const [resultsLenght, setResultLenght] = useState(true)

    function getResults(){
        const url = 'https://api.spoonacular.com/recipes/findByNutrients?min'+match.params.label+'='+match.params.min+'&max'+match.params.label+'='+match.params.max+'&number=5&apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setResult(response.data)
            if(results.length === 0){
                setResultLenght(false)
            }
        })
    }
    console.log(results)

    function CallApi(){
        useEffect(() => {
            getResults();
        },[])
        return <div></div>
    }
    CallApi();
    return (
        <div className={resultsLenght ? 'mainresultIngredients' : 'empty' }>
            <div className='resultIngredients'>
                <Link to ={`/nutriments`}>
                    <h1>Other research ?</h1>
                </Link>
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
                {results.length === 0 &&
                    <h2 className='searchNotFound'>sorry, didn't find anything</h2>    
                }
            </div>
        </div>
        )
};

export default ByNutrimentsSearch;
