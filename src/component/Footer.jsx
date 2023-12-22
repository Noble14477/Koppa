import React from "react";
import { MdHomeFilled, MdSettingsPhone, MdThumbUpAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mt-[7rem] mt-[12rem] relative bg-accent md:px-6 px-4">
      <div className="bg-primary max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row gap-4 justify-around w-full transform translate-x-[-50%] translate-y-[-50%] absolute top-[10px] left-1/2">
        <div className="flex gap-4 items-center text-background">
          <MdSettingsPhone className="text-4xl "/>
          <div className="">
            <h4 className="text-lg font-bold pb-4">Contacts</h4>
            <p className="">Call Us: 0000000000</p>
            <p className="">example@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4 items-center text-background">
          <MdHomeFilled className="text-4xl "/>
          <div className="text-background">
            <h4 className="text-lg font-bold pb-4">Address</h4>
            <p>Hemmer Builder, Downtown, Victoria, Australia</p>
          </div>
        </div>
        <div className="flex gap-4 items-center text-background">
          <MdThumbUpAlt className="text-4xl "/>
          <div>
            <h4 className="text-lg font-bold pb-4">Follow Us</h4>

            <span className="flex gap-4">
                <FaFacebook/>
                <FaInstagram/>
            </span>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br className="md:hidden"/>
      <br className="md:hidden"/>
      <br className="md:hidden"/>
      

      <div>
        <div className="pt-10 flex flex-col md:flex-row md:gap-20 gap-12 max-w-7xl mx-auto pb-20">
          <div className="text-background max-w-[400px] w-full">
            <h4 className="text-lg font-bold pb-6 ">About Us</h4>
            <p className="text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eveniet error eius laboriosam? Iusto quos eos quia ratione, cum deleniti?</p>
          </div>
          <div className="text-background max-w-[400px] w-full">
            <h4 className="text-lg font-bold pb-6 ">About Us</h4>
            <p className="text-gray-300">Opining Days :</p>
            <p className="text-gray-300">Monday – Friday : 9am to 20 pm Saturday : 9am to 17 pm</p>
          </div>
          <div className="text-background max-w-[400px] w-full flex flex-col">
            <h4 className="text-lg font-bold pb-6 ">Quick Links</h4>
            <Link to="/" className="text-gray-300 pb-1 hover:text-primary duration-150">Home</Link>
            <Link to="/about" className="text-gray-300 py-1 hover:text-primary duration-150">About</Link>
            <Link to="/services" className="text-gray-300 py-1 hover:text-primary duration-150">Services</Link>
            <Link to="/works" className="text-gray-300 py-1 hover:text-primary duration-150">Works</Link>
          </div>
        </div>

        <hr />
        <p className="text-sm text-gray-300 py-4 text-center">Copyright ©2023 KOPPA DESIGNS. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
