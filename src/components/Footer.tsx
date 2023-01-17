import React from "react";

const Footer = (props) => {
  return (
    <div className="">
      <p className="text-center text-white">
        © 2023 Vidit Khandelwal. All rights reserved.
      </p>
      <div className="text-center text-white">{props.children}</div>
      <a
        href="https://github.com/csvidit/react-bio-v2"
        rel="noreferrer"
        target="_blank"
      >
        <p className="text-center text-white underline decoration-sky-500 hover:text-slate-300">
          Go to this project's GitHub repository for more information.
        </p>
      </a>
    </div>
  );
};

export default Footer;
