import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><img data-visualcompletion="media-vc-image" alt="No photo description available." class="ji94ytn4 d2edcug0 r9f5tntg r0294ipz" referrerpolicy="origin-when-cross-origin" src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.18169-9/18519720_498840877114607_4619815614151521331_n.png?_nc_cat=104&amp;_nc_map=control&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_ohc=JAQfvp1Eb-UAX-2dumg&amp;_nc_ht=scontent-lhr8-2.xx&amp;oh=00_AT9Cyv-qlyA0ZDgJEFkgP-6hsnTtreMDb_rzSyWHurlvJw&amp;oe=628A15BA"width="50" height="50"/>DolceMenteBaking</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="baking.png" alt="baking image" width="460" height="330"/>
        <nav className="App-table">
            <div>Home</div>
            <div>Recipes</div>
            <div>Photoes</div>
            <div>About me</div>
            <div>Contacts</div>
        </nav>
        <p>
          Latest Recipes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </header>
      <div className="Facebook-Social-Logo">
        <a href="https://www.facebook.com/dolcementebaking/">
        <img class="lazy" src="https://mpng.subpng.com/20180420/dye/kisspng-social-media-computer-icons-facebook-media-icon-5ad99bd52a6ec2.1244941515242106451738.jpg" data-original="https://mpng.subpng.com/20180420/dye/kisspng-social-media-computer-icons-facebook-media-icon-5ad99bd52a6ec2.1244941515242106451738.jpg" title="Social Media Logo" alt="Social Media Logo - transparent png image" width="150" height="100"/>
        </a></div>
        <div className="Instagram-Social-logo">
        <a href="https://www.instagram.com/dolcementebaking/">
          <img alt="File:Instagram logo 2016.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622" decoding="async" width="100" height="100" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622 2x" data-file-width="100" data-file-height="10"/>
        </a> </div>
      <footer>
        <p>Author: Francesca Macchiarini</p>
      <p><a href="mailto:dolcementebaking@gmail.com">dolcementebaking@gmail.com</a></p></footer>
    </div>
  );
}

export default App;
