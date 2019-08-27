//Kate
import React from "react";

// prop.arry
const PlantList = props => {
  return (
    <section>
      <div class="plant-summary-component">
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
