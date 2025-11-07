"use client";

import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className={styles.buttons}>
        <button>Add to Cart</button>
        <button>See Details</button>
      </div>
    </motion.div>
  );
}
