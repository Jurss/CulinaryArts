import React from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import { useState } from 'react';
import './CSS/recipeDetails.css';
import { useEffect } from 'react';
import person from '../img/person.png';
import sandClock from '../img/sand-clock.png';
import Equipement from './Equipement';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

const RecipeDetails = ({match}) => {
    const [servings, setServings] = useState([]);
    const [readyIn, setReadyIn] = useState('');
    const [title, setTitle] = useState([]);
    const [img, setImg] = useState('');
    const [toggleTabs, setToggleTabs] = useState(1);

    const toggleTab = (i) =>{
        setToggleTabs(i);
    };

    function getInformations(){
        const url = 'https://api.spoonacular.com/recipes/'+match.params.recipe+'/information?apiKey='+API_KEY;
        axios.get(url).then((response2) => {
            setServings(response2.data.servings);
            setReadyIn(response2.data.readyInMinutes);
            setTitle(response2.data.title);
            setImg(response2.data.image);
        })
    }

    function CallApi(){
        useEffect(() => {
            getInformations();
        }, [])
        return <div></div>
    }
    CallApi();
    return ( 
        <div className="mainRecipeDetailsContainer">
            <div className="recipeDetails">
                <h1>{title}</h1>
                <img className="recipeImg" src={img} alt="preview" />
                <div className="displayInformations">
                    <div className="displayInformationsItem">
                        <img src={person} alt="person" />
                        <p>{servings}</p>
                    </div>
                    <div className="displayInformationsItem">
                        <img src={sandClock} alt="sand clock" />
                        <p>Ready in {readyIn}min</p>
                    </div>
                </div>
                <div className="activeOnglet">
                    <li className={toggleTabs === 1 ? 'activeTabs' : 'tabs'} onClick={() => toggleTab(1)}>Ingredients</li>
                    <li className={toggleTabs === 2 ? 'activeTabs' : 'tabs'} onClick={() => toggleTab(2)}>Equipement</li>
                </div>
                <div className={toggleTabs === 1 ? 'ingredientsCardContainer activeContenu' : 'desactiveContenu'}>         
                    <Ingredients id={match.params.recipe} />
                </div>
                <div className={toggleTabs === 2 ? 'equipementCardContainer activeContenu' : 'desactiveContenu'}>
                    <Equipement id={match.params.recipe} />
                </div>
                <div className="stepContainer">
                    <Instructions id={match.params.recipe} />
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
