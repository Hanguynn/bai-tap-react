import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="footer-logo">ZARA</h4>
            <p>Modern fashion for everyone.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h6>SHOP</h6>
            <ul className="footer-links">
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products">Shoes</Link></li>
              <li><Link to="/products">Clothes</Link></li>
              <li><Link to="/products">Bags</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6>CONTACT</h6>
            <p>Email: sewisme01@gmail.com</p>
            <p>Phone: (+84) 855 599 356</p>
            <p>Address: Ho Chi Minh City, Vietnam</p>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>© 2026 ZARA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;