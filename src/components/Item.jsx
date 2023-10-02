import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";

function Item({ item }) {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-32">
          <img src={item.img} alt={item.title} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-medium mb-1">{item.title}</h4>
          <p className="text-lg sm:text-xl text-gray-200 mb-2.5">
            ${item.price}
          </p>
          <button
            onClick={() => removeItem(item.id)}
            className="text-lg sm:text-xl text-red-600 hover:text-red-500 transition-colors ease-in"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-lg sm:text-xl gap-1 text-gray-200">
        <button
          onClick={() => increaseAmount(item.id)}
          className="text-green-600 hover:text-green-500 transition-colors ease-in"
        >
          <AiOutlineArrowUp />
        </button>
        <p>{item.amount}</p>
        <button
          onClick={() => decreaseAmount(item.id)}
          className="text-red-600 hover:text-red-500 transition-colors ease-in"
        >
          <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Item;
