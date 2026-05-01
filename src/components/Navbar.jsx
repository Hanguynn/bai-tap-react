import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalQuantity } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
      <div className="container">
        <Link className="navbar-brand brand-logo" to="/">
          ZARA
        </Link>

        <div className="d-flex gap-4 align-items-center">
          <Link className="nav-link" to="/">HOME</Link>
          <Link className="nav-link" to="/products">PRODUCTS</Link>
          <Link className="nav-link" to="/about">ABOUT</Link>
          <Link className="nav-link" to="/contact">CONTACT</Link>
          <Link className="nav-link cart-link" to="/cart">
            CART ({totalQuantity})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;