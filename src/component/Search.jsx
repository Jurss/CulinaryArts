
import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';

const Search = ({ results }) => {


    const [idToChild, setIdToChild] = useState('');
    const [titleToChild, setTitleToChild] = useState('');
    const [clickedCard, setClickedCard] = useState(false);
    const [imgToChild, setImgToChild] = useState('');


    function handleCard(title, id, img){
        setTitleToChild(title);
        setIdToChild(id);
        setImgToChild(img)
        setClickedCard(!clickedCard);
    }

    return (
        <div className="cardContainer">
        {results.map((result) => {
            return(
                <button className={clickedCard ? "hidden" :"card"} onClick={() => handleCard(result.title, result.id, result.image)}  key={result.id}>
                    <div onClick={() => setClickedCard(true)}>
                        <h2>{result.title}</h2>
                        <img className="imgCard" src={result.image} alt="recipe" />
                    </div>
                </button>
            )
        })}
            {clickedCard === true &&
                <RecipeDetails id={idToChild} title={titleToChild} img={imgToChild}/>
            }
    </div>
    )
};

export default Search;
