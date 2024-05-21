"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../src/app/utils/api";
import Link from "next/link";
import Header from "../../src/app/components/Header";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProductsByName = (product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full min-h-screen">
      <Header />

      <div className="container mx-auto py-6 p-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold flex justify-center ">Products</h1>
          <div className="relative my-6">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosSearch className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.filter(filterProductsByName).map((product) => (
            <div
              key={product.id}
              className="p-2 rounded-lg border-[1px] border-gray h-full flex flex-col"
            >
              <div
                onClick={() => {
                  window.location.href = `/products/${product.id}`;
                }}
                className="cursor-pointer relative w-full h-60 mb-4"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h2 className="text-sm font-semibold flex justify-center text-center">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 flex justify-center py-4">
                  {product.category}
                </p>
                <p className="text-gray-700">
                  <span className="text-gray-600 text-base font-bold flex justify-center pb-2">
                    ${product.price}
                  </span>
                </p>
                <div className="mt-auto">
                  <button className="bg-black hover:bg-[#0a091d] text-white px-4 py-2 rounded-lg w-full">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
