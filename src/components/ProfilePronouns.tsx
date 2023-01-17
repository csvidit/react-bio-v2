import React from "react";

const ProfilePronouns = (props: { pronouns: string }) => {

    return (<div id="pronouns-2">
        <h3 className="text-center self-center text-slate-300">({props.pronouns})</h3>
    </div>);
}

export default ProfilePronouns;