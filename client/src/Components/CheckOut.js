import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { placeOrder } from "../Services/API";
function CheckOut() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phone: 0,
    email: "",
    shipping: "",
  });
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart")) !== null) {
      const items = JSON.parse(localStorage.getItem("cart"));
      let sub = 0;
      for (let i = 0; i < items.length; i++) {
        sub += items[i].price * items[i].quanity;
      }

      setTotal(sub);
      setCart(items);
    }
  }, []);

  function placeOrderFunc() {
    const body = {
      ...formData,
      order: cart,
      total,
    };

    placeOrder(body)
      .then(() => {
        toast.success("Thank you for your order");
        history.pushState("/");
      })
      .catch((e) => toast.error(e.response.data.message));

    localStorage.removeItem("cart");
  }
  return (
    <div className="container ">
      <h1 className="admin-heading">CheckOut</h1>
      <div className="checkout">
        <table>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {cart.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.quanity}</td>
              <td>{item.price}</td>
              <td>{item.quanity * item.price}</td>
            </tr>
          ))}

          <tr className="table-total">
            <td colspan="2"></td>
            <td>TOTAL</td>
            <td>{total}</td>
          </tr>
        </table>
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          {toggle === true ? (
            <button
              style={{ backgroundColor: "red" }}
              className="btn-checkout"
              onClick={() => setToggle(!toggle)}
            >
              close
            </button>
          ) : (
            <button className="btn-checkout" onClick={() => setToggle(!toggle)}>
              Proceed to checkout
            </button>
          )}
        </div>
        {toggle === true && form()}
      </div>
    </div>
  );

  function form() {
    return (
      <div className="flex shipping-info">
        <div className="shipping-form">
          <h3>Shipping information</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Second Name"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, secondName: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Shipping Address"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, shipping: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className="btn-checkout"
              style={{ float: "right" }}
              onClick={() => placeOrderFunc()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
