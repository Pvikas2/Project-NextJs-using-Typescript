"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

interface ProductApi {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const json = await res.json();
        setProducts(json.products);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading products…</p>;

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.images?.length ? product.images[0] : product.thumbnail,
          }}
        />
      ))}
    </div>
  );
}
