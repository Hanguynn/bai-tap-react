import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    const matchPrice =
      priceRange === "All" ||
      (priceRange === "low" && product.price < 500000) ||
      (priceRange === "mid" && product.price >= 500000 && product.price <= 1000000) ||
      (priceRange === "high" && product.price > 1000000);

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <section className="container page-space">
      <h1 className="page-title">Shop Collection</h1>

      <div className="row mb-5 g-3">
        <div className="col-md-5">
          <input
            className="form-control"
            type="text"
            placeholder="Tìm sản phẩm theo tên..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="All">Tất cả danh mục</option>
            <option value="Shoes">Shoes</option>
            <option value="Clothes">Clothes</option>
            <option value="Bags">Bags</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={priceRange}
            onChange={e => setPriceRange(e.target.value)}
          >
            <option value="All">Tất cả mức giá</option>
            <option value="low">Dưới 500.000 VND</option>
            <option value="mid">500.000 đến 1.000.000 VND</option>
            <option value="high">Trên 1.000.000 VND</option>
          </select>
        </div>
      </div>

      <p className="mb-4">
        Tìm thấy <strong>{filteredProducts.length}</strong> sản phẩm
      </p>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </div>
    </section>
  );
}

export default Products;