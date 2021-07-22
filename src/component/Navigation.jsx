import React from 'react';
import './CSS/navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navContainer">
            <div className="nameContainer">
                <h1 className="name">CulinaryArts</h1>
            </div>
            <div className="navList">
                <Link to='/'>
                    <h3>Recipe</h3>
                </Link>
                <Link to='/randomrecipe'>
                    <h3>Random Recipe</h3>
                </Link>
                <Link to='/ingredients'>
                    <h3>By Ingredients</h3>
                </Link>
                <Link to='/nutriments'>
                    <h3>By nutriments</h3>
                </Link>
            </div>
        </div>
    )
};

export default Navigation;
