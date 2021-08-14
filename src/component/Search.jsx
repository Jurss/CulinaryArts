import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API_KEY} from '../constantes';
import style from './CSS/search.module.css';
import SearchQuery from './SearchQuery';

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
        <div className={style.searchContainer}>
            <SearchQuery />
            <div className={style.cardContainer}>
            {results.map((result) => {
                return(
                        <div className={style.card}>
                            <Link to={`/RecipeDetails/${result.id}`}>
                                <div>
                                    <h2 className={style.title}>{result.title}</h2>
                                    <img className={style.imgCard} src={result.image} alt="recipe" />
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
