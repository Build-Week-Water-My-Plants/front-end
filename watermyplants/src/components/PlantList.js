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
        {props.array.map(plants => {
          return(
            console.log(plants),
            <PlantCard 
              key={plants.id}
              id={plants.id}
              name={plants.name}
              species={plants.species}
            />
          );
        })}
      </div>
      <img src="" alt="Add more plants" />
    </section>
  );
};

export default PlantList;
