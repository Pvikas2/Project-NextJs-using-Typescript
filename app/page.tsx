import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";


export default function HomePage() {
  return (
    <>
      <Carousel />
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Latest Products</h2>
      <ProductList />
    </>
  );
}
