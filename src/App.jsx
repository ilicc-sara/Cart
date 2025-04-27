import { useState } from "react";
import "./App.css";

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
