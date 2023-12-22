import React from "react";
import { Link } from "react-router-dom";
import { arch, building, conBg1, hall, roof, sketch1 } from "../assets";
import Footer from "../component/Footer";
import Promot from "../component/Promot";

const Services = () => {
  return <div>
    <div className="text-center bg-sketch1 py-20 relative overflow-hidden -z-10">
        <div className="bg-rgb1 w-full h-full absolute top-0 -z-10" />
        <p className="text-primary text-xl ">What we do.</p>
        <h1 className="text-background text-4xl md:text-5xl font-bold py-1">
          Our Services.
        </h1>
      </div>

      <div className="mt-12 max-w-7xl mx-auto py-10 md:px-6 px-4">
      <div className="mt-12 flex justify-between flex-wrap gap-8 ">
        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={sketch1} alt="construction pic" className="object-cover w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Design Build</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                
            </div>
        </div>
        
        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={conBg1} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">General Construction</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={roof} alt="construction pic" className="w-full h-[200px]" />
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Floors & Roofs</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={building} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Building Construction</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={hall} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Rooms & Halls</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={arch} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Architecture Design</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                
            </div>
        </div>

    </div>
      </div>
        <Promot/>
      <Footer/>
  </div>;
};

export default Services;
