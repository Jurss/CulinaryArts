import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './CSS/equipement.css';

const Equipement = ({id}) => {
    //const apiKey = '777a242ba0684136ba5af8b964599a11';
    //const apiKey = 'eb4f9cbd69184fefaf91e11d2a0e2814';
    const apiKey = 'fc143844671c4e7dbfd946ac2398da37';
    //const apiKey = '4ff1faa944a14d389e56ccb9ef80f238';
    //const apiKey = '394d4e2e504b4f9699e2a95aaa339b66';

    const [equipement, setEquipement] = useState([]);

    function getEquipement(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/equipmentWidget.json?apiKey='+apiKey;
        axios.get(url).then((response) => {
            setEquipement(response.data.equipment)
        })
    }
    function CallApi(){
        useEffect(() => {
            getEquipement();
        }, [])
        return <div></div>
    }
    CallApi();
    return (
        <>
            {equipement.map((result) => {
                return(
                    <div className="equipementCard" key={uuidv4()}>
                        <img className="img" src={'https://spoonacular.com/cdn/equipment_100x100/'+result.image} alt="" />
                    <p><strong>{result.name}</strong></p>
                </div>
                )
            })}
        </>
    )
};

export default Equipement;
