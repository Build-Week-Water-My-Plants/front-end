//Kate
import React, { useState } from "react";
import Nav from "./Nav";
import "../sass/form.scss";

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

  const submitForm = e => {
    e.preventDefault();
    console.log(plant);
    props.addNewPlant(...plant);
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
      <section class="form-section">
        <h2>Add Plant</h2>
        <form onSubmit={submitForm}>
          <div>
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
              placeholder="Kitchen"
              onChange={plantChangeHandler}
              value={plant.value}
            />
            <button type="submit">Save plant</button>
          </div>
          <img
            src="images/addplant.png"
            alt="Illustration of abstract women and plants"
          />
        </form>
      </section>
    </>
  );
};

export default PlantForm;
