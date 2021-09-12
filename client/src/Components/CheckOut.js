function CheckOut() {
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

          <tr>
            <td>Iphone</td>
            <td>10</td>
            <td>1000</td>
            <td>10000</td>
          </tr>
          <tr className="table-total">
            <td colspan="2"></td>
            <td>TOTAL</td>
            <td>10000</td>
          </tr>
        </table>
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <button className="btn-checkout">Proceed to checkout</button>
        </div>
      </div>
      <div className="flex shipping-info">
        <div className="shipping-form">
          <h3>Shipping information</h3>
          <div>
            <input type="text" placeholder="First Name" className="input" />
          </div>
          <div>
            <input type="text" placeholder="Second Name" className="input" />
          </div>
          <div>
            <input type="text" placeholder="Email" className="input" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Shipping Address"
              className="input"
            />
          </div>
          <div>
            <input type="text" placeholder="Phone Number" className="input" />
          </div>
          <div>
            <button className="btn-checkout" style={{ float: "right" }}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
