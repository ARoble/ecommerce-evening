import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRoute as Router, Link } from "react-router-dom";
import AdminNav from "./AdminNav";

function ProductList() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => setProduct(res.data.data));
  });

  function deleteProduct(id) {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => console.log(res));
  }
  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <h2 style={{ textAlign: "center" }}>Product List</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.quanity}</td>
                <td>{product.price}</td>
                <td>
                  <Link className="link" to={`/product/edit/${product._id}`}>
                    <MdModeEdit />
                  </Link>
                </td>
                <td>
                  <MdDelete onClick={() => deleteProduct(product._id)} />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
