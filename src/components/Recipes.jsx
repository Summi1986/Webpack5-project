
const elevenShieldReciper = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elevenGloutenReciper = {
    ...elevenShieldReciper,
    leather: 1,
    refinedMoonstone: 8
}

import {useState} from 'react'

export const Recipes = () =>  {

    const [recipe, setRecipe] = useState({});

    return (
        <div>
            <h3>Current Recipe</h3>
            <button onClick={() =>  setRecipe(elevenShieldReciper)}>Shield Recipe</button>
            <button onClick={() =>  setRecipe(elevenGloutenReciper)}>Glouten Recipe</button>
            <ul>
                {
                    Object.keys(recipe).map(ingredient => <li key={ingredient}>{ingredient} : {recipe[ingredient]}</li>)
                }
            </ul>
        </div>
    )
};