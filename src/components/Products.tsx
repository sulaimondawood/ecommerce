import React from "react";
import Product from "./Product";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

const Products = ({ products }: any) => {
  return (
    <div className="max-w-6xl mx-auto ">
      <header className="flex py-10 gap-10 items-center justify-center">
        <button className="text-lg text-gray-500">All Product</button>
        <button className="text-lg text-gray-500">T-Shirt</button>
        <button className="text-lg text-gray-500">Hoodie</button>
        <button className="text-lg text-gray-500">Jacket</button>
      </header>
      <section className="grid grid-cols-5 gap-6">
        {products.map((data: Products) => {
          const { desc, image, price, slug, title } = data;
          return (
            <Link href={`product/${slug?.current}`}>
              <div className=" flex flex-col gap-4 ">
                <img
                  className="h-[200px] w-full rounded-xl object-cover object-center "
                  src={urlFor(data?.image[0]?.asset?._ref)?.url()}
                  alt=""
                />
                {/* <h1 className="text-head6">Nike Sportswear Futura Luxe</h1> */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-head6">{data?.title}</p>
                  <p className="text-black font-semibold text-head6">
                    ${data?.price}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
