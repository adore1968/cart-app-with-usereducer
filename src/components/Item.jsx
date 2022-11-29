import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";

function Item({ item }) {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <div>
      <div>
        <div>
          <img src={item.img} alt={item.title} />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>${item.price}</p>
          <button onClick={() => removeItem(item.id)}>remove</button>
        </div>
      </div>
      <div>
        <button>
          <AiOutlineArrowUp onClick={() => increaseAmount(item.id)} />
        </button>
        <p>{item.amount}</p>
        <button onClick={() => decreaseAmount(item.id)}>
          <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Item;
