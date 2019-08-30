//create card of plant inside plant list of the design file
//will map over array in plant list and push to card.
import React, { useState} from "react";


const PlantCard = props => {
    const [plant, setPlant] = useState({species: "",
    name: "",
    time: "",
    location: ""})

    const submitHandler = id => {
        props.delete(props.id, props.history)
        //setPlant(plant);
    }
    return(
        <div  className='plantcard'key={props.id}>
            <h3>{props.name}</h3>
            <h5>{props.species}</h5>
            <img src="images/calander.svg" alt="Calendar icon" />
            <button onClick={() => submitHandler()}>Delete Plant</button>
        </div>
    );
}

export default PlantCard;