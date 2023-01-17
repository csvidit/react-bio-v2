import React from "react";

const ProfileName = (props) => {

    return (
    <div id="name" className="flex flex-row justify-center text-white space-x-2">
        <h1 className="text-3xl text-center font-bold">{props.name}</h1>
    </div>);
}

export default ProfileName;