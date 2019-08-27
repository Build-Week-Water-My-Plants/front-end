import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { plantsReducer } from "./reducers/reducer";
import thunk from "react-thunk";
=======
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {plantsReducer} from './reducers/reducer';
import thunk from 'redux-thunk';
>>>>>>> 7142830eddf8bf6b304d42201492726c4b424569

const store = createStore(plantsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <Router>
      <App />
    </Router>
=======
  <Router>
    <App />
  </Router>
>>>>>>> 7142830eddf8bf6b304d42201492726c4b424569
  </Provider>,
  document.getElementById("root")
);
