import React from 'react';

const Card = ({ meal }) => {   // (props) ou de manière destructurée = { meal }
    //console.log(props.meal);
    return (
        <div className="meal-card">
            <h2>{meal.strMeal}</h2>
            <p>Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default Card;