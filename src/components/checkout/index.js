import React from "react";
import { useStateValue } from "../../context/context";
import CheckoutProduct from "../checkoutproduct";
import SubTotal from "../subtotal";
import "./style.scss";
import { Spring } from "react-spring/renderprops";
import { Transition } from "react-spring/renderprops";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        {basket.map((items, index) => (
          <Transition
            items={items}
            key={index}
            from={{ transform: "translate3d(0,-40px,0)" }}
            enter={{ transform: "translate3d(0,0px,0)" }}
            leave={{ transform: "translate3d(0,-40px,0)" }}
            config={{ delay: 500, duration: 500 }}
          >
            {(item) => (props) => (
              <div style={props}>
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            )}
          </Transition>
        ))}
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
