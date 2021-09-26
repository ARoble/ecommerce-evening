import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import AdminNav from "./AdminNav";

function ProductAdd() {
  const history = useHistory();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    quanity: 0,
    description: "",
    image: "",
  });
  const { id, edit } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/api/product/${id}`)
        .then((res) => setProduct(res.data.product));
    }
  }, []);

  function save(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("price", product.price);
    formData.append("quanity", product.quanity);
    formData.append("description", product.description);
    formData.append("image", product.image);

    axios
      .post("http://localhost:8000/api/product", formData)
      .then((res) => {
        toast.success("Product is saved");
        history.push("/product/list");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  function update(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("price", product.price);
    formData.append("quanity", product.quanity);
    formData.append("description", product.description);
    formData.append("image", product.image);
    axios
      .put(`http://localhost:8000/api/product/${id}`, formData)
      .then((res) => {
        toast.success("Product updated");
        history.push("/product/list");
      })
      .catch((e) => toast.error(e.repsonse.data.message));
  }
  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <form className="product-form" encrypt="">
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
            value={product.quanity}
            onChange={(e) =>
              setProduct({ ...product, quanity: e.target.value })
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
          <input
            type="file"
            placeholder="Image"
            name="image"
            onChange={(e) => {
              setProduct({ ...product, image: e.target.files[0] });
              console.log(e.target.files[0]);
            }}
          />
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
