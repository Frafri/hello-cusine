import './Home.css';
import './App.css';
import Header from './Header';
import Footer from './Footer.js';
import {Routes, Route} from 'react-router-dom';
import Recipe from './Recipe.js';

function Home() {
    return (
      <div className="Home">
          <Header />
            <Routes>
            <Route path="/" element={<Recipe/>}/>
            </Routes>
            <div className="Ads">
            <nav>
            <a> Ad1</a>
            <a> Ad2</a>
            <a> Ad3</a>
            <a> Ad4</a>
        </nav>
            </div>
          <Footer  />
      </div>
    );
  }

export default Home;
