//Kate
import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard.js";
import Nav from "./Nav";
import { connect } from "react-redux";
import {plantsAction} from '../actions';


const PlantList = props => {

  const [plantList, setPlantList] = useState([...props.plants.data]);
  console.log(plantList)
  useEffect(() => {
    props.plantsAction(props.user.username)
    setPlantList([...props.plants.data])
  },[props.plants.data])
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
        <img src="" alt="Add more plants" />
      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log('state', state.user)
  return {
    user: state.user,
    plants: state.plants,
  }
}
export default connect(mapStateToProps, {plantsAction})(PlantList);
