import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './CSS/recipeDetails.css';
import { useEffect } from 'react';
import person from '../img/person.png';
import sandClock from '../img/sand-clock.png';
import Equipement from './Equipement';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

const RecipeDetails = ({title, id, img}) => {
    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    //const apiKey = 'fc143844671c4e7dbfd946ac2398da37';
    //const apiKey = '4ff1faa944a14d389e56ccb9ef80f238';
    const apiKey = '394d4e2e504b4f9699e2a95aaa339b66';

    const [servings, setServings] = useState([]);
    const [readyIn, setReadyIn] = useState('');
    const [toggleTabs, setToggleTabs] = useState(1);

    const toggleTab = (i) =>{
        setToggleTabs(i);
    };

    function getInformations(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/information?apiKey='+apiKey;
        axios.get(url).then((response2) => {
            setServings(response2.data.servings);
            setReadyIn(response2.data.readyInMinutes);
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
                    <Ingredients id={id} />
                </div>
                <div className={toggleTabs === 2 ? 'equipementCardContainer activeContenu' : 'desactiveContenu'}>
                    <Equipement id={id} />
                </div>
                <div className="stepContainer">
                    <Instructions id={id} />
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
