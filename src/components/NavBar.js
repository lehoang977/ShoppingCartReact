import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
