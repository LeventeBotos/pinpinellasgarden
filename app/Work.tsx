import { Button } from "@/components/ui/button";
import React from "react";

const Work = () => {
  return (
    <div className="p-5 ">
      <div className="w-full h-96 bg-white p-5 bg-opacity-10 rounded-lg text-white text-2xl items-center flex flex-col justify-evenly">
        <p>
          Would you be interested in joining a community of gamers for work?
        </p>
        <a href="/work" className="bg-none">
          {/* <button className="gradientbg  rounded-lg ">
            <p className="text-white  transition-all duration-300 ease-in-out px-5 p-3 bg-black bg-opacity-20 hover:bg-opacity-0">
              {" "}
              Join us!
            </p>
          </button> */}
          <Button>Join us!</Button>
        </a>
      </div>
    </div>
  );
};

export default Work;
