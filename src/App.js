import React from "react";
import { Header, Home, Checkout, Login, Payment, Order } from "./components/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./global-styles.css";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./context/context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hhw11IErLY5QCPDuSp2CardjORzgKv2UsIzVqsi8XzS2QEGJU3I90F1jis8PKaSZe56Pek0onZUVkEkykBGLzz800ltJ3WeNI"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("amazonCart", JSON.stringify(basket));
  }, [basket]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Order />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
