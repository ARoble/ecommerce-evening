import { MdAddShoppingCart } from "react-icons/md";

function ProductCard({ data }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="./iphone.png" alt="product" />
      </div>
      <div className="product-details flex">
        <div>
          <h3>{data.name}</h3>
          <span>${data.price}</span>
        </div>

        <MdAddShoppingCart className="cart-hover" size={"33px"} />
      </div>
    </div>
  );
}
export default ProductCard;
