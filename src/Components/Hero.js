import React from "react";
import { images } from "../Images/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className=" h-[800px] bg-fuchsia-100 bg-cover bg-no-repeat
     bg-center py-24 flex justify-around"
    >
      <div className=" container mx-auto flex justify-around h-full ">
        <div className=" flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className=" w-10 h-[2px] bg-red-500 mr-3">Newtrend</div>
          </div>

          <h1 className=" text-[60px] leadn[1,1] font-light mb-4">
            AUTOMN SALE STYLISH <br />
            <span className=" font-semibold">womens</span>
          </h1>
          <Link to={`/`}  className="  self-start uppercase font-semibold border-b-2 border-gray-400">Dicover More</Link>

          <div />
        </div>
        <div className=" hidden lg:block">
          <img src={require("../Images/woman_hero.png")} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
