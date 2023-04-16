import { useCallback } from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import Favourites from "./Favourites";
import Modal from './Modal';
import { recipesUrl } from "../Constants";
import { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {

    const [recipes, setRecipes] = useState([]);

    const [favouriteRecipes, setFavouriteRecipes] = useState(JSON.parse(localStorage.getItem("favouriteRecipes")) || []);

    const [isLoaded, setIsLoaded] = useState(false);

    const [showRecipeModal, setShowRecipeModal] = useState(false);

    const [selectedRecipe, setSelectedRecipe] = useState({});

    useEffect(() => {
        loadRecipes(recipesUrl);
    }, []);

    useEffect(() => localStorage.setItem('favouriteRecipes', JSON.stringify(favouriteRecipes)), [favouriteRecipes]);

    const loadRecipes = useCallback((url, searchTerm = "") => {
        try {
            setIsLoaded(false);
            return axios(url + searchTerm).then(({ data:result }) => {
                setIsLoaded(true);
                setRecipes(result.meals || []);
            });
        } catch (err) {
            console.log(err)
        }
    }, []);

    const recipeCardClickHandler = useCallback((event, mealId, action) => {
        event.stopPropagation();
        if (!mealId) {
            return;
        }
        if (action === "removeFromFav") {
            setFavouriteRecipes(prevFavRecipes => prevFavRecipes.filter((favRecipe) => favRecipe.idMeal !== mealId));
            return;
        }

        let recipe = recipes.find((recipe) => recipe.idMeal === mealId);
        if (recipe === undefined) {
            recipe = favouriteRecipes.find((recipe) => recipe.idMeal === mealId);
            if (recipe === undefined) {
                return;
            }
        }

        if (action === "showModal") {
            setShowRecipeModal(true);
            setSelectedRecipe(recipe);
            return;
        } 
        
        if (action === "addToFav") {
            setFavouriteRecipes(prevFavRecipes => [...prevFavRecipes, recipe]);
        }
    }, [recipes]);

    return (
        <div className="page_content">
            <Favourites 
                favouriteRecipes={favouriteRecipes}
                recipeCardClickHandler={recipeCardClickHandler}
            />

            <Search loadRecipes={loadRecipes} />
            
            { isLoaded ? (
                <Recipes 
                    recipes={recipes} 
                    favouriteRecipes={favouriteRecipes} 
                    recipeCardClickHandler={recipeCardClickHandler}
                />)
            : <center style={{marginTop: "24px"}}><h2>Loading...</h2></center> }

            {showRecipeModal && (
                <Modal 
                    selectedRecipe={selectedRecipe}
                    setShowRecipeModal={setShowRecipeModal}
                />)}
        </div>
    );
}

export default Content;