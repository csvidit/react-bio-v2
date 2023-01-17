import React from "react";

const ListLinkText = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    return (<p className="text-md font-bold text-white self-center">{props.text}</p>);
}

export default ListLinkText;