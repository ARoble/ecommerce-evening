import "./style.css";
import Header from "./Header";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CheckOut from "./Components/CheckOut";
import ProductAdd from "./Components/Admin/ProductAdd";
import ProductList from "./Components/Admin/ProductList";
import OrderList from "./Components/Admin/OrderList";
import PrivateRoute from "./PrivateRoute";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/checkOut" exact component={CheckOut} />
          {/* <Route exact path="/product/add" component={ProductAdd} /> */}
          <PrivateRoute exact path="/product/edit/:id" component={ProductAdd} />
          <PrivateRoute exact path="/product/add" component={ProductAdd} />
          <PrivateRoute exact path="/product/list" component={ProductList} />
          <Route exact path="/product/:id" component={Product} />
          <Route path="/order/list" component={OrderList} />
        </Switch>

        {/* <Footer /> */}
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
