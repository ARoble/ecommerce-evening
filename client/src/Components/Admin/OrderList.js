import AdminNav from "./AdminNav";

import { MdDone, MdVisibility } from "react-icons/md";
function OrderList() {
  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <h2 className="admin-heading">Order List</h2>
        <table>
          <tr>
            <th>Customer Name</th>
            <th>Total Order</th>
            <th>View Order</th>
            <th>FullFilled</th>
          </tr>

          <tr>
            <td>Mohamed Abdilahi</td>
            <td>$3000</td>
            <td>
              <MdVisibility />
            </td>
            <td>
              <MdDone />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
