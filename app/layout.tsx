import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "E-Shop",
  description: "A modern e-commerce website built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout">
        <GlobalLoader />
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
