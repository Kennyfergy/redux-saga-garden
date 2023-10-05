import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Garden from "./components/Garden/Garden";
import PlantDetails from "./components/PlantDetails/PlantDetails";
import PlantList from "./components/PlantList/PlantList";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Typography variant="h6" className="title">
              Welcome to the garden!
            </Typography>
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="active-link"
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              to="/plants"
              className="nav-link"
              activeClassName="active-link"
            >
              <Button color="inherit">Plants</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
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
