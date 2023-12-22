import React from "react";
import { Link } from "react-router-dom";

const Promot = () => {
  return (
    <div className="bg-sketch1 relative h-full -z-10 py-8 mt-10 w-full overflow-hidden">
        <div className="h-full bg-rgb2 w-full absolute -z-10 top-0"/>
      <div className="mt-12 max-w-7xl mx-auto py-10 md:px-6 px-4 flex flex-col gap-4 justify-center items-center">
        <h3 className="md:text-3xl text-xl font-semibold text-background">Let's Make Awesome Things, Together.</h3>
        <p className="md:w-[800px] w-full pt-4 text-background">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste
          tenetur quasi tempora, dolore magnam, in quas perspiciatis rem,
          reiciendis, repellat placeat deserunt adipisci porro aperiam? Officia,
          sapiente, temporibus!
        </p>
        <div className="mt-6">
                <Link to="/about" className="bg-primary py-3 px-6 text-background ">Read More</Link>

            </div>
      </div>
    </div>
  );
};

export default Promot;
