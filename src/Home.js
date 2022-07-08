import './Home.css';
import RecipeItem from './RecipeItem';

function Home() {
    return (
      <div className="Home">
            <RecipeItem className="RecipeItem" />
            <div className="Ads">
            <a> Ad1</a>
            <a> Ad2</a>
            <a> Ad3</a>
            <a> Ad4</a>
            </div>
      </div>
    );
  }

export default Home;
