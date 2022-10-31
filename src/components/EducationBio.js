import React, {useState} from "react"
import EducationBioIcon from "./EducationBioIcon";
import EducationBioItem from "./EducationBioItem";

const EducationBio = () => {

    useState();
    
    const clickHandler = () =>
    {
        
    }

    return (<div id="intro" onClick={clickHandler} className="flex flex-row justify-between ml-5 mr-5 mt-2 mb-2 border-2 rounded border-slate-600 p-3 hover:border-purple-500">
        <EducationBioIcon></EducationBioIcon>
        <div id="ed-text" className="self-center flex flex-col">
            <EducationBioItem image="depauw" content="DePauw University 2023"></EducationBioItem>
            <EducationBioItem image="newcollege" content="New College (visiting)"></EducationBioItem>
        </div>
    </div>);
}

export default EducationBio;