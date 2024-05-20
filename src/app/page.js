"use client";

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../src/app/utils/api";
import Link from "next/link";
import Header from "../../src/app/components/Header";
import Image from "next/image";

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
    <div className="w-full min-h-screen p-4 bg-cream">
      <Header />
      <h1 className="text-3xl mb-4">Products</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-400 rounded"
      />
      <div className="flex flex-wrap -mx-2">
        {products.filter(filterProductsByName).map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <div className="bg-white p-4 rounded shadow card flex flex-col">
              <div className="relative w-full h-60 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="card-content flex-grow">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">
                  <strong>Price:</strong>{" "}
                  <span className="text-black">${product.price}</span>
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">
                  Buy
                </button>
                <Link href={`/products/${product.id}`}>
                  <span className="text-blue-500 hover:underline">Details</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
