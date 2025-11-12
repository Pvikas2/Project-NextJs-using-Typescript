"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>E-Shop</div>

      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users/about">About</Link></li>
        <li><Link href="/users/products">Products</Link></li>
      </ul>

      <div className={styles.authButtons}>
        <Link href="/users/cart" className={styles.cartIcon}>
          <ShoppingCart size={24} />
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
        <Link href="/users/login" className={styles.login}>Login</Link>
        <Link href="/users/sign-up" className={styles.signup}>Sign Up</Link>
      </div>
    </nav>
  );
}
