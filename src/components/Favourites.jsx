import {memo} from "react";
import {BsTrash3} from 'react-icons/bs';

const Favourites = ({ favouriteRecipes, recipeCardClickHandler }) => {
    return (
        <div>
            {favouriteRecipes.length > 0 && (
                <div className="favourites">
                    <div id="fav_section_title">Favourites</div>
                    <div className="fav_items">
                        {favouriteRecipes.map((favRecipe) => {
                            return (
                                <div key={favRecipe.idMeal} className="fav_item" onClick={(event) => recipeCardClickHandler(event, favRecipe.idMeal, "showModal")}>
                                    <img src={favRecipe.strMealThumb} alt="" />
                                    <BsTrash3 className="trash_icon" onClick={(event) => recipeCardClickHandler(event, favRecipe.idMeal, "removeFromFav")} />
                                    <div className="title">{favRecipe.strMeal}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default memo(Favourites);