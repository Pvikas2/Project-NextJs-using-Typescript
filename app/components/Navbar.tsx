"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        {/* LEFT - Logo */}
        <div className={styles.logo}>E-Shop</div>

        {/* CENTER - Desktop Links */}
        <ul className={styles.links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/users/about">About</Link></li>
          <li><Link href="/users/products">Products</Link></li>
        </ul>

        {/* RIGHT - Desktop Buttons */}
        <div className={styles.authButtons}>
          <Link href="/users/cart" className={styles.cartIcon}>
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </Link>

          <Link href="/users/login" className={styles.login}>Login</Link>
          <Link href="/users/sign-up" className={styles.signup}>Sign Up</Link>
        </div>

        {/* RIGHT - Mobile Cart + Menu Button */}
        <div className={styles.mobileRight}>
          <Link href="/users/cart" className={styles.cartIcon}>
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/users/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/users/products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/users/login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="/users/sign-up" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
