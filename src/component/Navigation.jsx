import React from 'react';
import style from './CSS/navigation.module.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../img/menu.svg';
import Random from '../img/random.svg';
import Nutriment from '../img/nutriments.svg';
import Bulbe from '../img/bulbe.svg'
import burger from '../img/menu.png';
import close from '../img/close.png';
import { useState } from 'react';

const Navigation = () => {
    const [displayMenu, setDisplayMenu] = useState(true);//Sidebar menu for responsive

    return (
        <div className={displayMenu ? `${style.cheat}` : `${style.cheatSmallScreen}`}>
        <div className={displayMenu ? `${style.navContainer}` : `${style.navConatinerSmallScreen}`}>
            <div className={style.test}>
                <div className={style.nameContainer}>
                    <h2 className={displayMenu ? `${style.name1}` : `${style.pDisplayOff}`}>Culinary</h2>
                    <h2 className={displayMenu ? `${style.name2}` : `${style.pDisplayOff}`}>Arts</h2>
                </div>
                <div className={style.navList}>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/'>
                        <img src={MenuIcon} alt="menu icone" />
                        <p className={displayMenu ? `` : `${style.pDisplayOff}`}>Recipe</p>
                    </NavLink>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/randomrecipe'>
                        <img src={Random} alt="random icone" />
                        <p className={displayMenu ? `` : `${style.pDisplayOff}`}>Random Recipe</p>
                    </NavLink>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/byIngredients'>
                        <img src={Bulbe} alt="harvest icone" />
                        <p className={displayMenu ? `` : `${style.pDisplayOff}`}>By Ingredients</p>
                    </NavLink>
                    <NavLink exact activeClassName={style.current} className={style.navItem} to='/nutriments'>
                        <img src={Nutriment} alt="nutriment icone" />
                        <p className={displayMenu ? `` : `${style.pDisplayOff}`}>By nutriments</p>
                    </NavLink>
                </div>
            </div>
            <button className={displayMenu ? `${style.pDisplayOff}` : `${style.menu}`} onClick={() => setDisplayMenu(true)}><img className={style.imgMenu} src={burger} alt="menu" /></button>
            <button className={displayMenu ? `${style.close}` : `${style.pDisplayOff}`} onClick={() => setDisplayMenu(false)}><img className={style.imgMenu} src={close} alt="close" /></button>
        </div>
        </div>
    )
};

export default Navigation;
