//Kate
import React, { useState, useEffect } from "react";
import PlantForm from "./PlantForm";

const UpdatePlant = props => {
  useEffect(e => {
    console.log("This is the effect: ", e)
  }, []);
  return <PlantForm />;
};

export default UpdatePlant;
