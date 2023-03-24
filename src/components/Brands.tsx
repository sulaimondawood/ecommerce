import React from "react";

import Brand1 from "../assets/01.svg";
import Brand2 from "../assets/02.svg";
import Brand3 from "../assets/03.svg";
import Brand4 from "../assets/04.svg";
import Brand5 from "../assets/05.svg";

import Card from "../assets/card.png";
const Brands = () => {
  return (
    <section>
      <div className=" py-20 flex justify-center items-center gap-10">
        <img className="" src={Brand1.src} alt="" />
        <img className="" src={Brand2.src} alt="" />
        <img className="" src={Brand3.src} alt="" />
        <img className="" src={Brand4.src} alt="" />
        <img className="" src={Brand5.src} alt="" />
      </div>

      <div className="flex gap-5 mx-auto relative max-w-6xl">
        <h1 className="-rotate-90 absolute -left-44 top-1/2 -translate-y-1/2 text-head5">
          Explore New and Popular Styles
        </h1>
        <img
          className="w-[500px] h-[550px] object-cover object-center"
          src={Card.src}
          alt=""
        />

        <div className="grid  gap-4 grid-cols-2">
          <img
            className="w-[500px] h-[260px] object-cover object-center"
            src={Card.src}
            alt=""
          />
          <img
            className="w-[500px] h-[260px] object-cover object-center"
            src={Card.src}
            alt=""
          />
          <img
            className="w-[500px] h-[270px] object-cover object-center"
            src={Card.src}
            alt=""
          />
          <img
            className="w-[500px] h-[270px] object-cover object-center"
            src={Card.src}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
