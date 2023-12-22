import React from "react";
import {  con5 } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-12 max-w-7xl mx-auto py-10 md:px-6 px-4">
      <div className="text-center">
        <p className="text-secondary text-xl">Who are we?.</p>
        <h1 className="text-accent text-4xl md:text-5xl font-bold py-1">About Us.</h1>
      </div>

      <div className="mt-12 flex md:flex-row flex-col-reverse w-full gap-8 relative overflow-hidden">
        <div className="bg-primary w-[500px] h-[700px] absolute -right-[40%] -bottom-[100%] rotate-45 -z-10"/>
        <div className="md:w-[70%] w-full border">
            <img src={con5} alt="construction-worker"  className=" object-cover"/>
        </div>

        <div className="w-full">
            <p className="text-accent text-lg tracking-wide leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis animi accusamus itaque libero voluptate, id molestiae quod unde quidem quisquam architecto sunt tenetur, alias aliquid expedita rem. Eos animi libero quasi natus, possimus facere eaque cupiditate sequi nam corrupti sint magnam, consequuntur hic sapiente quae modi autem esse excepturi aliquam.
                nam corrupti sint magnam, consequuntur hic sapiente quae modi autem esse excepturi aliquam.
            </p>
            <div className="mt-6">
                <Link to="/about" className="bg-accent py-2 px-6 text-background ">Read More</Link>

            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
