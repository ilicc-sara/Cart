import React from "react";

function Product(props) {
  const { name, price, id, image } = props;
  return (
    <article>
      <div class="product-information">
        <img src={image} class="product-img" />

        <div class="product-info">
          <h5 class="product-name">{name}</h5>
          <p class="product-price">${price}</p>
          <button class="remove-btn">remove</button>
        </div>
      </div>

      <div class="amount-cont">
        <ion-icon name="chevron-up" class="arrow-icon up"></ion-icon>
        <span class="product-amount">1</span>
        <ion-icon name="chevron-down" class="arrow-icon down"></ion-icon>
      </div>
    </article>
  );
}

export default Product;
