import { NavLink } from "react-router-dom";

export default function MenuBar() {
  return (
    <div style={styles.menu}>
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>

      <NavLink to="/products" style={styles.link}>
        Shop
      </NavLink>

      <NavLink to="/about" style={styles.link}>
        About
      </NavLink>

      <NavLink to="/contact" style={styles.link}>
        Contact
      </NavLink>

      <NavLink to="/cart" style={styles.link}>
        Cart 🛒
      </NavLink>
    </div>
  );
}

const styles = {
  menu: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
    padding: "12px 0",
    background: "white",
    borderBottom: "1px solid white",
  },

  // NavLink trả về function để biết active
  link: ({ isActive }) => ({
    textDecoration: "none",
    color: "#333",
    fontWeight: isActive ? "600" : "400",
    position: "relative",
    paddingBottom: 5,
  }),
};