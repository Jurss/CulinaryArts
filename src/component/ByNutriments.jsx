import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import loupe from '../img/loupe.svg';
import './CSS/byNutriments.css';

const Nutriments = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [params, setParams] = useState({label: '', min: '0', max: '0'})
    
    const data = [
        { value: 'Carbs', label: 'Carbs' },
        { value: 'Protein', label: 'Protein' },
        { value: 'Calories', label: 'Calories' },
        { value: 'Fat', label: 'Fat' }
    ];
    const handleChange = (e) => {
        
        setSelectedOption(e);
        setParams({...params, label: e.value})
    }
    console.log(params);
    return (
        <div  className="mainContainer">
            <h1 className='title'>Select min/max nutriments value you would per recipe</h1>
            <div className="selectContainer">
                <Select
                    placeholder='--Select Option--'
                    value={selectedOption}
                    options={data}
                    onChange={handleChange}
                />
                </div>
            {selectedOption && (
                <div>
                    <div className='selectValue'>
                        <label for='min'>Min:</label>
                        <input type="text" name='min' id='min' placeholder='0' onChange={e => setParams({...params, min: e.target.value})}/>
                        <p>g and</p>
                        <label for='max'>Max:</label>
                        <input type="text" name='max' id='max' placeholder='0' onChange={e => setParams({...params, max: e.target.value})}/>g
                    </div>
                    <div className="goSearch">
                    <Link to={`/nutriments/search/${params.label}/${params.min}/${params.max}`}><img className='loupe' src={loupe} alt="loupe" /></Link>
                    </div>
                </div>
      )}
        </div>
    )
};

export default Nutriments;
