import { useState } from "react";
import "./App.css";

const info = [
  {
    name: "Samsung Galaxy S8",
    price: "399.99",
    image: "./phone-1.png",
  },
  {
    name: "Google Pixel",
    price: "499.99",
    image: "./phone-2.png",
  },
  {
    name: "Xiaomi Redmi Note 2",
    price: "699.99",
    image: "./phone-3.png",
  },
  {
    name: "Samsung Galaxy S7",
    price: "$599.99",
    image: "./phone-3.png",
  },
];

function App() {
  return (
    <>
      <nav class="nav">
        <h2>Use Reducer</h2>
        <div class="cart-icon-cont">
          <ion-icon name="cart" class="cart-icon"></ion-icon>
        </div>
        <div class="cart-number">0</div>
      </nav>
    </>
  );
}

export default App;
