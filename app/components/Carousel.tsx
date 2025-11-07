"use client";

import { motion } from "framer-motion";
import styles from "./Carousel.module.css";

const offers = [
  "🔥 50% off on Electronics!",
  "📱 New Smartphones Launching Soon!",
  "🎧 Mega Sale on Accessories!",
];

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      {offers.map((offer, index) => (
        <motion.div
          key={index}
          className={styles.slide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 1 }}
        >
          {offer}
        </motion.div>
      ))}
    </div>
  );
}
