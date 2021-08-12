import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';
import { v4 as uuidv4 } from 'uuid';
import style from './CSS/equipement.module.css';

const Equipement = ({id}) => {
    const [equipement, setEquipement] = useState([]);

    function getEquipement(){
        const url = 'https://api.spoonacular.com/recipes/'+id+'/equipmentWidget.json?apiKey='+API_KEY;
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
    if(equipement.length !==0){
        return (
            <>
                {equipement.map((result) => {
                    return(
                        <div className={style.equipementCard} key={uuidv4()}>
                            <img className={style.img} src={'https://spoonacular.com/cdn/equipment_100x100/'+result.image} alt="" />
                        <p><strong>{result.name}</strong></p>
                    </div>
                    )
                })}
            </>
        )
    }else{
        return(
            <h3 className="noDescription">No description</h3>
        )
            
    }

};

export default Equipement;
