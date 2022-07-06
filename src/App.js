import './App.css';
import Header from './Header';
import Footer from './Footer.js';
import {Routes, Route} from 'react-router-dom';
import Recipe from './Recipe.js';
import Home from './Home.js';


function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
          <Route path="/" element={<Recipe/>}/>
          </Routes>
        <Footer  />
    </div>
  );
}

export default App;
