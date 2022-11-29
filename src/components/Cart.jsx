import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Item from "./Item";

function Cart() {
  const { cart, total, clearCart } = useGlobalContext();
  return (
    <div>
      <h1>Your Bag</h1>
      <div>
        {cart.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div>
        <p>Total</p>
        <p>${total}</p>
      </div>
      <div>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
