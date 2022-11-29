import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const url = "https://course-api.com/react-useReducer-cart-project";

export function AppContextProvider({ children }) {
  const initalState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
