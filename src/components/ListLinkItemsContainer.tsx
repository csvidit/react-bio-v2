import React from "react";

const ListLinkItemsContainer = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
{
    return (<div className="w-full flex flex-col items-center">{props.children}</div>);
}

export default ListLinkItemsContainer;