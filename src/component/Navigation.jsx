import React from 'react';
import './CSS/navigation.css';
import { NavLink } from 'react-router-dom';
import Menu from '../img/menu.svg';
import Random from '../img/random.svg';
import Nutriment from '../img/nutriments.svg';
import Bulbe from '../img/bulbe.svg'
import Fork from '../img/fork.png';

const Navigation = () => {
    return (
        <div className="navContainer">
            <div className="nameContainer">
                <h2 className="name1">Culinary</h2>
                <h2 className="name2">Arts</h2>
            </div>
            <div className="navList">
                <NavLink exact activeClassName="current" className='navItem' to='/'>
                    <img src={Menu} alt="menu icone" />
                    <p>Recipe</p>
                </NavLink>
                <NavLink exact activeClassName="current" className='navItem' to='/randomrecipe'>
                    <img src={Random} alt="random icone" />
                    <p>Random Recipe</p>
                </NavLink>
                <NavLink exact activeClassName="current" className='navItem' to='/ingredients'>
                    <img src={Bulbe} alt="harvest icone" />
                    <p>By Ingredients</p>
                </NavLink>
                <NavLink exact activeClassName="current" className='navItem' to='/nutriments'>
                    <img src={Nutriment} alt="nutriment icone" />
                    <p>By nutriments</p>
                </NavLink>
            </div>
            <img className="fork" src={Fork} alt="fork" />
        </div>
    )
};

export default Navigation;
