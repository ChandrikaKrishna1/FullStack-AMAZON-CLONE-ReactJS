import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./container/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./container/Checkout";
import Login from "./container/Login";
import Payment from "./container/Payment";
import Orders from "./container/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hw7soGHIbkxSSLkfnHrqdCXn6tlkT7AiZETcJbv6kUNI0vMir3yPLImeJUIEtkyoB0cAhtcOp9jfB7qcK8BkPjI000o4VEesp"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when the app component loads....

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
