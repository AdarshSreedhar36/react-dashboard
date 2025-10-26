import React from "react";
import "./login.scss";
import Logo from "../../shared-components/logo/logo";
import { useLogin } from "../../custom-hooks/use-login.hook";

const Login = () => {
  const { username, setUsername, password, setPassword, handleLogin } =
    useLogin();

  return (
    <div className="logincontainer">
      <div className="loginlogo">
        <Logo />
      </div>
      <div className="loginsection">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="loginform">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="logininput"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="logininput"
          />
          <button type="submit" className="loginbutton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
