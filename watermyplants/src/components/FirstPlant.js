import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const FirstPlant = props => {
  return (
    <div>
      <Nav />
      <h2>Add Your First Plant!</h2>
      <Link to="/addplant">
        <img src="images/bigAdd.svg" alt="Big Add icon from Font Awesome." className="bigAdd"/>
      </Link>
      <img src="images/bigLeaf.svg" alt="Large Leaf icon from Font Awesome." className="bigLeaf" />
    </div>
  );
};

export default FirstPlant;
