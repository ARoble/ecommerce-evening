import { MdShoppingCart } from "react-icons/md";

function Header() {
  return (
    <div className="flex nav-bar">
      <h2>The Shop</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
      </ul>
      <h2 className="hover">
        <MdShoppingCart />
      </h2>
    </div>
  );
}

export default Header;
