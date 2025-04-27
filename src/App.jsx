import { useState } from "react";
import "./App.css";
import Product from "./Product.jsx";

const info = [
  {
    name: "Samsung Galaxy S8",
    price: "399.99",
    image: "./phone-1.png",
    id: 1,
    amount: 1,
  },
  {
    name: "Google Pixel",
    price: "499.99",
    image: "./phone-2.png",
    id: 2,
    amount: 1,
  },
  {
    name: "Xiaomi Redmi Note 2",
    price: "699.99",
    image: "./phone-3.png",
    id: 3,
    amount: 1,
  },
  {
    name: "Samsung Galaxy S7",
    price: "599.99",
    image: "./phone-3.png",
    id: 4,
    amount: 1,
  },
];

function App() {
  const [products, setProducts] = useState(info);

  const totalPrice = products.reduce((acc, cur) => {
    return acc + Number(cur.price) * cur.amount;
  }, 0);

  // console.log(totalPrice);

  return (
    <>
      <nav class="nav">
        <h2>Use Reducer</h2>
        <div class="cart-icon-cont">
          <ion-icon name="cart" class="cart-icon"></ion-icon>
        </div>
        <div class="cart-number">0</div>
      </nav>

      <section class="cart">
        <header>YOUR BAG</header>

        <div class="products">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
              amount={product.amount}
              setProducts={setProducts}
            />
          ))}
        </div>

        <footer>
          <div class="total-price-cont">
            <span>Total</span> <span class="total-price">${totalPrice}</span>
          </div>
          <button class="clear-btn" onClick={() => setProducts([])}>
            Clear All
          </button>
        </footer>
      </section>
    </>
  );
}

export default App;
