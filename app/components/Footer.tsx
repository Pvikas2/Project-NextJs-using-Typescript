import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>© {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
        <p>Contact: support@eshop.com</p>
      </div>
      <div className={styles.links}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Help</a>
      </div>
    </footer>
  );
}
