//Kate
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard.js";
import { connect } from "react-redux";
import Nav from "./Nav";
import { plantsAction } from "../actions";

const PlantList = props => {
  const [plantList, setPlantList] = useState([...props.plants.data]);
  console.log(props.user.plants, "plantlist", "1");
  useEffect(() => {
    // setPlantList(props.user.plants)
  }, []);
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
              />
            );
          })}
          <Link to="/addplant">
            {" "}
            <button>Add Plant</button>
          </Link>
        </div>
<<<<<<< HEAD
        <Link to="/addPlant" >
          <img src="images/smallAdd.svg" alt="Add more plants, small add icon from Font Awesome" />
          <img src="images/smallLeaf.svg" alt="Small leaf icon from Font Awesome" />
        </Link>
=======
        <Link to="/addPlant">
          <img
            src="images/smallAdd.svg"
            alt="Add more plants, small add icon from Font Awesome"
          />
        </Link>
        <img
          src="images/smallLeaf.svg"
          alt="Small leaf icon from Font Awesome"
        />
>>>>>>> 5069431257aa2e320506a33078eece49c12defd7
      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log("state", state, "2");
  return {
    user: state.user,
    plants: state.plants
  };
};
export default connect(
  mapStateToProps,
  { plantsAction }
)(PlantList);
