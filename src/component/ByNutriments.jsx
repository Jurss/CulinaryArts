import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import loupe from '../img/loupe.svg';
import style from './CSS/byNutriments.module.css';

const Nutriments = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [params, setParams] = useState({label: '', min: '0', max: '0'})
    
    const data = [
        { value: 'Carbs', label: 'Carbs' },
        { value: 'Protein', label: 'Protein' },
        { value: 'Calories', label: 'Calories' },
        { value: 'Alcohol', label: 'Alcohol' },
        { value: 'Caffeine ', label: 'Caffeine ' },
        { value: 'Copper', label: 'Copper' },
        { value: 'Choline', label: 'Choline' },
        { value: 'Cholesterol', label: 'Cholesterol' },
        { value: 'Fluoride', label: 'Fluoride' },
        { value: 'SaturatedFat', label: 'SaturatedFat' },
        { value: 'VitaminA', label: 'VitaminA' },
        { value: 'VitaminC', label: 'VitaminC' },
        { value: 'VitaminD', label: 'VitaminD' },
        { value: 'VitaminE', label: 'VitaminE' },
        { value: 'VitaminK', label: 'VitaminK' },
        { value: 'VitaminB1', label: 'VitaminB1' },
        { value: 'VitaminB2', label: 'VitaminB2' },
        { value: 'VitaminB3', label: 'VitaminB3' },
        { value: 'VitaminB5', label: 'VitaminB5' },
        { value: 'VitaminB6', label: 'VitaminB6' },
        { value: 'VitaminB12', label: 'VitaminB12' },
        { value: 'Fiber', label: 'Fiber' },
        { value: 'Folate', label: 'Folate' },
        { value: 'FolicAcid', label: 'FolicAcid' },
        { value: 'Iodine', label: 'Iodine' },
        { value: 'Iron', label: 'Iron' },
        { value: 'Magnesium', label: 'Magnesium' },
        { value: 'Manganese', label: 'Manganese' },
        { value: 'Phosphorus', label: 'Phosphorus' },
        { value: 'Potassium', label: 'Potassium' },
        { value: 'Selenium', label: 'Selenium' },
        { value: 'Sodium', label: 'Sodium' },
        { value: 'Sugar', label: 'Sugar' },
        { value: 'Zinc', label: 'Zinc' }
    ];
    const handleChange = (e) => {
        
        setSelectedOption(e);
        setParams({...params, label: e.value})
    }
    return (
        <div  className={style.mainContainer}>
            <h1>Select min/max nutriments value you would per recipe</h1>
            <div className="selectContainer">
                <Select
                className={style.selectContainer}
                    placeholder='--Select Option--'
                    value={selectedOption}
                    options={data}
                    onChange={handleChange}
                />
                </div>
            {selectedOption && (
                <div>
                    <div className={style.selectValue}>
                        <label for='min'>Min:</label>
                        <input type="text" name='min' id='min' placeholder='0' onChange={e => setParams({...params, min: e.target.value})}/>
                        <p>g and</p>
                        <label for='max'>Max:</label>
                        <input type="text" name='max' id='max' placeholder='0' onChange={e => setParams({...params, max: e.target.value})}/>g
                    </div>
                    <div className={style.goSearch}>
                    <Link className={style.link} to={`/nutriments/search/${params.label}/${params.min}/${params.max}`}><img className={style.loupe} src={loupe} alt="loupe" /></Link>
                    </div>
                </div>
      )}
        </div>
    )
};

export default Nutriments;
