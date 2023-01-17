import React from "react";
import "./CSPIcon.css"

const CSPIcon = () =>
{
    return(
        <img className="self-center csp-icon" alt="CS Portfolio Logo" src={require("./assets/csp-logo.png")}></img>
    );
}

export default CSPIcon;