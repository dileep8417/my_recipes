import { memo } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = ({ recipes, favouriteRecipes, recipeCardClickHandler }) => {
    return (
        <div>
            {recipes.length > 0 ? (
                <div id="recipes_container">
                    {recipes.map(recipe => {
                            return <RecipeCard key={recipe.idMeal} recipe={recipe} favouriteRecipes={favouriteRecipes} recipeCardClickHandler={recipeCardClickHandler} />
                        }
                    )}
                </div>
            ) : (<center style={{marginTop: "24px"}}><h2>No recipes found to show :(</h2></center>)}
        </div>
    )
}

export default memo(Recipes);