import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./components/Nav";
import PlantForm from "./components/PlantForm";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import ProfileSettings from "./components/ProfileSettings.js";
import FirstPlant from "./components/FirstPlant.js";
import RecoverPassword from "./components/RecoverPassword.js";
import PlantsDATA from "./components/PlantsDATA";
import PlantList from "./components/PlantList";
import UpdatePlant from "./components/UpdatePlant";

function App() {
  return (
    <div className="App">
      <Route path="/signup" component={props => <SignUp {...props} />} />
      <Route exact path="/" component={props => <SignUp {...props} />} />
      <Route path="/login" component={props => <Login {...props} />} />

      <PrivateRoute
        path="/plantList"
        component={props => <PlantList {...props} array={PlantsDATA} />}
      />
      <PrivateRoute
        path="/plantform"
        component={props => <PlantForm {...props} />}
      />
      <PrivateRoute path="/firstPlant" component={FirstPlant} />
      <PrivateRoute path="/profile" component={ProfileSettings} />
      <PrivateRoute path="/addplant" component={PlantForm} />

      {/* this page shouldn't be functional */}
      <Route path="/recoverPassword" component={RecoverPassword} />

      {/* Sends an array of objects as dunny data */}
      <PrivateRoute path="/plant" component={PlantList} />
      {/* <PlantList array={PlantsDATA} /> */}
    </div>
  );
}

export default App;
