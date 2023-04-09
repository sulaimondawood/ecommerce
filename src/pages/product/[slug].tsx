import { client } from "@/lib/sanity";
import { GetStaticPaths, GetStaticProps } from "next";

import React from "react";

const Slug = () => {
  return (
    <div className="flex justify-center w-[90%] max-w-4xl">
      <div className="flex flex-col gap-4">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Slug;

export const getStaticPaths: GetStaticPaths = async (): Promise<any> => {
  const products = await client.fetch(`*[_type == 'products']`);
  const newProducts = products.map((item: any) => {
    {
      params: {
        slug: item.slug.current;
      }
    }
  });

  return {
    paths: newProducts,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const products = await client.fetch(`*[_type == 'products']`);
  return {
    props: {
      products,
    },
  };
};
