import Main from "./component/Main";
import Navigation from "./component/Navigation";
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RandomRecipe from "./component/RandomRecipe";
import Nutriments from "./component/ByNutriments";
import ErrorPage from "./ErrorPage";
import Search from "./component/Search";
import ByIngredients from "./component/ByIngredient";
import RecipeDetails from "./component/RecipeDetails";
import ByIngredientsSearch from "./component/ByIngredientsSearch";

function App() {
  return (
    <div className="appContainer">
      <Router forceRefresh={true}>
        <Navigation/>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/search/:query' component={Search} />
          <Route path='/RecipeDetails/:recipe' component={RecipeDetails} />

          <Route path='/randomrecipe' exact component={RandomRecipe} />

          <Route path='/byIngredients' exact component={ByIngredients} />
          <Route path='/ByIngredientsSearch/:search' component={ByIngredientsSearch} />
          <Route path='/ByIngredientsResult/:recipe' component={RecipeDetails} />
          

          <Route path='/nutriments' exact component={Nutriments} />
          <Route path='/' component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
