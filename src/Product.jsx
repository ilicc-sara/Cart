import React, { useState } from "react";

function Product(props) {
  const { name, price, id, image, setProducts } = props;

  const [amount, setAmount] = useState(1);

  function incrementCount() {
    setAmount((prevNum) => prevNum + 1);
  }

  function decrementCount() {
    setAmount((prevNum) => prevNum - 1);
    if (amount === 1) {
      setProducts((previous) =>
        previous.filter((product) => product.id !== id)
      );
    }
  }

  // setProducts((prev) => {
  //   return prev.map((product) => {
  //     return product.id === id ? { ...product, amount: amount } : product;
  //   });
  // });

  return (
    <article>
      <div class="product-information">
        <img src={image} class="product-img" />

        <div class="product-info">
          <h5 class="product-name">{name}</h5>
          <p class="product-price">${price}</p>
          <button
            class="remove-btn"
            onClick={() =>
              setProducts((previous) =>
                previous.filter((product) => product.id !== id)
              )
            }
          >
            remove
          </button>
        </div>
      </div>

      <div class="amount-cont">
        <ion-icon
          name="chevron-up"
          class="arrow-icon up"
          onClick={() => incrementCount()}
        ></ion-icon>
        <span class="product-amount">{amount}</span>
        <ion-icon
          name="chevron-down"
          class="arrow-icon down"
          onClick={() => decrementCount()}
        ></ion-icon>
      </div>
    </article>
  );
}

export default Product;
