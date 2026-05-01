import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="col-sm-6 col-lg-4">
      <div className="product-card">
        <div className="product-img-wrap">
          {product.hot && <span className="product-label">HOT</span>}
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-body">
          <h5>{product.name}</h5>
          <p>{product.category}</p>
          <strong>{product.price.toLocaleString()} VND</strong>

          <button
            className="btn btn-dark w-100 mt-3"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;