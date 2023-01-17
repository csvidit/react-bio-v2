import React from "react";

const ProfileSubtitle = (props: { content: string }) => {
    return (<div id="subtitle" className="flex-row justify-center text-cyan-400">
        <h2 className="text-xl text-center font-medium">{props.content}</h2>
    </div>);
}

export default ProfileSubtitle;