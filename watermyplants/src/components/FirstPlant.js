import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

import "../sass/FirstPlant.scss";
const FirstPlant = props => {
  return (
    <>
      <Nav />
      <div className="first-plant">
        <h2>Add Your First Plant!</h2>
        <div className="link-images">
          <Link to="/addplant">
            <img
              src="images/bigAdd.svg"
              alt="Big Add icon from Font Awesome."
              className="bigAdd"
            />
          </Link>
          <Link to="/addplant">
            <img
              src="images/bigLeaf.svg"
              alt="Large Leaf icon from Font Awesome."
              className="bigLeaf"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FirstPlant;
