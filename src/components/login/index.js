import React from "react";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => setError(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          auth.user.updateProfile({
            displayName: auth.user.email.split("@")[0],
          });
          history.push("/");
        }
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        {error ? <div className="login__error">{error} </div> : null}
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZONE FAKE Conditions of Use & Sale.
          Please see our Privacy NOtice, our Cookies Notice and our
          Interest-Based Ads Notice <span>LIKE HELL I HAVE IT</span>
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
