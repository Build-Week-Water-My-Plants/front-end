import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import PlantForm from "./components/PlantForm";

import Login from './components/Login.js';
import SignUp from './components/SignUp'
import ProfileSettings from "./components/ProfileSettings.js";
import FirstPlant from "./components/FirstPlant.js";
import RecoverPassword from "./components/RecoverPassword.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <RecoverPassword />
      <SignUp />
      <ProfileSettings />
      <FirstPlant />
      <PlantForm />
    </div>
  );
}

export default App;
