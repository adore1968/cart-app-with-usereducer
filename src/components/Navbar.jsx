import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <ul>
        <li>
          <h3>UseReducer</h3>
        </li>
        <li>
          <p>{amount}</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
