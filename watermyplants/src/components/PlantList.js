//Kate
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantCard from "./PlantCard.js";
import { connect } from "react-redux";
import Nav from "./Nav";
import { plantsAction } from "../actions";

const PlantList = props => {
  const [plantList, setPlantList] = useState([...props.plants.data]);
  console.log(plantList);
  useEffect(() => {}, []);
  return (
    <>
      <Nav />
      <section>
        <div className="plant-summary-component">
          {plantList.map(plants => {
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
        <Link to="/addPlant" >
          <img src="images/smallAdd.svg" alt="Add more plants, small add icon from Font Awesome" />
        </Link>
        <img src="images/smallLeaf.svg" alt="Small leaf icon from Font Awesome" />
      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log("state", state.user);
  return {
    user: state.user,
    plants: state.plants
  };
};
export default connect(
  mapStateToProps,
  { plantsAction }
)(PlantList);
