"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>E-Shop</div>
      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users/about">About</Link></li>
        <li><Link href="/users/products">Products</Link></li>
      </ul>
      <div className={styles.authButtons}>
        <Link href="/users/login" className={styles.login}>Login</Link>
        <Link href="/users/sign-up" className={styles.signup}>Sign Up</Link>
      </div>
    </nav>
  );
}
