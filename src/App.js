import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Favourites from './components/Favourites';
import Search from './components/Search';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Search />
      <Favourites />
      <Recipes />
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
