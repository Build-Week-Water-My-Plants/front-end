//Bri
//is this the one we wanted as the modal?
import React from "react";

const Plant = props => {
  return (
    <section>
      <h2>Nickname</h2>
      <h4>Species of Plant</h4>

      <div class="day">
        <h4>Monday</h4>
        <div class="time">10:00 am</div>
      </div>
      <div class="day">
        <h4>Tuesday</h4>
        <div class="time">10:00 am</div>
      </div>
      <div class="day">
        <h4>Wednesday</h4>
        <div class="time">10:00 am</div>
      </div>
      <div class="day">
        <h4>Thursday</h4>
        <div class="time">10:00 am</div>
      </div>
      <div class="day">
        <h4>Friday</h4>
        <div class="time">10:00 am</div>
      </div>
      <div class="day">
        <h4>Saturday</h4>
        <div class="time">10:00 am</div>
      </div>
      <div class="day">
        <h4>Sunday</h4>
        <div class="time">10:00 am</div>
      </div>

      <button>Edit plant</button>
      <button>Delete plant</button>
    </section>
  );
};

export default Plant;
