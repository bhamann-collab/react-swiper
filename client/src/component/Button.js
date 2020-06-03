import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome)

const Button = () => {
    return (
        <div className="button">
            <FontAwesomeIcon icon={faHome} />
        </div>
    )
}

export default Button
