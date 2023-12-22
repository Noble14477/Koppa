import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Services from "../component/Services";
import Promot from "../component/Promot";
import WhyUs from "../component/WhyUs";
import Works from "../component/Works";
import Reviews from "../component/Reviews";
import Footer from "../component/Footer";

const Home = () => {
  return <div className="">
    <div>
        <Hero/>
    </div>
    <About/>
    <Services/>
    <Promot/>
    <WhyUs/>
    <Works/>
    <Reviews/>

    <Footer/>
  </div>;
};

export default Home;
