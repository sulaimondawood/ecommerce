import React from "react";
import Product from "./Product";

function BestSellers() {
  return (
    <div className="py-20 max-w-6xl mx-auto ">
      <h1 className="text-body text-center py-6">Best Sellers</h1>
      <div className="flex items-center gap-6 justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default BestSellers;
``;
