//Kate
import React, { useState } from "react";
import Nav from "./Nav";
import "../sass/form.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addPlant } from "../actions";

const PlantForm = props => {
  const [plant, setPlant] = useState({
    species: "",
    name: "",
    time: "",
    location: ""
  });

  const plantChangeHandler = e => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setPlant({ ...plant, [name]: value });
  };

  const submitForm = e=> {
    e.preventDefault();
    console.log(plant);
    props.addPlant({species: plant.species, name: plant.name, time: plant.time, location: plant.location, user:{
      userid:4, username: 'admin'
    }});
    setPlant({
      species: "",
      name: "",
      time: "",
      location: ""
    });

  };

  return (
    <>
      <Nav />
      <section className="form-section">
        <div className="form-outer">
          <h2>Add Plant</h2>
          <form className="plant-form" onSubmit={submitForm}>
            <input
              type="text"
              name="species"
              onChange={plantChangeHandler}
              value={plant.species}
              placeholder="Species of the plant"
            />
            <input
              type="text"
              name="nickname"
              onChange={plantChangeHandler}
              value={plant.name}
              placeholder="Nickname of the plant"
            />
            <input
              type="text"
              name="time"
              placeholder="28-08-2019 9:00:00"
              onChange={plantChangeHandler}
              value={plant.time}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={plantChangeHandler}
              value={plant.value}
            />
            <button type="submit">Save plant</button>
            <Link to="/plantlist" className="go-back-addplant">
              <img src="images/arrow.svg" />
              <h5>Go back</h5>
            </Link>
          </form>
        </div>
        <img
          src="images/addplant.png"
          alt="Illustration of abstract women and plants"
        />
      </section>
    </>
  );
};

export default connect(
  null,
  { addPlant }
)(PlantForm);
