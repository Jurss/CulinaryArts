import React, {useState, useEffect} from 'react';
import RecipeDetails from './RecipeDetails';

const Search = ({ results }) => {

    const [idToChild, setIdToChild] = useState('');
    const [titleToChild, setTitleToChild] = useState('');
    const [clickedCard, setClickedCard] = useState(false);

    function handleCard(title, id){
        setTitleToChild(title);
        setIdToChild(id);
        setClickedCard(!clickedCard);
    }

    useEffect(() => {
            setClickedCard(!clickedCard);
    },[results])
    console.log(clickedCard)

    return (
        <div className="cardContainer">
        {results.map((result) => {
            return(
                <button className={clickedCard ? "hidden" :"card"} onClick={() => handleCard(result.title, result.id)}  key={result.id}>
                    <div onClick={() => setClickedCard(true)}>
                        <h2>{result.title}</h2>
                        <img className="imgCard" src={result.image} alt="recipe" />
                    </div>
                </button>
            )
        })}
            {clickedCard === true &&
                <RecipeDetails id={idToChild} title={titleToChild} />
            }
    </div>
    )
};

export default Search;
