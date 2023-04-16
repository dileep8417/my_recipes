import {useMemo} from 'react';
import {BiDish} from 'react-icons/bi';
import {MdLocationPin} from 'react-icons/md';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const RecipeCard = ({ recipe, favouriteRecipes, recipeCardClickHandler }) => {

    const checkIsFavRecipe = (mealId) => {
        return favouriteRecipes.find((favRecipe) => favRecipe.idMeal === mealId) !== undefined;
    }

    const { idMeal, strMealThumb, strArea, strMeal } = recipe;
    const isFavRecipe = useMemo(() => checkIsFavRecipe(recipe.idMeal), [favouriteRecipes]);

    return (
        <div className="card" onClick={(event) => recipeCardClickHandler(event, idMeal, "showModal")}>
            <img src={strMealThumb + "/preview"} alt="" />
            <div className="card_body">
                <div className="row">
                    <div className="country"><MdLocationPin className="card_icons" />{strArea}</div>
                    {isFavRecipe ? <AiFillHeart className="remove_from_fav" onClick={(event) => recipeCardClickHandler(event, idMeal, "removeFromFav")} /> : <AiOutlineHeart className="add_to_fav" onClick={(event) => recipeCardClickHandler(event, idMeal, "addToFav")} />}
                </div>
                <div className="title"><BiDish className="card_icons" /> {strMeal}</div>
            </div>
        </div>
    );
}

export default RecipeCard;