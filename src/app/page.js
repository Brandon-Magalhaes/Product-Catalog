"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../src/app/utils/api";
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
        <h1 className="text-3xl font-bold flex justify-center w-full">
          Products
        </h1>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.filter(filterProductsByName).map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-lg border-[1px] h-full flex flex-col"
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
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h2 className="text-sm font-semibold flex">{product.title}</h2>
                <p className="text-sm text-gray-500 flex py-4">
                  {product.category}
                </p>
                <p className="flex justify-between w-full mt-auto">
                  <span className="text-gray-600 text-base font-bold flex justify-center sm:justify-start pb-2">
                    ${product.price}
                  </span>
                  <div
                    onClick={() => {
                      window.location.href = `/products/${product.id}`;
                    }}
                    className="cursor-pointer text-blue-500 hover:underline text-sm"
                  >
                    Details
                  </div>
                </p>

                <button className="bg-black hover:bg-[#0a091d] text-white px-4 py-2 rounded-lg w-full mt-auto">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
