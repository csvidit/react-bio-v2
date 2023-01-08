const Spotlight = (props) => {
    return (<div id="spotlight" className="z-10 snap-end flex flex-col mt-5 bg-slate-800 w-10/12 lg:w-1/3 justify-center rounded-md p-4">
        <h2 className="text-amber-400 font-bold text-xl text-left">COMING SOON</h2>
        <p className="text-white text-justify">A series of analyses on three C.S. Lewis books, on my <a href="https://acad.viditkhandelwal.com" target="_blank" className="inline underline decoration-sky-500 hover:text-slate-300 text-white">academic papers</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width="16px" height="16px" stroke="currentColor" className="inline text-sky-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
        </svg> domain.</p>
    </div>)
}

export default Spotlight;