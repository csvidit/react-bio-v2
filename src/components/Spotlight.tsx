import React from "react";

const Spotlight = (props: { title: string, children: any}) => {
    return (<div id="spotlight" className="z-10 snap-end flex flex-col mt-5 bg-slate-800 w-10/12 lg:w-1/3 justify-center rounded-md p-4">
        <h2 className="text-amber-400 font-bold text-xl text-left">{props.title}</h2>
        <p className="text-white text-justify">{props.children}</p>
    </div>)
}

export default Spotlight;