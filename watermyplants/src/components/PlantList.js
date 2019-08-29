//Kate
import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard.js";
import Nav from "./Nav";
import { connect } from "react-redux";
import {plantsAction} from '../actions';

// prop.array
const PlantList = props => {
  console.log("Props array: ", props.array);
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    
  },[])
  return (
    <>
      <Nav />
      <section>
        <div className="plant-summary-component">
          {/* {plantList.map(plants => {
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
          })} */}
        </div>
        <img src="" alt="Add more plants" />
      </section>
    </>
  );
};

export default connect(null, {plantsAction})(PlantList);
