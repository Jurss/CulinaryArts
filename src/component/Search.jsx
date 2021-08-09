import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API_KEY} from '../constantes';
import './CSS/search.css';
import SearchQuery from './SearchQuery';
import './CSS/search.css';

const Search = ({match}) => {
    const [results, setResult] = useState([]);

    const handleSubmit = () => {
        setResult([])
        const url ='https://api.spoonacular.com/recipes/complexSearch?query='+match.params.query+'&number=15&apiKey='+API_KEY
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };
    useEffect(() => {
        handleSubmit();
    }, [])

    return (
        <div className="searchContainer">
            <SearchQuery />
            <div className="cardContainer">
            {results.map((result) => {
                return(
                        <div className='card'>
                            <Link to={`/RecipeDetails/${result.id}`}>
                                <div>
                                    <h2>{result.title}</h2>
                                    <img className="imgCard" src={result.image} alt="recipe" />
                                </div>
                            </Link>
                        </div>
                )
            })}
        </div>
    </div>
    )
};

export default Search;
