import { MdStar, MdShoppingBasket } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRoute as Router,
  useParams,
  useHistory,
} from "react-router-dom";
import Loading from "../Loading";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { toast } from "react-toastify";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [qty, setQty] = useState(0);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`).then((res) => {
      setProduct(res.data.product);
      setLoading(false);
    });

    axios
      .get(`http://localhost:8000/api/review/${id}`)
      .then((res) => setReviews(res.data.reviews));
  });

  function addToCart(product) {
    //CODE
    if (
      localStorage.getItem("cart") === undefined ||
      localStorage.getItem("cart") === null
    ) {
      product.quanity = qty;
      const cart = [product];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart.map((item, key) => {
        if (item._id === product._id) {
          cart[key].quanity = product.quanity;
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          const updateCart = [...cart, product];
          localStorage.setItem("cart", JSON.stringify(updateCart));
        }
      });
      toast.success("Item added to cart");
      history.push("/checkout");
    }
  }
  return <>{loading === true ? <Loading /> : render()}</>;

  function render() {
    return (
      <div className="container ">
        <div className="flex">
          <div className="details-image">
            <img src={`http://localhost:8000/${product.image}`} alt="iphone" />
          </div>
          <div className="details-desc">
            <h2>{product.name}</h2>
            <span>
              <b>${product.price}</b>
            </span>
            {product.quanity === 0 ? <div>Out of stock</div> : inStock()}
            <p>{product.description}</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex">
          <div className="review-list">
            <h3>Latest Reviews</h3>
            {reviews.map((review) => (
              <Review review={review} />
            ))}
          </div>

          <ReviewForm productId={id} />
        </div>
      </div>
    );
  }

  function inStock() {
    return (
      <div>
        <button className="btn-qty" onClick={() => qty > 0 && setQty(qty - 1)}>
          -
        </button>
        {qty}
        <button
          className="btn-qty"
          onClick={() => qty < product.quanity && setQty(qty + 1)}
        >
          +
        </button>
        {qty > 0 && (
          <button
            className="btn-addCart hover"
            onClick={() => addToCart(product)}
          >
            <MdShoppingBasket />
          </button>
        )}
      </div>
    );
  }
}

export default Product;
