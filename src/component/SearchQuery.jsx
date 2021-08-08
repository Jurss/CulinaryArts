import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Loupe from '../img/loupe.svg';
import './CSS/searchQuery.css';


const SearchQuery = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
    <div className="form">
        <input className="inputForm" onChange={handleChange} type="text" placeholder="Search"/>
        <Link to={`/${query}`}>
            <button className="buttonForm" id="myBtn" type="submit"><img className="loupe" src={Loupe} alt="" /></button>
        </Link>
    </div>
    )
};

export default SearchQuery;
