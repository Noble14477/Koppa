import React, { useState } from "react";
import { arch, building, roof, sketch1 } from "../assets";


const Works = () => {
 
  return (
    <div className="bg-accent">
      <div className="mt-12 max-w-7xl mx-auto py-10 md:px-6 px-4 ">
        <div className="text-center">
          <p className="text-secondary text-xl">Our work gallary.</p>
          <h1 className="text-background md:text-5xl text-4xl font-bold py-1">Projects.</h1>
        </div>

        <div className="mt-12 flex flex-col gap-6 justify-between w-full md:h-[450px] pb-10">
          <div className="w-full md:w-[400px]  overflow-hidden">
            <img src={sketch1} alt="building" className="object-cover w-full h-[300px]"/>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <img src={sketch1} alt="building" />
              <img src={roof} alt="building" />
            </div>
          </div>
          <div className="w-full md:w-[400px] grid overflow-hidden">
            <img src={roof} alt="building" className="object-cover w-full h-[300px]"/>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <img src={roof} alt="building" />
              <img src={sketch1} alt="building" />
            </div>
          </div>
          <div className="w-full md:w-[400px] h-full ">
            <img src={building} alt="building" className=" object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
