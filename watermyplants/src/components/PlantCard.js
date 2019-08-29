//create card of plant inside plant list of the design file
//will map over array in plant list and push to card.
import React from "react";

const PlantCard = props => {
    return(
        <div key={props.id}>
            <h3>{props.name}</h3>
            <h5>{props.species}</h5>
            <img src="images/calander.svg" alt="Calendar icon" />
        </div>
    );
}

export default PlantCard;