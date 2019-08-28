//Kate
import React, {useState} from "react";

const PlantForm = props => {
  const [plant, setPlant] = useState({species: "",
  name: "",
  time: "28-08-2019 9:00:00",
  location: ""})

  const plantChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPlant({...plant, [name]: value})
  }

  return (
    <section>
      <h2>Add Plant</h2>
      <form>
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
            value={plant.nickname}
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

export default PlantForm;
