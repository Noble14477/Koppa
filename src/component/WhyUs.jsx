import React from "react";
import { MdConstruction, MdFoundation, MdHandyman, MdHouseSiding, MdRoofing, MdSquareFoot } from "react-icons/md"

const WhyUs = () => {
  return <div className="mt-12 max-w-7xl mx-auto py-10 px-6 ">
  <div className="text-center">
    <p className="text-secondary text-xl">What makes us special?.</p>
    <h1 className="text-accent md:text-5xl text-4xl font-bold py-1">Why Choose Us.</h1>
  </div>

<div className="mt-12 flex justify-between flex-wrap gap-8">
    <div className="bg-background w-[400px] flex flex-col justify-center items-center group">
        <div className="bg-gray-300 p-4 rounded-full group-hover:bg-primary group-hover:text-background">
            <MdFoundation className="text-4xl"/>
        </div>
        <div className="text-center mt-6">
            <h3 className="text-xl font-bold pb-2 text-accent">We Deliver Quality</h3>
            <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
        </div>
    </div>

    <div className="bg-background w-[300px] flex flex-col justify-center items-center group">
        <div className="bg-gray-300 p-4 rounded-full group-hover:bg-primary group-hover:text-background">
            <MdConstruction className="text-4xl"/>
        </div>
        <div className="text-center mt-6">
            <h3 className="text-xl font-bold pb-2 text-accent">Always On Time</h3>
            <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
        </div>
    </div>

    <div className="bg-background w-[300px] flex flex-col justify-center items-center group">
        <div className="bg-gray-300 p-4 rounded-full group-hover:bg-primary group-hover:text-background">
            <MdRoofing className="text-4xl"/>
        </div>
        <div className="text-center mt-6">
            <h3 className="text-xl font-bold pb-2 text-accent">We Are Passionate</h3>
            <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
        </div>
    </div>

    <div className="bg-background w-[300px] flex flex-col justify-center items-center group">
        <div className="bg-gray-300 p-4 rounded-full group-hover:bg-primary group-hover:text-background">
        <MdHandyman className="text-4xl"/>
        </div>
        <div className="text-center mt-6">
            <h3 className="text-xl font-bold pb-2 text-accent">Professional Services</h3>
            <p className="text-accent text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolores nihil eveniet accusantium aspernatur sit illum ad cum soluta qui.</p>
        </div>
    </div>
    
</div>

</div>;
};

export default WhyUs;
