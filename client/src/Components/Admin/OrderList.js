import AdminNav from "./AdminNav";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getOrders, fullfillOrder } from "../../Services/API";

import { MdDone, MdVisibility, MdClose } from "react-icons/md";
function OrderList() {
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState();
  const [info, setInfo] = useState(false);
  useEffect(() => {
    getOrders().then((res) => setOrders(res.data.orders));
  }, [orders]);

  function fullfilled(id) {
    fullfillOrder(id).then((res) => {
      toast.success("Order fullfilled");
      setInfo(false);
    });
  }
  return (
    <div className="container flex" style={{ postion: "relative" }}>
      <AdminNav />
      {info === true && modal()}
      <div className="admin-section">
        <h2 className="admin-heading">Order List</h2>
        <table>
          <tr>
            <th>Customer Name</th>
            <th>Total Order</th>
            <th>View Order</th>
            <th>FullFilled</th>
          </tr>
          {orders.map((order) => (
            <tr>
              <td>{order.firstName}</td>
              <td>${order.total}</td>
              <td>
                <MdVisibility
                  onClick={() => {
                    setInfo(true);
                    setSelected(order);
                  }}
                />
              </td>
              <td>{order.fullfilled === true ? <MdDone /> : <MdClose />}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );

  function modal() {
    return (
      <div className="order-info">
        <div>
          <MdClose size={30} color={"red"} onClick={() => setInfo(false)} />
          <div className="m-10">
            <center>
              <h3>{selected.firstName}'s order</h3>
            </center>
          </div>
          <table>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            {selected.order.map((order) => (
              <tr>
                <td> {order.name}</td>
                <td>{order.quanity}</td>
                <td>${order.price}</td>
                <td>${order.price * order.quanity}</td>
              </tr>
            ))}
            <tr className="total">
              <td></td>
              <td></td>
              <td>Sub-Total:</td>
              <td>${selected.total}</td>
            </tr>
          </table>
          <div className="m-10">
            <center>
              {selected.fullfilled ? (
                <p style={{ color: "green" }}>Order Fullfilled</p>
              ) : (
                <button
                  className="btn-checkout"
                  onClick={() => fullfilled(selected._id)}
                >
                  Fullfill Order
                </button>
              )}
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderList;
