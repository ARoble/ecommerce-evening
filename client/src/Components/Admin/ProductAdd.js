import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

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
    console.log(product);
  }

  function update(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, product)
      .then((res) => console.log(res));
  }
  return (
    <form style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Category"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Quantity"
        value={product.quantity}
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Description"
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <input type="file" placeholder="Image " />
      {id !== undefined ? (
        <button onClick={(e) => update(e)}> Update Product</button>
      ) : (
        <button onClick={(e) => save(e)}> Save Product</button>
      )}
    </form>
  );
}

export default ProductAdd;
