const EducationBioItem = (props) => {
    return (<div class="flex flex-row space-x-1">
        <div class="select-none ed-img self-center"><img class="select-none ed-img" src={props.image} /></div>
        <div><h3 class="text-white">{props.content}</h3></div>
    </div>);
}

export default EducationBioItem;