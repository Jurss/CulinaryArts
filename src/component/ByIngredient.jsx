import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import style from './CSS/byIngredients.module.css';
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
        let str = '';
        fields.map((item) => {
            return(
                str += item.value + ',+'
            )
        })
        let count = str.length - 2;
        setConcat(str.slice(0, count))
    }
    useEffect(() => {
        concatFields()
    },[fields])

    return (
        <div className={style.mainContainerIngredients}>
            <h1 className={style.title}>What ingredients do you have ?</h1>
            <div className={style.searchConatiner}>
                <h3>Add Ingredients</h3>
                {fields.map((field, idx) => {
                    return (
                    <div className={style.searchCard} key={`${field}-${idx}`}>
                        <input
                        className={style.input}
                        type="text"
                        placeholder="Ingredients"
                        onChange={e => handleChange(idx, e)}
                        />
                        <button className={style.buttonForm} type="button" onClick={() => handleRemove(idx)}>
                        <img className={style.removeBtn} src={remove} alt="remove" />
                        </button>
                    </div>
                    );
                })}
                <div className={style.addBtnContainer}>
                    <button className={style.buttonForm} type="button" onClick={() => handleAdd()}>
                        <img className={style.addBtn} src={add} alt="add" />
                    </button>
                    <Link to={`/ByIngredients/search/${concat}`}><img className={style.loupe} src={loupe} alt="loupe" /></Link>
                </div>
                <div className={style.searchBtn}>
                </div>
                
            </div>
        </div>
    )
};

export default ByIngredients;
