import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import { PlantContext } from "./contexts/PlantContexts";

import { plantsReducer } from "./reducers/reducer";

import Nav from "./components/Nav";
import PlantForm from "./components/PlantForm";

import Login from "./components/Login.js";
import SignUp from "./components/SignUp";
import ProfileSettings from "./components/ProfileSettings.js";
import FirstPlant from "./components/FirstPlant.js";
import RecoverPassword from "./components/RecoverPassword.js";
import PlantsDATA from "./components/PlantsDATA";
import PlantList from "./components/PlantList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/login" component={Login} />
      <Route path="/SignUp" render={props => <SignUp {...props} />} />
      {/* <Login /> */}
      {/* <RecoverPassword /> */}
      {/* <ProfileSettings /> */}
      {/* <FirstPlant /> */}
      {/* <PlantForm /> */}
      {/* <SignUp /> */}
      {/* Sends an array of objects as dunny data */}
      <Route path="/plant" component={PlantList} />
      {/* <PlantList array={PlantsDATA} /> */}
    </div>
  );
}

export default App;
