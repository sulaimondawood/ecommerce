import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <header className="flex py-10 gap-10 items-center justify-start">
        <button className="text-head5 text-gray-500">All Product</button>
        <button className="text-head5 text-gray-500">T-Shirt</button>
        <button className="text-head5 text-gray-500">Hoodie</button>
        <button className="text-head5 text-gray-500">Jacket</button>
      </header>
      <section className="grid grid-cols-4 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default Products;
