const ListLinkType = (props) => {
    
    if(props.type === "ghR")
    {
        return (<p className="font-mono text-blue-400 text-sm font-medium self-center ">GitHub Repository</p>);
    }
    else if(props.type === "litSS")
    {
        return (<p className="font-mono text-emerald-500 text-sm font-medium self-center ">Literature Blog Short Story</p>);
    }
    else if(props.type === "litP")
    {
        return (<p className="font-mono text-emerald-500 text-sm font-medium self-center ">Literature Blog Poem</p>);
    }
    else if(props.type === "acad")
    {
        return (<p className="font-mono text-red-500 text-sm font-medium self-center ">Academic Paper</p>);
    }
}

export default ListLinkType;