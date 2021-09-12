import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MdShoppingCart, MdPermIdentity } from "react-icons/md";
import { useEffect, useState } from "react";
function Header() {
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
        </Link>
        <Link className="link" to="/login">
          <MdPermIdentity />
        </Link>
        {/* <small className="cart-items">2</small> */}
      </h2>
    </div>
  );
}

export default Header;
