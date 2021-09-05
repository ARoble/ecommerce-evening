import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRoute as Router, useParams } from "react-router-dom";
import Loading from "../Loading";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`).then((res) => {
      setProduct(res.data.product);
      setLoading(false);
    });
  });

  return <>{loading === true ? <Loading /> : render()}</>;

  function render() {
    return (
      <div className="container ">
        <div className="flex">
          <div className="details-image">
            <img src="./iphone.png" alt="iphone" />
          </div>
          <div className="details-desc">
            <h2>{product.name}</h2>
            <span>
              <b>${product.price}</b>
            </span>
            <div>
              <button
                className="btn-qty"
                onClick={() => qty > 0 && setQty(qty - 1)}
              >
                -
              </button>
              {qty}
              <button
                className="btn-qty"
                onClick={() => qty < product.quanity && setQty(qty + 1)}
              >
                +
              </button>
              {qty > 0 && <button>Add to cart</button>}
            </div>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="review">
          <h2>Product Review</h2>
          <div className="flex">
            <div className="review-list">
              <h4>Abdi Hassan</h4>
              <div>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
              pretium ante.👍🏾👍🏾
            </div>
            {/* <div className="add-review">
          <h2>Add a review</h2>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Add Review</button>
        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
