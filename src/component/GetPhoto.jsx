import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_KEY} from '../constantes';

const GetPhoto = ({id}) => {
    const [photo1, setGetPhoto1] = useState('');
    const idNow = id;

    function getPhoto(idNow){
        const url = 'https://api.spoonacular.com/recipes/'+idNow+'/information?apiKey='+API_KEY;
        axios.get(url).then((response) => {
            setGetPhoto1(response.data.image)
        })
    }
    function CallApi(){
        useEffect(() => {
            getPhoto(idNow);
        }, [])
        return <div></div>
    }
    CallApi();
    return (
        <img src={photo1} alt="" />
    )
};

export default GetPhoto;
