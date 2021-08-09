import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './CSS/byIngredients.css';

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
    console.log(concat)
    return (
        <div className='mainContainer'>
            <h1 className='title'>search for a recipe with the ingredients you have</h1>
            <div>
                <h3>Add Ingredients</h3>
                {fields.map((field, idx) => {
                    return (
                    <div key={`${field}-${idx}`}>
                        <input
                        type="text"
                        placeholder="Enter text"
                        onChange={e => handleChange(idx, e)}
                        />
                        <button type="button" onClick={() => handleRemove(idx)}>
                        X
                        </button>
                    </div>
                    );
                })}
                <button type="button" onClick={() => handleAdd()}>
                    +
                </button>
                
                <Link to={`/ByIngredientsSearch/${concat}`}>OK</Link>
            </div>
        </div>
    )
};

export default ByIngredients;
