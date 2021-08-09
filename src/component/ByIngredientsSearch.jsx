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
    console.log(match)

    function getResults(){
        const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='+match.params.search+'&number=2&ranking=1&ignorePantry=true&apiKey='+API_KEY;
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
    console.log(results)

    return (
        <div className='mainresultIngredients'>
            <Link to ={`/byIngredients`}>
                <h1>More research ?</h1>
            </Link>
            {results.map((result) => {
                console.log(result.id)
                return(
                    <Link to ={`/ByIngredientsResult/${result.id}`} key={uuidv4()}>
                        <div className='cardIngredients' >
                            <h2>{result.title}</h2>
                            <img className="imgCard" src={result.image} alt="recipe" />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
};

export default ByIngredientsSearch;
