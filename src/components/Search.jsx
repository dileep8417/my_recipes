import {memo, useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import {recipesSearchUrl, recipesUrl} from '../Constants';

const Search = ({ loadRecipes }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const [searchSubmitted, setSearchSumbitted] = useState(false);

    const searchChangeHandler = (event) =>{
        setSearchTerm(event.target.value);
    }

    const [searchTxtToShow, setSearchTxtToShow] = useState('');

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (!searchTerm) {
            return;
        }
        setSearchTxtToShow(searchTerm);
        setSearchSumbitted(true);
        loadRecipes(recipesSearchUrl, searchTerm);
    }

    const clearSearch = () => {
        setSearchSumbitted(false);
        setSearchTerm('');
        loadRecipes(recipesUrl);
    }

    return (
        <div className="search">
            <form className="search_form">
                <input className="search_field" type="text" value={searchTerm} placeholder="Search your favourite dish..." onChange={searchChangeHandler} />
                <button className="btn search_submit" onClick={searchSubmitHandler}><AiOutlineSearch /></button>
            </form>
            {searchSubmitted && (
                <div className="searched_txt">
                    Showing results for <span>{`"${searchTxtToShow}"`}</span>
                    <div className="clear_search" onClick={clearSearch}>Clear Search</div>
                </div>
            )}
        </div>
    )
}

export default memo(Search);