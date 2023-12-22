import React from "react";
import { arch, building, conBg1, debuild, hall, roof, sketch1 } from "../assets";
import { MdConstruction, MdFoundation, MdHandyman, MdHouseSiding, MdRoofing, MdSquareFoot } from "react-icons/md"
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="mt-12 max-w-7xl mx-auto py-10 md:px-6 px-4">
      <div className="text-center">
        <p className="text-secondary text-xl">What we do?.</p>
        <h1 className="text-accent text-5xl font-bold py-1">Our Services.</h1>
      </div>

    <div className="mt-12 flex justify-between flex-wrap gap-8">
        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={sketch1} alt="construction pic" className="object-cover w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Design Build</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
            </div>
        </div>
        
        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={conBg1} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">General Construction</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={roof} alt="construction pic" className="w-full h-[200px]" />
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Floors & Roofs</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={building} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Building Construction</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={hall} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Rooms & Halls</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
            </div>
        </div>

        <div className="bg-background w-[300px] flex flex-col justify-center items-center group mt-10">
            <div className="bg-gray-300 p-2 group-hover:bg-primary group-hover:text-background w-[300px]">
                <img src={arch} alt="construction pic" className="w-full h-[200px]"/>
            </div>
            <div className=" mt-6">
                <h3 className="text-2xl font-bold pb-2 text-accent">Architecture Design</h3>
                <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
                <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
            </div>
        </div>

    </div>

    </div>
  );
};

export default Services;
