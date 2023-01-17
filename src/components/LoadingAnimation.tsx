import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingAnimation = () =>
{
    return(<Oval
        height={30}
        width={30}
        color="#bae6fd"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#0ea5e9"
        strokeWidth={5}
        strokeWidthSecondary={5}
      
      />);
}

export default LoadingAnimation