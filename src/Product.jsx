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
      <div className="product-information">
        <img src={image} className="product-img" />

        <div className="product-info">
          <h5 className="product-name">{name}</h5>
          <p className="product-price">${price}</p>
          <button
            className="remove-btn"
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

      <div className="amount-cont">
        <ion-icon
          name="chevron-up"
          className="arrow-icon up"
          onClick={() => increaseAmount(id)}
        ></ion-icon>
        <span className="product-amount">{amount}</span>
        <ion-icon
          name="chevron-down"
          className="arrow-icon down"
          onClick={() => decreseAmount(id)}
        ></ion-icon>
      </div>
    </article>
  );
}

export default Product;
