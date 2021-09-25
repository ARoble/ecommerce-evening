import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function login() {
    //code

    axios
      .post("http://localhost:8000/api/user/signUp", user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("User Logged In");
        history.push("/checkout");
      })
      .catch((e) => toast.error(e.response.data.message));
  }
  return (
    <div className="login-card">
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="email"
          className="input"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="btn-review hover" onClick={() => login()}>
        Login
      </button>
    </div>
  );
}

export default Login;
