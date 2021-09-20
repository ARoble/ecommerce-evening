import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MdShoppingCart, MdPermIdentity, MdExitToApp } from "react-icons/md";
import { useEffect, useState } from "react";
function Header() {
  const [items, setItems] = useState(0);
  const [user, setUser] = useState();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    setUser(currentUser);
    if (
      localStorage.getItem("cart") === undefined ||
      localStorage.getItem("cart") === null
    ) {
      setItems(0);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")).length;
      setItems(cart);
    }
  });

  function logout() {
    localStorage.removeItem("user");
  }
  return (
    <div className="flex nav-bar">
      <h2>The Shop</h2>
      <ul className="nav-links">
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/product">
          <li>Products</li>
        </Link>

        <Link className="link" to="/product/list">
          <li>Admin</li>
        </Link>
      </ul>
      <h2 className="hover cart-icon">
        <Link className="link" to="/checkout">
          <MdShoppingCart />
          <small>{items}</small>
        </Link>
        <Link className="link" to="/login">
          <MdPermIdentity />
        </Link>
        {localStorage.getItem("user") !== null && (
          <MdExitToApp onClick={() => logout()} />
        )}
        {/* <small className="cart-items">2</small> */}
      </h2>
    </div>
  );
}

export default Header;
