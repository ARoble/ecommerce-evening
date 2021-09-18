import AdminNav from "./AdminNav";
import axios from "axios";
import { useEffect, useState } from "react";

import { MdDone, MdVisibility } from "react-icons/md";
function OrderList() {
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState();
  const [info, setInfo] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/order/")
      .then((res) => setOrders(res.data.orders));
  });

  function fullfilled(id) {
    axios
      .put(`http://localhost:8000/api/order/${id}`)
      .then((res) => console.log(res));
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
              <td>{order.fullfilled === true ? <MdDone /> : "no "}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );

  function modal() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: "grey",
          height: "80vh",
          width: "70vw",
        }}
      >
        <div>
          <button onClick={() => setInfo(false)}>Close</button>
          <h2>
            {selected.order.map((order) => (
              <div style={{ display: "flex" }}>
                <h4>
                  {order.name} {"  "}
                </h4>
                <h4>
                  {order.quanity} * {order.price}
                </h4>
                <h4> = {order.price * order.quanity}</h4>
              </div>
            ))}
            <h4>Total: {selected.total}</h4>
            <button onClick={() => fullfilled(selected._id)}>FullFilled</button>
          </h2>
        </div>
      </div>
    );
  }
}

export default OrderList;
