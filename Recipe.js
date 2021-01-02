import React from 'react';
import style from './recipe.module.css';

const Recipe =({title,calories,image, ingredients,ingredientLines})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h2>Instructions</h2>
            <ol>
                {ingredientLines.map(ingredientLines=>(
                    <li>{ingredientLines}</li>
                ))}
            </ol>
            <h2>Calories</h2>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}
export default Recipe;