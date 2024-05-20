"use client";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "../../utils/api";
import Link from "next/link";
import Header from "../../components/Header";

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
    <div className="w-full min-h-screen p-4 bg-cream">
      <Header />
      <h1 className="text-3xl mb-4">Product Details</h1>
      <div
        className="bg-white p-4 rounded shadow"
        style={{ backgroundColor: "#333333", color: "#FFFFFF" }}
      >
        <p>
          <strong>Id:</strong> {product.id}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating.rate}
        </p>
        <p>
          <strong>Count:</strong> {product.rating.count}
        </p>
        <div className="w-full h-48 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <Link href="/">
          <span className="text-blue-500 hover:underline">Back</span>
        </Link>
      </div>
    </div>
  );
}
