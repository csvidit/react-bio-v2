import "./Font.css";
import React from "react";

const Footer2 = (props: any) => {
  return (
    <div className="flex w-full flex-col justify-between self-center border-t border-slate-600 bg-slate-900 mt-5 pl-5 pr-5 pt-2 pb-2 lg:flex-row">
      <div className="flex flex-col space-y-1 self-center text-slate-500">
        <div className="flex flex-row space-x-1">
          <p className="self-center text-sm">&copy; 2023</p>
          <a
            href="https://viditkhandelwal.com"
            className="self-center hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <p className="self-center font-medium">VIDIT KHANDELWAL</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col self-center text-sm text-slate-500">
        <a
          href="https://github.com/csvidit/react-bio-v2"
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Project GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Footer2;
