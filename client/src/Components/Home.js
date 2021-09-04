import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./../Loading";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/").then((res) => {
      setProducts(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="flex main-banner">
        <div className="featured-product">
          <img
            src="./iphone.jpg"
            alt="fetured product"
            className="featured-image"
          />
        </div>
        <div className="featured-info">
          <div className="featured-text">
            <span>50% off DISCOUNT!!</span>
            <h1>Iphone X</h1>
            <h3>$480.98</h3>
            <p>
              some description about the product some description about the
              product some description about the product some description about
              the product
            </p>
            <button className="btn-feature hover">See Product</button>
          </div>
        </div>
      </div>

      <div className="product-list ">
        <div className="container">
          <div className="flex heading">
            <h2>Deals of the day</h2>
            <span>See all</span>
          </div>
          <div className="deals flex">
            {loading === true ? (
              <Loading />
            ) : (
              products.map((product) => <ProductCard data={product} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
