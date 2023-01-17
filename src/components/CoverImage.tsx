import React from "react";

const CoverImage = () =>
{
    return(<div className="mt-5 snap-end h-28 justify-center z-0 w-11/12 lg:w-2/4">
    <img className="object-contain overflow-clip inline-block rounded-lg" src={require("./assets/cover-edited.webp")} alt="Emison admissions building of DePauw University"/>
</div>);
}

export default CoverImage;