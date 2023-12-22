import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai"
import { u1, u2 } from "../assets";

const Hero = () => {
  return (
    <div className="relative overflow-hidden -z-20 h-[100vh] bg-conBg bg-cover bg-center bg-no-repeat">
      <div className="h-[100vh] bg-rgb1 w-full absolute -z-10 top-0"/>
      <div className="max-w-7xl mx-auto w-full text-center flex flex-col justify-center items-center h-full px-4">
  
          <p className="text-md md:text-xl text-background tracking-widest">We are Certified Engineers</p>
          <h1 className="md:text-[3rem] text-[1.5rem] leading-normal font-bold uppercase text-background">
            Construction Services 
          </h1>
          <h1 className="md:text-[3rem] text-[1.5rem] leading-normal text-primary font-bold uppercase">
            Creative & Professional
          </h1>
          
          <div className="mt-6">
            <div className="flex justify-center gap-4">
              <div className="relative 0 w-[100px] ">
                  <span className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] absolute bg-accent rounded-full right-[6rem] overflow-hidden border-2 border-background"><img src={u1} alt="user1-pic" className="w-full h-full object-cover"/></span>
                  <span className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] absolute bg-secondary rounded-full right-[4.5rem] overflow-hidden border-2 border-background"><img src={u1} alt="user1-pic" className="w-full h-full object-cover"/></span>
                  <span className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] absolute bg-primary rounded-full right-[3rem] overflow-hidden border-2 border-background"><img src={u2} alt="user1-pic" className="w-full h-full object-cover"/></span>
                  <span className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] absolute bg-secondary rounded-full right-6 overflow-hidden border-2 border-background"><img src={u1} alt="user1-pic" className="w-full h-full object-cover"/></span>
                  <span className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] absolute bg-primary rounded-full right-0 overflow-hidden flex justify-center items-center border-2 border-background text-background text-lg">+</span>
              </div>

              <div className="text-left">
              <h4 className="font-bold text-lg md:text-xl text-background">450+</h4>
              <p className="text-sm text-background">Happy Clients</p>
            </div>

            </div>
        </div>
        <div className="mt-6 flex gap-2">
            <Link className="bg-primary py-2 px-6 md:py-3 md:px-8 text-background flex gap-2 items-center">
              Contact <AiOutlineArrowRight className="text-xl"/>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Hero;
