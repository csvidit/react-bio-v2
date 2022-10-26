import GitHubIcon from "./GitHubIcon";
import LitIcon from "./LitIcon";

const ListLinkLogo = (props) => {

    const type = props.type;

    if (type === "ghR" || type === "ghP" || type === "ghO") {
        return (<GitHubIcon></GitHubIcon>);
    }
    else if (type === "litSS" || type === "litP") {
        return (<LitIcon></LitIcon>);
    }
    else{
        return;
    }
}

export default ListLinkLogo;