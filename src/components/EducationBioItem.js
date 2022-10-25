const EducationBioItem = (props) => {
    return (<div className="flex flex-row space-x-1">
        <div className="select-none ed-img self-center"><img className="select-none ed-img" src={props.image} alt="" /></div>
        <div><h3 className="text-white">{props.content}</h3></div>
    </div>);
}

export default EducationBioItem;