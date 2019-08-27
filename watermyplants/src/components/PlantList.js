//Kate
import React, { useState } from "react";
import PlantCard from "./PlantCard.js";

// prop.arry
const PlantList = props => {
  // const [plant, setPlant] = useState([]);
  console.log(props.array);

  return (
    <section>
      <div className="plant-summary-component">
        {/* Some map function goes here */}

        {/* This is a component, call the component for EACH array object inside `props.array` */}
        <h3>Nickname</h3>
        <h5>Species</h5>
        <img src="" alt="Calendar picture" />
        {/* ****************************************888 */}
      </div>
      <img src="" alt="Add more plants" />
    </section>
  );
};

export default PlantList;
