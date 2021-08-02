import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './CSS/instructions.css';

const Instructions = ({id}) => {
    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    const apiKey = 'fc143844671c4e7dbfd946ac2398da37';
    //const apiKey = '4ff1faa944a14d389e56ccb9ef80f238';
    //const apiKey = '394d4e2e504b4f9699e2a95aaa339b66';
    const [instructions, setInstructions] = useState([]);

    function getInstructions(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/analyzedInstructions?apiKey='+apiKey;
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
};

export default Instructions;
