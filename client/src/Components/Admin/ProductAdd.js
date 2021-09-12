import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AdminNav from "./AdminNav";

function ProductAdd() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    quanity: 0,
    description: "",
    image: "image",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => setProduct(res.data.product));
  }, []);

  function save(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", product)
      .then((res) => console.log(res))
      .catch((e) => toast.error(e.response.data.message));
  }

  function update(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, product)
      .then((res) => console.log(res));
  }
  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <form className="product-form">
          <h2 className="admin-heading">Add Product</h2>
          <input
            type="text"
            className="input"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="Product Category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Product Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="Product Quantity"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Product Description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
          <input type="file" placeholder="Image " />
          {id !== undefined ? (
            <button className="btn-review hover" onClick={(e) => update(e)}>
              Update Product
            </button>
          ) : (
            <button className="btn-review hover" onClick={(e) => save(e)}>
              Save Product
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
