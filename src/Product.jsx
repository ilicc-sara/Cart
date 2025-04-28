import React, { useState } from "react";

function Product(props) {
  const { name, price, id, image, setProducts, amount } = props;

  function increaseAmount(id) {
    setProducts((previous) =>
      previous.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      )
    );
  }

  function decreseAmount(id) {
    setProducts((previous) =>
      previous.map((product) =>
        product.id === id ? { ...product, amount: product.amount - 1 } : product
      )
    );
    // Zbog ovog koda dole sam morala staviti funkcije ovde
    if (amount === 1) {
      setProducts((previous) =>
        previous.filter((product) => product.id !== id)
      );
    }
  }
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
          onClick={() => increaseAmount(id)}
        ></ion-icon>
        <span class="product-amount">{amount}</span>
        <ion-icon
          name="chevron-down"
          class="arrow-icon down"
          onClick={() => decreseAmount(id)}
        ></ion-icon>
      </div>
    </article>
  );
}

export default Product;
