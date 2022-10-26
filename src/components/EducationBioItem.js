import "./EducationBioItem.css"
import DePauwIcon from "./DePauwIcon";
import NewCollegeIcon from "./NewCollegeIcon"

const EducationBioItem = (props) => {
    return (<div className="flex flex-row space-x-1">
        <div className="select-none ed-img self-center">{props.image === "depauw" && <DePauwIcon></DePauwIcon>}{props.image === "newcollege"  && <NewCollegeIcon></NewCollegeIcon>}</div>
        <div><h3 className="text-white">{props.content}</h3></div>
    </div>);
}

export default EducationBioItem;