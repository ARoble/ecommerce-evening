import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRoute as Router, Link } from "react-router-dom";

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
    <>
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
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/product/edit/${product._id}`}>
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
    </>
  );
}

export default ProductList;
