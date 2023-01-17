import ImportantLink from "./ImportantLink";
import depauw from "./assets/depauw-sm.png";
import React from "react";

const ImportantLinksContainer = (props) =>
{
    return (<div id="important-links" className="flex flex-row justify-center space-x-3 mt-3 justify-around ml-5 mr-5">
    <ImportantLink link="https://v-k.pw/UJPFVe" text="CS Portfolio" image="csp"></ImportantLink>
    <ImportantLink link="https://v-k.pw/KnkKNn" text="Academic Papers"></ImportantLink>
</div>);
}

export default ImportantLinksContainer;