import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./components/Nav";
import PlantForm from "./components/PlantForm";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp";
import ProfileSettings from "./components/ProfileSettings.js";
import FirstPlant from "./components/FirstPlant.js";
import RecoverPassword from "./components/RecoverPassword.js";
import PlantsDATA from "./components/PlantsDATA";
import PlantList from "./components/PlantList";
import UpdatePlant from "./components/UpdatePlant";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />

      <PrivateRoute
        path="/plantList"
        component={PlantList}
      />
      <PrivateRoute
        path="/firstPlant"
        component={FirstPlant}
      />
      <PrivateRoute
        path="/profile"
        component={ProfileSettings}
      />
      <PrivateRoute
        path="/addplant"
        component={PlantForm}
      />

      {/* this page shouldn't be functional */}
      <Route
        path="/recoverPassword"
        component={RecoverPassword}
      />

      {/* Sends an array of objects as dunny data */}
      <PrivateRoute path="/plant" component={PlantList} />
      {/* <PlantList array={PlantsDATA} /> */}
    </div>
  );
}

export default App;
