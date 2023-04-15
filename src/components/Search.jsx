import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
    return (
        <div className="search">
            <form className="search_form">
                <input className="search_field" type="text" placeholder="Search your favourite dish..." />
                <button className="btn search_submit"><AiOutlineSearch /></button>
            </form>
        </div>
    )
}

export default Search;