import React from "react";
import Garden from "./components/Garden/Garden";
import PlantList from "./components/PlantList/PlantList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your garden!</h1>
      </header>
      <Garden />
      <PlantList />
    </div>
  );
}

export default App;
