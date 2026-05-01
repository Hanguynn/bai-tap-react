import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const hotProducts = products.filter(product => product.hot);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>WELCOME TO ZARA</h1>
          <p>Discover our latest fashion collection</p>

          <Link to="/products" className="btn btn-dark px-4">
            SHOP NOW
          </Link>
        </div>
      </section>

      <section className="container section-space">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Mặt hàng Hot</h2>
          <Link to="/products" className="view-link">
            VIEW ALL
          </Link>
        </div>

        <div className="row g-4">
          {hotProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;