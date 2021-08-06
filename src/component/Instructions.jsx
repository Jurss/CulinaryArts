import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import { v4 as uuidv4 } from 'uuid';
import './CSS/instructions.css';

const Instructions = ({id}) => {
    const [instructions, setInstructions] = useState([]);

    function getInstructions(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/analyzedInstructions?apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setInstructions(response.data);
        })
    }

    function CallApi(){
        useEffect(() => {
            getInstructions();
        }, [])
        return <div></div>
    }
    CallApi();

    if(instructions.length !== 0){
        return (
            <>
                <h2>Preparation</h2>
                {instructions.map((result) => {
                    return(
                        <div className="stepsCardContainer" key={uuidv4()}>
                            {result.steps.map((result2) => {
                                return(
                                    <div className="stepsCard" key={uuidv4()}>
                                        <h4>Steps {result2.number}</h4>
                                        <p>{result2.step}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </>
        )
    }
    else{
        return(
            <>
                <h2>Preparation</h2>
                <h3 className="noDescription">No description</h3>
            </>
        )
    }
};

export default Instructions;
