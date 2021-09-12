import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AdminNav() {
  return (
    <div className="admin-nav">
      <center> Admin Nav</center>
      <ul>
        <Link className="link" to="/product/add">
          <li>Add product</li>
        </Link>
        <Link className="link" to="/product/list">
          <li>Product List</li>
        </Link>
        <Link className="link" to="/order/list">
          <li>Orders</li>
        </Link>
      </ul>
    </div>
  );
}

export default AdminNav;
