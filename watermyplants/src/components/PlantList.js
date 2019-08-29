//Kate
import React from "react";
import PlantCard from "./PlantCard.js";
import { connect } from "react-redux";
import Nav from "./Nav";

// prop.array
const PlantList = props => {
  console.log("Props array: ", props.array);

  return (
    <>
      <Nav />
      <section>
        <div className="plant-summary-component">
          {props.array.map(plants => {
            return (
              console.log(plants),
              (
                <PlantCard
                  key={plants.id}
                  id={plants.id}
                  name={plants.name}
                  species={plants.species}
                />
              )
            );
          })}
        </div>
        <img src="" alt="Add more plants" />
      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(PlantList);
