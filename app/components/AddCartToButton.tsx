"use client";
import { useCartStore } from "@/store/cartStore";
import styles from "./ProductCard.module.css";
import { motion } from "framer-motion";

export default function AddToCartButton({ product }: any) {
  const add = useCartStore(state => state.addToCart);

  return (
    <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    className={styles.addBtn}
    onClick={() => add(product)}
  >
    Add to Cart
  </motion.button>
  );
}
