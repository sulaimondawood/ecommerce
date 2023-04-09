import React from "react";
import Img from "../assets/card.png";
import { urlFor } from "@/lib/sanity";

interface IPro {
  data: Products;
}
const Product = ({ data }: IPro) => {
  // console.log(data);
  console.log(data?.image[0]?.asset?._ref);
  console.log(data?.price);

  return (
    <div className=" flex flex-col gap-4">
      {/* <img
        className="h-[400px] w-full object-cover object-center "
        src={urlFor(data?.image[0]?.asset?._ref)?.url()}
        alt=""
      /> */}
      {/* <img
        className="h-[400px] w-full object-cover object-center "
        src={urlFor(data?.image[0]?.asset?._ref)?.url()}
        alt=""
      /> */}
      {/* <h1 className="text-head6">Nike Sportswear Futura Luxe</h1> */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-head6">{data?.title}</p>
        <p className="text-black font-semibold text-head6">${data?.price}</p>
      </div>
    </div>
  );
};

export default Product;
