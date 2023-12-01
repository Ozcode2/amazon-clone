import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import FlipMove from "react-flip-move";
import Header from "./Header";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
    <Header />
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_>jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket </h2>
          <FlipMove>
            {basket.map((item) => (
              <div key={item.id}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
    </>
  );
};

export default Checkout;
