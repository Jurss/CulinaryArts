import Main from "./component/Main";
import Navigation from "./component/Navigation";
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RandomRecipe from "./component/RandomRecipe";
import Ingredients from "./component/Ingredients";
import Nutriments from "./component/Nutriments";
import ErrorPage from "./ErrorPage";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
