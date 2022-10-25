const ImportantLinksContainer = (props) =>
{
    return (<div id="important-links" className="flex flex-row justify-center space-x-3 mt-3 justify-around ml-5 mr-5">
    <a href="https://v-k.pw/UJPFVe" target="_blank" rel="noreferrer" className="flex flex-row justify-center grow">
        <div className="flex flex-col space-y-3 bg-slate-900 p-3 rounded-lg border border-slate-900 hover:border-red-500 grow w-justify-center">
            <svg className="education-icon-svg" width="24" height="24" viewBox="0 0 4262 5000" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <g transform="matrix(2.31941e-16,-3.78788,3.78788,2.31941e-16,-1368.98,11969.7)">
                    <g opacity="0.9">
                        <g transform="matrix(1,0,0,1,681.447,325)">
                            <clipPath id="_clip1">
                                <rect x="1158.55" y="36.409" width="660" height="562.5"></rect>
                            </clipPath>
                            <g clipPath="url(#_clip1)">
                                <path className="education-icon-svg-path" d="M1425.55,36.409L1158.55,36.409L1686.55,1161.41L1953.55,1161.41L2478.55,36.409L2216.05,36.409L1823.05,921.409L1425.55,36.409Z"></path>
                            </g>
                        </g>
                        <g transform="matrix(1,0,0,1,681.447,325)">
                            <clipPath id="_clip2">
                                <rect x="1818.55" y="36.409" width="660" height="1125"></rect>
                            </clipPath>
                            <g clipPath="url(#_clip2)">
                                <path className="education-icon-svg-path"d="M1425.55,36.409L1158.55,36.409L1823.05,921.409L1953.55,1161.41L2478.55,36.409L2216.05,36.409L1823.05,921.409L1425.55,36.409Z"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <p className="text-md font-bold text-white">CS Portfolio</p>
        </div>
    </a>
    <a href="https://v-k.pw/KnkKNn" target="_blank" rel="noreferrer" className="flex flex-row justify-center grow">
        <div className="flex flex-col space-y-3 bg-slate-900 p-3 rounded-lg border border-slate-900 hover:border-red-500 grow w-1/2 justify-center">
            <p className="text-md font-bold text-white">Academic<br></br> Papers</p>
        </div>
    </a>
</div>);
}

export default ImportantLinksContainer;