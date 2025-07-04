import { useState } from "react";
import "./App.css";
import Product from "./Product.jsx";

const info = [
  {
    name: "Samsung Galaxy S8",
    price: "399.99",
    image: "./assets/phone-1.png",
    id: 1,
    amount: 1,
  },
  {
    name: "Google Pixel",
    price: "499.99",
    image: "./assets/phone-2.png",
    id: 2,
    amount: 1,
  },
  {
    name: "Xiaomi Redmi Note 2",
    price: "699.99",
    image: "./assets/phone-3.png",
    id: 3,
    amount: 1,
  },
  {
    name: "Samsung Galaxy S7",
    price: "599.99",
    image: "./assets/phone-4.png",
    id: 4,
    amount: 1,
  },
];

function App() {
  const [products, setProducts] = useState(info);

  const totalPrice = products.reduce((acc, cur) => {
    return acc + Number(cur.price) * cur.amount;
  }, 0);

  return (
    <>
      <nav className="nav">
        <h2>Use Reducer</h2>
        <div className="cart-icon-cont">
          <ion-icon name="cart" className="cart-icon"></ion-icon>
        </div>
        <div className="cart-number">
          {products.reduce((acc, cur) => {
            return acc + cur.amount;
          }, 0)}
        </div>
      </nav>

      <section className="cart">
        <header>
          <h3>YOUR BAG</h3>
        </header>

        <div className="products">
          {products.map((product, index) => (
            <Product key={index} {...product} setProducts={setProducts} />
          ))}
        </div>

        <footer className={`${products.length === 0 ? "hidden" : ""}`}>
          <div className="total-price-cont">
            <h4>Total</h4>{" "}
            <span className="total-price">$ {`${totalPrice.toFixed(2)}`}</span>
          </div>
          <button className="clear-btn" onClick={() => setProducts([])}>
            Clear All
          </button>
        </footer>
        <h3 className={`${products.length === 0 ? "" : "hidden"}`}>
          Your Bag Is Empty...
        </h3>
      </section>
    </>
  );
}

export default App;
