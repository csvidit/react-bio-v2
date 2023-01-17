import GitHubIcon from "./GitHubIcon";
import LitIcon from "./LitIcon";
import React from "react";
import { BsFile } from "react-icons/bs";

const ListLinkLogo = (props: { type: string; }) => {

    const type = props.type;

    if (type === "ghR" || type === "ghP" || type === "ghO") {
        return (<GitHubIcon></GitHubIcon>);
    }
    else if (type === "litSS" || type === "litP") {
        return (<LitIcon></LitIcon>);
    }
    else{
        return(<BsFile></BsFile>)
    }
}

export default ListLinkLogo;