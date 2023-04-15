import Search from "./Search";
import Recipes from "./Recipes";
import Favourites from "./Favourites";
import Modal from './Modal';

const Content = () => {
    return (
        <div id="content">
            <Search />
            <Favourites />
            <Recipes />
            <Modal />
        </div>
    );
}

export default Content;