import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const FirstPlant = props => {
    return(
        <div>
            <h2>Add Your First Plant!</h2>

            <div>
                <button>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <FontAwesomeIcon icon={faLeaf} size="9x" />
            </div>
        </div>
    );
}

export default FirstPlant;