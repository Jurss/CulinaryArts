import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Loupe from '../img/loupe.svg';
import style from './CSS/searchQuery.module.css';


const SearchQuery = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className={style.form}>
            <input className={style.inputForm} onChange={handleChange} type="text" placeholder="Search"/>
            <Link to={`/search/${query}`}>
                <button className={style.buttonForm} id="myBtn" type="submit"><img className={style.loupe} src={Loupe} alt="" /></button>
            </Link>
        </div> 
    )
};

export default SearchQuery;
