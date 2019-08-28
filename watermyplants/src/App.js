import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

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

      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/SignUp" render={props => <SignUp {...props} />} />
      <PrivateRoute path="/plantList" render={props => <PlantList {...props}/>} />
      <PrivateRoute path="/firstPlant" render={props => <FirstPlant {...props}/>} />
      <PrivateRoute path="/profile" render={props => <ProfileSettings {...props}/>} />

      {/* this page shouldn't be functional */}
      <PrivateRoute path="/recoverPassword" render={props => <RecoverPassword {...props}/>} />

      {/* Sends an array of objects as dunny data */}
      <Route path="/plant" component={PlantList} />
      {/* <PlantList array={PlantsDATA} /> */}
    </div>
  );
}

export default App;
