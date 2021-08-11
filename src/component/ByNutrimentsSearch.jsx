import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { API_KEY } from '../constantes';

const ByNutrimentsSearch = ({match}) => {
    const [results, setResult] = useState([]);

    function getResults(){
        const url = 'https://api.spoonacular.com/recipes/findByNutrients?min'+match.params.label+'='+match.params.min+'&max'+match.params.label+'='+match.params.max+'&number=5&apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setResult(response.data)
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
    )
};

export default ByNutrimentsSearch;
