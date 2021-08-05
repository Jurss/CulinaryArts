import Main from "./component/Main";
import Navigation from "./component/Navigation";
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RandomRecipe from "./component/RandomRecipe";
import Ingredients from "./component/ByIngredients";
import Nutriments from "./component/ByNutriments";
import ErrorPage from "./ErrorPage";
import Search from "./component/Search";

function App() {
  return (
    <div className="appContainer">
      <Router >
        <Navigation />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/randomrecipe' exact component={RandomRecipe} />
          <Route path='/ingredients' exact component={Ingredients} />
          <Route path='/nutriments' exact component={Nutriments} />
          <Route path='/' component={ErrorPage} />
          <Route path='/search' exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
