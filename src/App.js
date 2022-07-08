import './App.css';
import Header from './Header';
import Footer from './Footer.js';
import {Routes, Route} from 'react-router-dom';
import Recipe from './Recipes.js';
import Home from './Home.js';


function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/" element={<Home/>}/>
          </Routes>
        <Footer  />
    </div>
  );
}

export default App;
