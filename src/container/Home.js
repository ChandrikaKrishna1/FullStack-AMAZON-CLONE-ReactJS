import React from "react";
import "./styles/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="346764546"
            title="Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR)"
            price={19568.85}
            rating={4}
            image="https://m.media-amazon.com/images/I/71MvL2kCFCL._AC_UY218_.jpg"
          />
          <Product
            id="8765908"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="567398780"
            title="Kuccu Stand Mixer, 8.5 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Electric Kitchen Mixer with Dough Hook, Flat Beater & Wire Whisk, Mixing Bowl (8.5-QT, Silver)"
            price={679.8}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71d6fdUzZtL._AC_SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="653253647"
            title="AmazonBasics Stainless Steel Insulated Water Bottle with Spout Lid – 20-Ounce, Grey"
            price={991.76}
            rating={5}
            image="https://m.media-amazon.com/images/I/716rz++E-WL._AC_UL320_.jpg"
          />
          <Product
            id="9708734466"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price={20538.67}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UY218_.jpg"
          />
          <Product
            id="4632535541"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backl..."
            price={36578.52}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="905763435"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="2132423476"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Faric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="2097856574"
            title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White"
            price={2758.65}
            rating={3}
            image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UL320_.jpg"
          />
          <Product
            id="0978563435"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={40000.78}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
