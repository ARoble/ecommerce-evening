import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
function PrivateRoute({ component: Component }) {
  const [user, setUser] = useState(false);

  return (
    <>
      <Route
        render={() =>
          JSON.parse(localStorage.getItem("user")) !== null &&
          JSON.parse(localStorage.getItem("user")).role === "admin" ? (
            <Component />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </>
  );
}

export default PrivateRoute;
