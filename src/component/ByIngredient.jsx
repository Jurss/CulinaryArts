import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './CSS/byIngredients.css';
import add from '../img/add.png';
import loupe from '../img/loupe.svg';
import remove from '../img/remove.png';

const ByIngredients = () => {
    const [fields, setFields] = useState([{ value: null }]);
    const [concat, setConcat] = useState('');

    function handleChange(i, event) {
      const values = [...fields];
      values[i].value = event.target.value;
      setFields(values);
    }
    console.log(fields)
  
    function handleAdd() {
      const values = [...fields];
      values.push({ value: null });
      setFields(values);
    }
  
    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    }
    function concatFields(){
        console.log(fields)
        let str = '';
        fields.map((item) => {
            str += item.value + ',+';
        })
        let count = str.length - 2;
        setConcat(str.slice(0, count))
    }
    useEffect(() => {
        concatFields()
    },[fields])

    return (
        <div className='mainContainer'>
            <h1 className='title'>What ingredients do you have ?</h1>
            <div className='searchConatiner'>
                <h3>Add Ingredients</h3>
                {fields.map((field, idx) => {
                    return (
                    <div className='searchCard' key={`${field}-${idx}`}>
                        <input
                        type="text"
                        placeholder="Ingredients"
                        onChange={e => handleChange(idx, e)}
                        />
                        <button type="button" onClick={() => handleRemove(idx)}>
                        <img className='removeBtn' src={remove} alt="remove" />
                        </button>
                    </div>
                    );
                })}
                <div className="addBtnContainer">
                    <button  type="button" onClick={() => handleAdd()}>
                        <img className='addBtn' src={add} alt="add" />
                    </button>
                    <Link to={`/ByIngredientsSearch/${concat}`}><img className='loupe' src={loupe} alt="loupe" /></Link>
                </div>
                <div className='searchBtn'>
                </div>
                
            </div>
        </div>
    )
};

export default ByIngredients;
