"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Plus, Minus, ShoppingBag } from "lucide-react"; // icons
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, increaseQty, decreaseQty } = useCartStore();
  const cartItem = cart.find((item) => item.id === product.id);

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
      />

      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>

      <div className={styles.buttons}>
        {cartItem ? (
          <motion.div
            className={styles.qtyControl}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              className={styles.qtyBtn}
              onClick={() => decreaseQty(product.id)}
            >
              <Minus size={16} />
            </button>
            <span className={styles.qtyValue}>{cartItem.quantity}</span>
            <button
              className={styles.qtyBtn}
              onClick={() => increaseQty(product.id)}
            >
              <Plus size={16} />
            </button>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={styles.addBtn}
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={16} className="inline-block mr-2" />
            Add to Cart
          </motion.button>
        )}

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
