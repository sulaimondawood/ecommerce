import React from "react";
import Img from "../assets/card.png";
const Product = () => {
  return (
    <div className=" flex flex-col gap-4">
      <img
        className="h-[400px] w-full object-cover object-center "
        src={Img.src}
        alt=""
      />
      <h1 className="text-head6">Nike Sportswear Futura Luxe</h1>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-head6">Dress</p>
        <p className="text-black font-semibold text-head6">$50.00</p>
      </div>
    </div>
  );
};

export default Product;
