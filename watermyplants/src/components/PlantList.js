//Kate
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard.js";
import { connect } from "react-redux";
import Nav from "./Nav";
import { plantsAction } from "../actions";
import { Link } from 'react-router-dom';

const PlantList = (props) => {
  const [plantList, setPlantList] = useState([...props.plants.data]);
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
              (
               
                <PlantCard
                  key={plants.plantid}
                  id={plants.plantid}
                  name={plants.name}
                  species={plants.species}
                />
          
              )
            );
          })}
         <Link to='/addplant'> <button>Add Plant</button></Link>
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
    plants: state.plants,
  };
};
export default connect(
  mapStateToProps,
  { plantsAction }
)(PlantList);
