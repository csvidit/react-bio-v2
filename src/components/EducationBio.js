import EducationBioIcon from "./EducationBioIcon";
import EducationBioItem from "./EducationBioItem";

const EducationBio = () => {
    return (<div id="intro" class="flex flex-row justify-between ml-5 mr-5 mt-2 mb-2 border-2 rounded border-slate-600 p-3">
        <EducationBioIcon></EducationBioIcon>
        <div id="ed-text" class="self-center flex flex-col">
            <EducationBioItem image="vidit" content="DePauw University 2023"></EducationBioItem>
            <EducationBioItem image="vidit" content="New College (visiting)"></EducationBioItem>
        </div>
    </div>);
}

export default EducationBio;