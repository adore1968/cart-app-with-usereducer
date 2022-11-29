import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";

function Item({ item }) {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <div className="flex justify-between items-center my-5">
      <div className="flex items-center">
        <div className="w-24">
          <img src={item.img} alt={item.title} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
          <p className="mt-1 mb-1.5 text-lg sm:text-xl font-semibold">
            ${item.price}
          </p>
          <button
            onClick={() => removeItem(item.id)}
            className="text-lg sm:text-xl text-red-600"
          >
            remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-lg sm:text-xl">
        <button
          onClick={() => increaseAmount(item.id)}
          className="text-red-600"
        >
          <AiOutlineArrowUp />
        </button>
        <p className="my-1">{item.amount}</p>
        <button
          onClick={() => decreaseAmount(item.id)}
          className="text-red-600"
        >
          <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Item;
