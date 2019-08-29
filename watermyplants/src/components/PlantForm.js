//Kate
import React, {useState} from "react";
import { connect } from 'react-redux';
import { addPlant } from '../actions';

const PlantForm = props => {
  const [plant, setPlant] = useState({species: "",
  name: "",
  time: "",
  location: ""})

  const plantChangeHandler = e => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setPlant({...plant, [name]: value})
  }

  const submitForm = e => {
    e.preventDefault();
    console.log(plant);
    props.addPlant(plant);
    setPlant({
      species: "",
      name: "",
      time: "",
      location: "",
    });
  };


  return (
    <section>
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
          {/* Days as buttons, perhaps?? */}
          {/* <div class="days-select">
            <img src="" alt="Some calendar pic" />
            <button class="calendar-day">
              <h4>M</h4>
            </button>
            <button class="calendar-day">
              <h4>T</h4>
            </button>
            <button class="calendar-day">
              <h4>W</h4>
            </button>
            <button class="calendar-day">
              <h4>Th</h4>
            </button>
            <button class="calendar-day">
              <h4>F</h4>
            </button>
            <button class="calendar-day">
              <h4>Sat</h4>
            </button>
            <button class="calendar-day">
              <h4>Sun</h4>
            </button>
          </div> */}
          {/* <div class="time-chosen">
            <input type="number" id="hour" name="hour" min="00" />
            <p>:</p>
            <input type="number" id="minute" name="minute" min="00" max="60" />
          </div> */}
          <input 
            type="text" 
            name="time" 
            placeholder="28-08-2019 9:00:00"
            onChange={plantChangeHandler}
            value={plant.time}
             />
          {/* <button class="am">am</button>
          <button class="pm">pm</button>
          <br /> */}
          <input 
            type="text" 
            name="location" 
            placeholder="Kitchen" 
            onChange={plantChangeHandler}
            value={plant.value}
            />
          <button type="submit">Save plant</button>
        </div>
        <img src="" alt="Some img illustration" />
      </form>
    </section>
  );
};

export default connect(null, {addPlant})(PlantForm);
