import React from "react";
import "./StudioLink.css";
import { HiArrowUpRight } from "react-icons/hi2";

const StudioLink = () => {
  return (
    <a
      href="https://studio.viditkhandelwal.com"
      id="studio"
      className="bg ml-5 mr-5 mt-2 mb-2 flex flex-row justify-between rounded p-3 border-2 group border-violet-300 hover:border-violet-500 transition-all duration-200 ease-in-out"
    >
      <div id="work-text" className="flex flex-col self-center">
        <div className="flex flex-col">
          <div>
            <h3 className="text-left font-bold capitalize text-white">
              Vidit Khandelwal Studio
            </h3>
          </div>
          <div className="flex flex-row items-center space-x-1 font-light text-violet-500">
            <h3 className="">A software and design consultancy.</h3>
            <HiArrowUpRight />
          </div>
        </div>
      </div>
    </a>
  );
};

export default StudioLink;
