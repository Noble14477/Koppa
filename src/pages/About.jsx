import React from "react";
import { con5, conBg1 } from "../assets";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import WhyUs from "../component/WhyUs";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div>
      <div className="text-center bg-sketch1 py-20 relative overflow-hidden -z-10">
        <div className="bg-rgb2 w-full h-full absolute top-0 -z-10" />
        <p className="text-primary text-xl ">Who are we?.</p>
        <h1 className="text-background text-4xl md:text-5xl font-bold py-1">
          About Us.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto mt-20 md:px-6 px-4">
        <div className=" flex md:flex-row flex-col-reverse w-full gap-8 relative overflow-hidden">
          <div className="md:w-[70%] w-full">
            <img
              src={con5}
              alt="construction-worker"
              className=" object-cover"
            />
          </div>

          <div className="w-full">
            <p className="text-accent text-lg tracking-wide leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis animi accusamus itaque libero voluptate, id molestiae
              quod unde quidem quisquam architecto sunt tenetur, alias aliquid
              expedita rem. Eos animi libero quasi natus, possimus facere eaque
              cupiditate sequi nam corrupti sint magnam, consequuntur hic
              sapiente quae modi autem esse excepturi aliquam. nam corrupti sint
              magnam, consequuntur hic sapiente quae modi autem esse excepturi
              aliquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis animi accusamus itaque libero voluptate, id molestiae
              quod unde quidem quisquam architecto sunt tenetur, alias aliquid
              expedita rem. Eos animi libero quasi natus, possimus facere eaque
              cupiditate sequi nam corrupti sint magnam, consequuntur hic
              sapiente quae modi autem esse excepturi aliquam. nam corrupti sint
              magnam, consequuntur hic sapiente quae modi autem esse excepturi
              aliquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis animi accusamus itaque libero voluptate, id molestiae
              quod unde quidem quisquam architecto sunt tenetur, alias aliquid
              expedita rem. Eos animi libero quasi natus, possimus facere eaque
              cupiditate sequi nam corrupti sint magnam, consequuntur hic
              sapiente quae modi autem esse excepturi aliquam. nam corrupti sint
              magnam, consequuntur hic sapiente quae modi autem esse excepturi
              aliquam.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <WhyUs />

      <div className="mt-12 max-w-7xl mx-auto py-10 md:px-6 px-4">
        <div className="text-center">
          <p className="text-secondary text-xl">SOME FAQ’S.</p>
          <h1 className="text-accent text-4xl md:text-5xl font-bold py-1">
            Fequality Ask Question
          </h1>
        </div>

        <div className="mt-12 flex md:flex-row flex-col-reverse w-full gap-8 relative overflow-hidden">
          <div className="md:w-[70%] w-full">
            <img
              src={conBg1}
              alt="construction-worker"
              className=" object-cover"
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-gray-300 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>How do you contact us</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-accent leading-8 ">
                    To deposit funds in your trading account is quick and simple
                    For your convenience you may choose one of the several
                    available deposit methods To make a successful deposit
                    please follow the steps below Login to your account Click on
                    the DEPOSITS button in the DASHBOARD section Choose the
                    deposit option And follow the steps to complete your
                    transaction.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-gray-300 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>How do i make a deposit?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-accent leading-8 ">
                    To deposit funds in your trading account is quick and simple
                    For your convenience you may choose one of the several
                    available deposit methods To make a successful deposit
                    please follow the steps below Login to your account Click on
                    the DEPOSITS button in the DASHBOARD section Choose the
                    deposit option And follow the steps to complete your
                    transaction.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-gray-300 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>How do i make a deposit?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-accent leading-8 ">
                    To deposit funds in your trading account is quick and simple
                    For your convenience you may choose one of the several
                    available deposit methods To make a successful deposit
                    please follow the steps below Login to your account Click on
                    the DEPOSITS button in the DASHBOARD section Choose the
                    deposit option And follow the steps to complete your
                    transaction.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
