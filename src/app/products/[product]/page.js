"use client";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "../../utils/api";
import Link from "next/link";
import Header from "../../components/Header";
import Image from "next/image";

import { IoCartOutline } from "react-icons/io5";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productId = window.location.pathname.split("/").pop();
        const product = await fetchProductById(productId);
        setProduct(product);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full min-h-screen">
      <Header />

      <div className="container mx-auto py-10 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
          <div className="shadow p-4 py-2 w-full lg:p-6 lg:py-4">
            <div className="relative w-full h-96 mb-4">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <div className="max-w-lg">
              <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                {product.title}
              </h1>
              <p className="my-4">
                <div className="text-gray-700 text-center lg:text-start">
                  {product.description}
                </div>
              </p>
              <p className="text-gray-700 mb-2">
                <span className="text-base font-semibold mb-2">
                  ${product.price}
                </span>
              </p>
              <p>
                <span className="text-gray-600">Category: </span>
                <span className="font-bold">{product.category}</span>
              </p>
              <p>
                <span className="text-gray-600">Rating: </span>
                <span className="font-bold">{product.rating.rate}</span>
              </p>
              <p>
                <span className="text-gray-600">Count: </span>
                <span className="font-bold">{product.rating.count}</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 py-3">
              <button className="px-4 py-2 rounded-lg bg-black hover:bg-[#0a091d] text-white">
                BUY NOW
              </button>

              <button className="px-4 py-2 rounded-lg bg-black hover:bg-[#0a091d] text-white">
                <IoCartOutline className="inline-block mr-2" />
                ADD TO CART
              </button>
            </div>

            <Link href="/">
              <span className="text-blue-500 hover:underline">Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
