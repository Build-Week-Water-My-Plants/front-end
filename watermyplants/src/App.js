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
      <Route exact path="/signup" component={props => <SignUp {...props} />} />
      <Route path="/login" component={props => <Login {...props} />} />

      <PrivateRoute
        path="/plantList"
        component={PlantList}
      />
      <PrivateRoute
        path="/firstPlant"
        component={props => <FirstPlant {...props} />}
      />
      <PrivateRoute
        path="/profile"
        component={props => <ProfileSettings {...props} />}
      />
      <PrivateRoute
        path="/addplant"
        component={props => <PlantForm {...props} />}
      />

      {/* this page shouldn't be functional */}
      <Route
        path="/recoverPassword"
        component={props => <RecoverPassword {...props} />}
      />

      {/* Sends an array of objects as dunny data */}
      <PrivateRoute path="/plant" component={PlantList} />
      {/* <PlantList array={PlantsDATA} /> */}
    </div>
  );
}

export default App;
