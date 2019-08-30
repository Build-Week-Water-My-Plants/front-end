//Kate
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard.js";
import { connect } from "react-redux";
import Nav from "./Nav";
import { plantsAction, deletePlant } from "../actions";
import { Link } from 'react-router-dom';

const PlantList = props => {
  const [plantList, setPlantList] = useState([]);
  console.log(props.user.plants, "plantlist", "1");
  useEffect(() => {
    setPlantList([...props.plants.data])
  }, [props]);
  return (
    <>
      <Nav />
      <section>
        <div className="plant-summary-component">
          {plantList.map(plants => {
            return (
              <PlantCard
                key={plants.plantid}
                id={plants.plantid}
                name={plants.name}
                species={plants.species}
                delete={props.deletePlant}
              />
            );
          })}
        </div>
        <Link to="/addPlant">
          <img
            src="images/smallAdd.svg"
            alt="Add more plants, small add icon from Font Awesome"
          />
          <img
          src="images/smallLeaf.svg"
          alt="Small leaf icon from Font Awesome"
        />
        </Link>

      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log("state", state, "2");
  return {
    ...state,
    user: state.user,
    plants: state.plants
  };
};
export default connect(
  mapStateToProps,
  { plantsAction ,deletePlant }
)(PlantList);
