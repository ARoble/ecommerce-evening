import { MdAddShoppingCart } from "react-icons/md";
import { BrowserRoute as Router, Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`http://localhost:8000/${data.image}`} alt="product" />
      </div>
      <div className="product-details flex">
        <div>
          <h3>
            <Link className="link" to={`/product/${data._id}`}>
              {data.name}
            </Link>
          </h3>
          <span>${data.price}</span>
        </div>

        <MdAddShoppingCart className="cart-hover" size={"33px"} />
      </div>
    </div>
  );
}
export default ProductCard;
