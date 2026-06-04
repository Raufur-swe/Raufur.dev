import introImg from "../assets/intro.png";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <h1 className="text-4xl md:text-[75px] lg:text-[150px] font-bold text-center whitespace-nowrap">
        Raufur Uddin
      </h1>

      {/* Intro Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center -mt-5 lg:-mt-25 md:-mt-12 ">

        {/* right side */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-4 lg:w-120">
          <p className="font-sans text-lg md:text-xl font-medium">
            Assalamu Alaikum, I'm Raufur, developing thoughtful digital solutions that make the online experience easier and better.
          </p>

          <button className="mt-8 px-10 py-4 rounded-2xl border-2 border-black bg-[#EAE2D2] text-xl font-semibold shadow-[4px_4px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            Hire me
          </button>
        </div>

        {/* intro img */}
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src={introImg}
            alt="rs"
            className="max-w-50 md:max-w-full  lg:max-w-[150%]
        
      "
          />
        </div>

        {/* left side */}
        <div className="hidden md:flex lg:flex order-3 flex-col items-center justify-center gap-2 bg-amber-100 rounded-2xl p-6">
          <p className="font-sans text-xl md:text-xl font-medium">
            AI Driven Full Stack Developer
          </p>
          <p className="font-sans text-lg md:text-xl font-normal text-center">
            Bsc in software engineering  <br/>
             <span className="font-bold text-center">Daffodil International University</span>, Bangladesh. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;