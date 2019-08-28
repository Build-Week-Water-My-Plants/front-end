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
import UpdatePlant from "./components/UpdatePlant";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/signup" render={props => <SignUp {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />

  <Route path="/plantList" render={props => <PlantList {...props} array={PlantsDATA}/> } />
      
      <Route path="/firstPlant" render={props => <FirstPlant {...props}/>} />
      <Route path="/profile" render={props => <ProfileSettings {...props}/>} />
      <Route path="/addplant" render={props => <PlantForm {...props} />} />
      <Route path="/updateplant" render={props => <UpdatePlant {...props} />} />
      <PrivateRoute path="/plantList" render={props => <PlantList {...props}/>} />
      <PrivateRoute path="/firstPlant" render={props => <FirstPlant {...props}/>} />
      <PrivateRoute path="/profile" render={props => <ProfileSettings {...props}/>} />
      <PrivateRoute path="/addplant" render={props => <PlantForm {...props} />} />

      {/* this page shouldn't be functional */}
      <PrivateRoute path="/recoverPassword" render={props => <RecoverPassword {...props}/>} />

      {/* {
        (PlantsDATA !== null) ? ( <PlantList array={PlantsDATA} />) : false
      } */}
       {/* <PlantList array={PlantsDATA} /> */}
      {/* Sends an array of objects as dunny data */}
      <PrivateRoute path="/plant" component={PlantList} />
      {/* <PlantList array={PlantsDATA} /> */}
    </div>
  );
}

export default App;
