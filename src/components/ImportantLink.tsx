import React, {useState} from "react";
import CSPIcon from "./CSPIcon";

const ImportantLink = (props) =>
{

    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="flex flex-row justify-center grow">
        <div className="flex flex-col space-y-3 bg-slate-900 p-3 rounded-lg border border-slate-900 hover:border-red-500 grow w-1/2 justify-center">
            {props.image === "csp" && <CSPIcon></CSPIcon>}
            <p className="text-md font-bold text-white">{props.text}</p>
        </div>
    </a>
    );
}

export default ImportantLink;