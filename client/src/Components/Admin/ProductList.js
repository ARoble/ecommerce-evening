import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRoute as Router, Link, useHistory } from "react-router-dom";
import AdminNav from "./AdminNav";
import { toast } from "react-toastify";
import { getAllProducts, deleteProduct } from "../../Services/API";

function ProductList() {
  const [products, setProduct] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAllProducts().then((res) => setProduct(res.data.data));
  }, []);

  function deleteProductFunc(id) {
    deleteProduct(id)
      .then(() => {
        toast.success("product deleted");
        history.push("/product/list");
      })
      .catch((e) => toast.error(e.response.data.message));
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
                  <MdDelete onClick={() => deleteProductFunc(product._id)} />
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
