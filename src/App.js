import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
        <Header />
        <a
          className="App-link"
          href="https://dolcementebaking.wixsite.com/dolcemente/food-from-around-the-world"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recipes
        </a> <div className="Roses-Image"> <img src="roses.png" alt="roses image" width="300" height="300"/>
        <div className="Apple-Roses"><h2> Apple Roses </h2>
        <p> These are super easy, but they are super nice to taste and to look! Why not trying? </p>
        <u> Ingredients</u>
        <li> 2 apples </li>
        <li>1 pack of puff pastry</li>
        <li>2 tbsp sugar</li>
        <li>knob of butter</li>
        <li>some water</li>
        <li>2 tsp cinnamon</li>
        <li>1 lemon juice</li>
        </div></div>
      <div className="Facebook-Social-Logo">
        <a href="https://www.facebook.com/dolcementebaking/">
        <img class="lazy" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" data-original="https://mpng.subpng.com/20180420/dye/kisspng-social-media-computer-icons-facebook-media-icon-5ad99bd52a6ec2.1244941515242106451738.jpg" title="Social Media Logo" alt="Social Media Logo - transparent png image" width="150" height="100"/>
        </a>
        <a href="https://www.instagram.com/dolcementebaking/">
          <img alt="File:Instagram logo 2016.svg" src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" decoding="async" width="100" height="100" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622 2x" data-file-width="100" data-file-height="10"/>
        </a> </div>
      <footer>
        <p>Author: Francesca Macchiarini</p>
      <p><a href="mailto:dolcementebaking@gmail.com">dolcementebaking@gmail.com</a></p></footer>
    </div>
  );
}

export default App;
