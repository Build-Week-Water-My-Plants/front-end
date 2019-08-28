//Kate
import React from "react";
import PlantCard from "./PlantCard.js";

// prop.array
const PlantList = props => {
  console.log(props.array);

  return (
    <section>
      <div className="plant-summary-component">
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
