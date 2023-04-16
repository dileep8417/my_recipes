import {GrClose} from 'react-icons/gr';
import {BiLinkExternal} from 'react-icons/bi';

const Modal = ({ selectedRecipe, setShowRecipeModal }) => {
    const { strMealThumb, strMeal, strInstructions, strSource, strYoutube } = selectedRecipe;

    const closeModalHandler = () => {
        setShowRecipeModal(false);
    }
    return (
        <div className="modal_wrapper show">
            <div className="modal_overlay" onClick={closeModalHandler}></div>
            <div className="modal">
                <div className="header">
                    <GrClose className="close_modal icon" onClick={closeModalHandler} />
                    <h2><center>{strMeal}</center></h2>
                </div>
                <div className="body">
                    <img src={strMealThumb} alt="" />
                    <div className="content">
                        <p><b>Instructions:</b></p>
                        {strInstructions}
                    </div>
                </div>

                <div className="footer">
                    {strSource ? <a href={strSource} target="_blank" rel="noreferrer"><BiLinkExternal /> Source</a> : ''}
                    {strYoutube ? <a href={strYoutube} target="_blank" rel="noreferrer"><BiLinkExternal /> Youtube</a> : ''}
                    <button className="close_modal btn" onClick={closeModalHandler}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;