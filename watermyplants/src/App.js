import React from "react";
import "./App.css";
import Nav from "./components/Nav";

// import Login from './components/Login.js';
// import SignUp from './components/SignUp'
import ProfileSettings from "./components/ProfileSettings.js";

function App() {
  return (
    <div className="App">
      <ProfileSettings />
      <Nav />
    </div>
  );
}

export default App;
