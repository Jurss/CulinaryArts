import Main from "./component/Main";
import Navigation from "./component/Navigation";
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RandomRecipe from "./component/RandomRecipe";
import Nutriments from "./component/ByNutriments";
import ErrorPage from "./ErrorPage";
import Search from "./component/Search";
import ByIngredient from "./component/ByIngredient";
import SearchQuery from "./component/SearchQuery";
import RecipeDetails from "./component/RecipeDetails";

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
          <Route path='/byingredients' component={ByIngredient} />
          <Route path='/nutriments' exact component={Nutriments} />
          <Route path='/' component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
