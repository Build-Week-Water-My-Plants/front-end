//Kate
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard.js";
import { connect } from "react-redux";
import Nav from "./Nav";
import { plantsAction } from "../actions";

const PlantList = (props) => {
  const [plantList, setPlantList] = useState([...props.user.plants]);
  console.log(props.user.plants, 'plantlist' , '1');
 useEffect(() => {
  // setPlantList(props.user.plants)
 },[])
  return (
    <>
      <Nav />
      <section>
        <div className="plant-summary-component">
          {plantList.map(plants => {
            return (
              console.log(plants),
              (
                <div>
                  <h1>hi</h1>
                <PlantCard
                  key={plants.id}
                  id={plants.id}
                  name={plants.name}
                  species={plants.species}
                />
                </div>
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
  console.log("state", state, '2');
  return {
    user: state.user,
  };
};
export default connect(
  mapStateToProps,
  { plantsAction }
)(PlantList);
