import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import logger from "redux-logger";
//import saga middleware
import createSagaMiddleware from "redux-saga";

import rootReducer from "./redux/reducers/_root.reducer";
import rootSaga from "./redux/sagas/_root.saga";

//create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: "Rose" },
  { id: 2, name: "Tulip" },
  { id: 3, name: "Oak" },
];

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case "ADD_PLANT":
      return [...state, action.payload];
    default:
      return state;
  }
};

const storeInstance = createStore(
  rootReducer,

  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
