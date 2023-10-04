import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Garden from "./components/Garden/Garden";
import PlantDetails from "./components/PlantDetails/PlantDetails";
import PlantList from "./components/PlantList/PlantList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to your garden!</h1>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <br />
              <Link to="/plants">Plants</Link>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact>
            <Garden />
          </Route>
          <Route path="/plants" exact>
            <PlantList />
          </Route>
          <Route path="/plant/:id">
            <PlantDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
