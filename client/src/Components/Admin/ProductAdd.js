import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ProductAdd() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    quanity: 0,
    description: "",
    image: "image",
  });

  function save(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", product)
      .then((res) => console.log(res))
      .catch((e) => toast.error(e.response.data.message));
    console.log(product);
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Category"
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Price"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Quantity"
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Description"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <input type="file" placeholder="Image " />
      <button onClick={(e) => save(e)}> Save Product</button>
    </form>
  );
}

export default ProductAdd;
