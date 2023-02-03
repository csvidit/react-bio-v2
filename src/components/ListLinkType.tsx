import React from "react";

const ListLinkType = (props: { type: string; }) => {
    
    if(props.type === "ghR")
    {
        return (<p className="text-blue-400 text-sm font-medium self-center ">GitHub Repository</p>);
    }
    else if(props.type === "litSS")
    {
        return (<p className="text-emerald-500 text-sm font-medium self-center ">Literature Blog Short Story</p>);
    }
    else if(props.type === "litP")
    {
        return (<p className="text-emerald-500 text-sm font-medium self-center ">Literature Blog Poem</p>);
    }
    else if(props.type === "acad")
    {
        return (<p className="text-red-500 text-sm font-medium self-center ">Academic Paper</p>);
    }
    else if(props.type === "csp-f")
    {
        return (<p className="text-lime-500 text-sm font-medium self-center ">Closed Source Project • Finished</p>);
    }
    else if(props.type === "csp-ud")
    {
        return (<p className="text-amber-500 text-sm font-medium self-center ">Closed Source Project • Under Development</p>);
    }
    else
    {
        return (<p className="font-mono text-white text-sm font-medium self-center ">Document</p>);
    }
}

export default ListLinkType;