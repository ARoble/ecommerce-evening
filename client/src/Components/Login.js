function Login() {
  return (
    <div className="login-card">
      <h2>Login</h2>
      <div>
        <input type="text" placeholder="email" className="input" />
      </div>
      <div>
        <input type="text" placeholder="password" className="input" />
      </div>
      <button className="btn-review hover">Login</button>
    </div>
  );
}

export default Login;
