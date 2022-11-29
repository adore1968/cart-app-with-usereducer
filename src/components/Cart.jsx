import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Item from "./Item";
import Loading from "./Loading";

function Cart() {
  const { cart, loading, total, clearCart, fetchCart } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cart.length < 1) {
    return (
      <div className="text-center text-white ">
        <h1
          className="mb-5 text-2xl sm:text-4xl
font-bold"
        >
          The cart is empty
        </h1>
        <button
          className="text-lg sm:text-xl text-red-600 border-red-600 border py-1 px-4 rounded inline-block hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
          onClick={() => fetchCart()}
        >
          Refresh?
        </button>
      </div>
    );
  }

  return (
    <div className=" container sm:max-w-4xl text-white">
      <h1 className="text-center text-2xl sm:text-4xl font-bold">Your Bag</h1>
      <div className="py-5">
        {cart.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className="flex justify-between items-center pt-4 border-t text-lg sm:text-xl font-semibold">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <div className="text-center mt-10 text-red-600 text-lg sm:text-xl">
        <button
          onClick={() => clearCart()}
          className="uppercase border border-red-600 py-1 px-4 rounded hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors "
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
