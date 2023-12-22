import React from "react";
import { arch, building, con4, roof, sketch1, u1, u2 } from "../assets";
import { MdStar } from "react-icons/md";

const Reviews = () => {
  return (
    <div>
      <div className="mt-12 max-w-7xl mx-auto py-10 px-6 ">
        <div className="text-center">
          <p className="text-secondary text-xl">What they say about us?.</p>
          <h1 className="text-accent md:text-5xl text-4xl font-bold py-1">
            Client Reviews.
          </h1>
        </div>

        <div className="mt-12 flex justify-between flex-col md:flex-row w-full gap-8 relative overflow-hidden">
          
          <div className="flex flex-col justify-center gap-4 bg-accent py-6 px-5 items-center max-w-[400px] text-center border-[10px] border-gray-300">
            <div className="rounded-full w-[80px]  h-[80px] overflow-hidden">
              <img
                src={con4}
                alt="profile"
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <span className="flex gap-2 text-yellow-300">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </span>

              <p className="text-background">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                quod repellat id earum saepe fugiat iure. Deleniti molestiae
                quisquam cupiditate.
              </p>

              <div>
                <h5 className="text-background font-bold text-lg">John Doe</h5>
                <p className="text-primary text-md">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-4 bg-accent py-6 px-5 items-center  max-w-[400px] text-center border-[10px] border-gray-300">
            <div className="rounded-full w-[80px]  h-[80px] overflow-hidden">
              <img
                src={u1}
                alt="profile"
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <span className="flex gap-2 text-yellow-300">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </span>

              <p className="text-background">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                quod repellat id earum saepe fugiat iure. Deleniti molestiae
                quisquam cupiditate.
              </p>

              <div>
                <h5 className="text-background font-bold text-lg">John Doe</h5>
                <p className="text-primary text-md">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-4 bg-accent py-6 px-5 items-center  max-w-[400px] text-center border-[10px] border-gray-300">
            <div className="rounded-full w-[80px]  h-[80px] overflow-hidden">
              <img
                src={u2}
                alt="profile"
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <span className="flex gap-2 text-yellow-300">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </span>

              <p className="text-background">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                quod repellat id earum saepe fugiat iure. Deleniti molestiae
                quisquam cupiditate.
              </p>

              <div>
                <h5 className="text-background font-bold text-lg">John Doe</h5>
                <p className="text-primary text-md">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
