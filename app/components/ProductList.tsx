"use client";  // 👈 add this line at the top!

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
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
            image:
              product.images && product.images.length > 0
                ? product.images[0]
                : product.thumbnail,
          }}
        />
      ))}
    </div>
  );
}
