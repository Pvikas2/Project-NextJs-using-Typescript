"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className={styles.image}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      <h3>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>

      <div className={styles.buttons}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={styles.addBtn}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </motion.button>

        <Link href={`/users/products/${product.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={styles.viewBtn}
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
