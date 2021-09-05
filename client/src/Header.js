import { MdShoppingCart } from "react-icons/md";
import { BrowserRoute as Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex nav-bar">
      <h2>The Shop</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Admin</li>
      </ul>
      <h2 className="hover">
        <MdShoppingCart />
      </h2>
    </div>
  );
}

export default Header;
