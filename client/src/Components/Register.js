import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import { registerUser } from "../Services/API";

function Register() {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  function signUp() {
    registerUser(user)
      .then(() => {
        toast.success("user created");
        history.push("/");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <div className="login-card">
      <h2>Sign up</h2>
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
          type="text"
          placeholder="username"
          className="input"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
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

      <button className="btn-review hover" onClick={() => signUp()}>
        Sign Up
      </button>
      <div>
        <small>
          Don't have an account? <Link to="login">Login</Link>
        </small>
      </div>
    </div>
  );
}

export default Register;
