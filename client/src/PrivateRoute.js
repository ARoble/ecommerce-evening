import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
function PrivateRoute(props) {
  return (
    <>
      {/* {localStorage.getItem("user") === null ? (
        <Redirect to="/login" />
      ) : ( */}
      <Route path={props.path} component={props.component} />
      {/* )} */}
    </>
  );
}

export default PrivateRoute;
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";
// function PrivateRoute({ component: Component }) {
//   return (
//     <>
//       <Route
//         render={() =>
//           JSON.parse(localStorage.getItem("user")) !== null &&
//           JSON.parse(localStorage.getItem("user")).role === "admin" ? (
//             <Component />
//           ) : (
//             <Redirect to="/login" />
//           )
//         }
//       />
//     </>
//   );
// }

// export default PrivateRoute;
