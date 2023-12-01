import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Payment from "./Payment";
import ShippingAddress from "./ShippingAddress";
import { useLocation } from "react-router-dom"; // Import useLocation in the Header component
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51OFbvaF6wyEfqsLkFf90knhsjHreUkPKnx1jraH2XnnEqKOsoumRyUPxvi0W4fzJbC0VIfzPFtwjqd6sghOiMl5i00lshS9iHA"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
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
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Check if the current location is either Home or Checkout
  const showHeader =
    location.pathname === "/amazon-clone" ||
    location.pathname === "/checkout" ||
    location.pathname === "/payment" ||
    location.pathname === "/orders";

  return (
    <>
      {showHeader && <Header />} {/* Conditionally render Header */}
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addressselect" element={<ShippingAddress />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/amazon-clone" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
