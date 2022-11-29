import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav className="bg-gray-500 p-5 text-white">
      <ul className="flex justify-around items-center">
        <li className="text-xl sm:text-2xl font-semibold">
          <h3>UseReducer</h3>
        </li>
        <li className="text-lg sm:text-xl">
          <p>
            Amount: <span className="text-red-600">{amount}</span>
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
