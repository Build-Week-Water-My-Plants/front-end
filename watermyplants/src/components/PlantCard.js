//create card of plant inside plant list of the design file
//will map over array in plant list and push to card.
import React, { useState} from "react";
import { deletePlant } from '../actions/actions'
import { connect } from 'react-redux'

const PlantCard = props => {
    const [plant, setPlant] = useState({species: "",
    name: "",
    time: "",
    location: ""})

    const submitHandler = (e, id) => {
        e.preventDefault()
        props.deletePlant(id)
    }
    return(
        <div  className='plantcard'key={props.id}>
            <h3>{props.name}</h3>
            <h5>{props.species}</h5>
            <img src="images/calander.svg" alt="Calendar icon" />
            <button onClick={(e) => submitHandler(e)}>Delete Plant</button>
        </div>
    );
}

export default connect(null, {deletePlant})(PlantCard);