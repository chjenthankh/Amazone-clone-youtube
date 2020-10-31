import React from "react";
import Product from "../product";
import "./style.scss";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/24297907/original/2b9cac9860fd3197428c04c1c3ec45a56dcd37d1/design-banner-and-edit-products-for-amazon-and-ebay.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="0"
            title="Room on the Broom"
            price={7.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51QOW4FKJrL._AC_SX184_.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="If Animals Kissed Good Night"
            price={4.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX184_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="Dog Man: Grime and Punishment: From the Creator of Captain Underpants (Dog Man #9) (9)"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/5114SwAJ1oL._AC_SX184_.jpg"
            rating={4}
          />{" "}
          <Product
            id="3"
            title="Goodnight Moon"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51+mV1XUUQL._AC_SX184_.jpg"
            rating={4}
          />{" "}
          <Product
            id="4"
            title="Where the Wild Things Are"
            price={5.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ulN35aErL._AC_SX184_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="I Love You to the Moon and Back"
            price={3.99}
            image="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
