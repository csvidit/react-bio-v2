import GitHubIcon from "./GitHubIcon";
import LitIcon from "./LitIcon";
import React from "react";
import { BsFile, BsCodeSquare } from "react-icons/bs";

const ListLinkLogo = (props: { type: string; }) => {

    const type = props.type;

    if (type === "ghR" || type === "ghP" || type === "ghO") {
        return (<GitHubIcon/>);
    }
    else if (type === "litSS" || type === "litP") {
        return (<LitIcon/>);
    }
    else if (type === "csp-f" || type === "csp-ud")
    {
        return(<BsCodeSquare className="self-center text-white text-md"></BsCodeSquare>)
    }
    else{
        return(<BsFile className="self-center text-white text-md"></BsFile>)
    }
}

export default ListLinkLogo;