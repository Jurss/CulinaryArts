import React from 'react';
import style from './CSS/navigation.module.css';
import { NavLink } from 'react-router-dom';
import Menu from '../img/menu.svg';
import Random from '../img/random.svg';
import Nutriment from '../img/nutriments.svg';
import Bulbe from '../img/bulbe.svg'
import Fork from '../img/fork.png';

const Navigation = () => {
    return (
        <div className={style.cheat}>
        <div className={style.navContainer}>
            <div className={style.test}>
                <div className={style.nameContainer}>
                    <h2 className={style.name1}>Culinary</h2>
                    <h2 className={style.name2}>Arts</h2>
                </div>
                <div className={style.navList}>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/'>
                        <img src={Menu} alt="menu icone" />
                        <p>Recipe</p>
                    </NavLink>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/randomrecipe'>
                        <img src={Random} alt="random icone" />
                        <p>Random Recipe</p>
                    </NavLink>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/byIngredients'>
                        <img src={Bulbe} alt="harvest icone" />
                        <p>By Ingredients</p>
                    </NavLink>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/nutriments'>
                        <img src={Nutriment} alt="nutriment icone" />
                        <p>By nutriments</p>
                    </NavLink>
                </div>
            </div>
        </div>
        <img className={style.fork} src={Fork} alt="fork" />
        </div>
    )
};

export default Navigation;
